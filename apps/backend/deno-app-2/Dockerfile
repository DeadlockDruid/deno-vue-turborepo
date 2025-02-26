ARG DENO_VERSION=2.2.2
FROM denoland/deno:${DENO_VERSION}

# Set up persistent cache & home directories
ENV DENO_DIR=/deno_cache
ENV DENO_HOME=/deno_home

# Create directories for caching
RUN mkdir -p $DENO_DIR $DENO_HOME

WORKDIR /app

# Copy workspace configuration
COPY apps/backend/deno.json apps/backend/shared_import_map.json ./apps/backend/

# Copy entire backend workspace
COPY apps/backend ./apps/backend

# Set working directory to backend workspace root
WORKDIR /app/apps/backend

# Cache dependencies at the workspace level
RUN deno cache --config=deno.json --import-map=shared_import_map.json deno-app-2/main.ts

# Set working directory to current project
WORKDIR /app/apps/backend/deno-app-2

# Start the app
CMD ["deno", "task", "start"]
