#Execute docker compose with file .env
docker network create bag-app-net
docker compose --env-file .resources/environments/docker.env up -d --build --force-recreate
