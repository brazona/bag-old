#!/bin/bash

rm -rf ./src/assets/env.run-time.js
DIRETORIO_ENV=../../.resources/environments/local.env
DOCKER_ENV=dockercompose

#cp ./src/environments/environment.ts ./src/environments/environment.local.ts
cp ./src/assets/env.template.js ./src/assets/env.run-time.js
echo "Valor paramentro: $1"
echo "Valor variável: $DOCKER_ENV"

if [ $1 = $DOCKER_ENV ]; then
    echo "ENVIRONMENT: DOCKER COMPOSE"
    DIRETORIO_ENV=../../.resources/environments/docker.env
else
    echo "ENVIRONMENT: LOCAL"
fi
sleep 5
while read -r line || [[ -n "$line" ]];
do
  varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
  varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
  value='${'$varname'}'
  #sed -i 's/'$value'/'$varvalue'/' ./src/environments/environment.local.ts
  sed -i 's/'$value'/'$varvalue'/' ./src/assets/env.run-time.js  
done < $DIRETORIO_ENV
#done < ../../.resources/environments/local.env
envsubst < ./src/assets/env.run-time.js > ./src/assets/env.js
rm -rf ./src/assets/env.run-time.js
