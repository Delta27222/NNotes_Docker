FROM --platform=linux/amd64 node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV NEXT_PUBLIC_BASE_URL=URL_BACKEND
RUN npm run build

FROM node:18-alpine AS runtime

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3000

ENV NEXT_PUBLIC_BASE_URL=http://localhost:3001

USER node
CMD ["npm", "start"]