FROM node:alpine AS builder
RUN apk add --no-cache libc6-compat openssl
RUN apk update

# Set working directory
WORKDIR /app
RUN yarn global add turbo@1.6.3
COPY . .
RUN turbo prune --scope=web --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:alpine AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

ADD prisma .
RUN npx prisma generate

RUN yarn turbo run build --filter=web

# Build the app
FROM builder as runner
WORKDIR /app

# COPY --from=installer /app/node_modules /app/node_modules

# ADD . .
# RUN npm run build

# # Finally, build the production image with minimal footprint
# FROM installer

# WORKDIR /app

# COPY --from=production-deps /app/node_modules /app/node_modules
# COPY --from=build /app/node_modules/.prisma /app/node_modules/.prisma

# COPY --from=build /app/build /app/build
# COPY --from=build /app/public /app/public
# ADD . .

CMD ["yarn", "start"]
