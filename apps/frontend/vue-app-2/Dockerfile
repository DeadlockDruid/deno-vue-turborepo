ARG NODE_VERSION=20.18.3
FROM node:${NODE_VERSION}-alpine AS base

# Set working directory to monorepo root
WORKDIR /app

# Install PNPM globally
RUN npm install -g pnpm@latest

# Copy packages & workspace config
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy shared packages for PNPM to work
COPY packages packages/

# Install packages at workspace level
RUN pnpm install --frozen-lockfile

# Set working directory to Vue app
WORKDIR /app/apps/frontend/vue-app-2

# Copy Vue app source
COPY apps/frontend/vue-app-2 ./

# Install PNPM dependencies inside vue app (pnpm lock files are only created at workspace level)
RUN pnpm install

# Start Vue app
CMD ["pnpm", "run", "dev"]
