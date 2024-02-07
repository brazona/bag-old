#################
# Maven Build App #
#################
FROM maven:3.8.4-eclipse-temurin-11 AS build  
#
# Defaults to production, docker-compose overrides this to development on build and run.
ARG ENVIRONMENT=dockerfile
ARG VERSION=1.0.10

ENV APP_VERSION $VERSION
ENV APP_ENVIRONMENT $ENVIRONMENT

WORKDIR /usr/src/app
COPY . .
RUN mvn clean install

################
# Run in NGINX #
################
FROM nginx:latest

COPY --from=build /usr/src/app/app-ui/nginx.conf  /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/app-ui/dist/app-ui /usr/share/nginx/html
#ENTRYPOINT ["nginx", "-g", "daemon off;"]
# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
# Expose port 80
EXPOSE 80

