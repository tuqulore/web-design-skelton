FROM node:18-slim as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --non-interactive --frozen-lockfile
COPY postcss.config.js tailwind.config.js .eleventy.js ./
COPY src/ ./src
RUN yarn build

FROM node:18-slim as install
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --non-interactive --frozen-lockfile --production

FROM gcr.io/distroless/nodejs:18
WORKDIR /app
ENV NODE_ENV=production
COPY serve.js ./
COPY --from=build /app/dist ./dist
COPY --from=install /app/node_modules ./node_modules

CMD ["serve"]
