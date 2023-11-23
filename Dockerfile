FROM node:18 as build
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY . /app
RUN yarn build

FROM nginx:1.22.0-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]