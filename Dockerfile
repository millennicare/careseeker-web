# Stage 1: Build the application
FROM node:22-alpine3.21 AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# Stage 2: Create the final production image
FROM node:22-alpine3.21

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/package.json ./

# Install production dependencies
RUN corepack enable pnpm && pnpm install --prod

EXPOSE 3000

CMD ["pnpm", "start"]