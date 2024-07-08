FROM --platform=linux/amd64 node:18-alpine AS build

WORKDIR /app

# ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=http://10.152.183.100:3001

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runtime

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3000


USER node
CMD ["npm", "start"]