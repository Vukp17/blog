
FROM node:20-alpine as build-stage

# Setuo working directory
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build --prod


FROM nginx:alpine as serve-stage

COPY --from=build-stage /app/dist/article_test /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

# Expose port for Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
