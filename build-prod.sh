#! /bin/bash

set -e 

docker run --env-file .env.prod -it --rm --name build-prod -v "$PWD"/front-end:/app -w /app node:16-alpine3.11 npm i
docker run --env-file .env.prod -it --rm --name build-prod -v "$PWD"/front-end:/app -w /app node:16-alpine3.11 npm run build

docker-compose -f docker-compose.prod.yml build 

docker-compose -f docker-compose.prod.yml up -d

echo "Esperando a que se inicien los containers..."
sleep 5

docker-compose -f  docker-compose.prod.yml exec  backend rails db:create 
docker-compose -f  docker-compose.prod.yml exec  backend rails db:migrate
docker-compose -f  docker-compose.prod.yml exec  backend rails db:seed