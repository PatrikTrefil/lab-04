FROM node:17.8 AS build
WORKDIR /opt/build
COPY ./ ./
RUN npm ci && npm run build

FROM httpd:2.4
COPY --from=build /opt/build/build /usr/local/apache2/htdocs/
