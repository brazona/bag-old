#!/bin/bash

NPM_RUN="$1"
ENV_CLOUD="build"

rm -rf ./src/environments/environment.prod.ts
rm -rf ./src/environments/environment.local.ts
rm -rf ./src/assets/env.run-time.js

if [ $NPM_RUN = $ENV_CLOUD ] 
then
  cp ./src/environments/environment.ts ./src/environments/environment.prod.ts
else
  cp ./src/environments/environment.ts ./src/environments/environment.local.ts
  cp ./src/assets/env.template.js ./src/assets/env.run-time.js
  while read -r line || [[ -n "$line" ]];
  do
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
    value='${'$varname'}'
    #sed -i 's/'$value'/'$varvalue'/' ./src/environments/environment.local.ts
    sed -i 's/'$value'/'$varvalue'/' ./src/assets/env.run-time.js  
  done < ../.resources/environments/.env
  envsubst < ./src/assets/env.run-time.js > ./src/assets/env.js
  rm -rf ./src/assets/env.run-time.js
fi