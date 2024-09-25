# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=22.8.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Next.js"

# Set working directory
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Install pnpm globally
ARG PNPM_VERSION=9.9.0
RUN npm install -g pnpm@$PNPM_VERSION


# Stage 1: Dependencies & Build
FROM base as build

# Install system dependencies for build
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Copy only package.json and pnpm-lock.yaml to avoid unnecessary rebuilds
COPY --link package.json pnpm-lock.yaml ./

# Install dependencies for building
RUN pnpm install --frozen-lockfile --prod=false

# Copy all application code
COPY --link . .

# Build application
RUN pnpm run build

# Prune development dependencies
RUN pnpm prune --prod


# Stage 2: Production Image
FROM base

# Copy only the built application from the build stage
COPY --from=build /app /app

# Expose port 3000
EXPOSE 3000

# Start the Next.js server
CMD ["pnpm", "run", "start"]
