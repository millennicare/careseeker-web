# syntax=docker/dockerfile:1.6

# ---- Base builder ----
FROM node:22-alpine AS base
WORKDIR /app

# Enable pnpm globally (caches better than re-running corepack every stage)
RUN corepack enable

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

# Copy rest of the source code after deps (maximizes layer caching)
COPY . .

# Build the project
RUN pnpm build

# ---- Production runtime ----
FROM node:22-alpine AS runner
WORKDIR /app

# Copy output and only what's needed for runtime
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./
COPY --from=deps /app/node_modules ./node_modules

RUN apt-get update \
  && apt-get install -y --no-install-recommends curl ca-certificates \
  && rm -rf /var/lib/apt/lists/*

# Install dotenvx
RUN curl -sfS https://dotenvx.sh/install.sh | sh

EXPOSE 3000

CMD ["pnpm", "start"]
