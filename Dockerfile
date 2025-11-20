# syntax=docker/dockerfile:1.6

# ---- Base builder ----
FROM node:24-alpine3.21 AS base
WORKDIR /app

# Enable pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# ---- Dependencies stage ----
FROM base AS deps
WORKDIR /app

# Copy only dependency files first for caching
COPY package.json pnpm-lock.yaml ./

# Install deps — leverage Docker cache (doesn't re-run unless lockfile changes)
RUN pnpm fetch
RUN pnpm install --frozen-lockfile

# ---- Build stage ----
FROM deps AS builder

ARG VITE_SERVER_URL
ENV VITE_SERVER_URL=$VITE_SERVER_URL

# Copy rest of the source code after deps (maximizes layer caching)
COPY . .

# Build the project
RUN pnpm build

# ---- Production runtime ----
FROM node:24-alpine3.21 AS runner
WORKDIR /app

# Install pnpm in the runner stage
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy built files and dependencies
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.env.production ./
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000

CMD ["pnpm", "start"]
