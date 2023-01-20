FROM node:16-bullseye-slim AS pruner
RUN apt-get update && apt-get install -y openssl
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=web --docker
RUN find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

# Base strategy to have layer caching
FROM node:16-bullseye-slim AS base
RUN apt-get update && apt-get install -y openssl
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/yarn.lock ./yarn.lock
# COPY --from=pruner /app/out/full/ .

FROM base AS dev-deps
WORKDIR /app
RUN corepack enable
RUN yarn install --frozen-lockfile

FROM base AS production-deps
WORKDIR /app
RUN corepack enable
ENV NODE_ENV production
RUN yarn install --frozen-lockfile
COPY --from=pruner /app/out/full/apps/web/prisma/schema.prisma /app/apps/web/prisma/schema.prisma
RUN npx prisma generate --schema /app/apps/web/prisma/schema.prisma

FROM base AS builder
WORKDIR /app
RUN corepack enable
# ENV NODE_ENV production
COPY --from=pruner /app/out/full/ .
COPY --from=dev-deps /app/ .
COPY turbo.json turbo.json
RUN cd apps/web && yarn setup:generate && cd ../..
RUN yarn build --filter=web

# Runner
FROM node:16-bullseye-slim AS runner
RUN apt-get update && apt-get install -y openssl
WORKDIR /app
RUN corepack enable
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 remixjs
RUN chown -R remixjs:nodejs /app
USER remixjs

COPY --from=pruner --chown=remixjs:nodejs /app/out/full/ .
COPY --from=production-deps --chown=remixjs:nodejs /app .
COPY --from=builder --chown=remixjs:nodejs /app/apps/web/build/index.js ./apps/web/build/index.js
COPY --from=builder --chown=remixjs:nodejs /app/apps/web/build ./apps/web/build
COPY --from=builder --chown=remixjs:nodejs /app/apps/web/public ./apps/web/public

CMD ["turbo", "run", "web"]


# COPY --from=pruner /app/out/full/apps/web/prisma/schema.prisma /app/apps/web/prisma/schema.prisma
# RUN prisma generate --schema /app/apps/web/prisma/schema.prisma

# FROM base AS builder
# WORKDIR /app
# RUN corepack enable
# # ENV NODE_ENV production
# COPY --from=pruner /app/out/full/ .
# COPY --from=dev-deps /app/ .
# COPY turbo.json turbo.json
# RUN yarn run generate
# RUN yarn run build --filter=remix-app...



# # Add lockfile and package.json's of isolated subworkspace
# FROM node:alpine AS installer
# RUN apk add --no-cache libc6-compat
# RUN apk update
# WORKDIR /app

# # First install the dependencies (as they change less often)
# COPY .gitignore .gitignore
# COPY --from=builder /app/out/json/ .
# COPY --from=builder /app/out/yarn.lock ./yarn.lock
# RUN yarn install

# COPY --from=builder /app/out/full/ .
# COPY turbo.json turbo.json

# ADD prisma .
# RUN npx prisma generate

# RUN yarn turbo run build --filter=web

# # Build the app
# FROM builder as runner
# WORKDIR /app

# # COPY --from=installer /app/node_modules /app/node_modules

# # ADD . .
# # RUN npm run build

# # # Finally, build the production image with minimal footprint
# # FROM installer

# # WORKDIR /app

# # COPY --from=production-deps /app/node_modules /app/node_modules
# # COPY --from=build /app/node_modules/.prisma /app/node_modules/.prisma

# # COPY --from=build /app/build /app/build
# # COPY --from=build /app/public /app/public
# # ADD . .

# CMD ["yarn", "start"]
