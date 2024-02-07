#!/bin/bash
NPM_RUN="$1"
PATH_ENV=../.resources/environments/.env

rm -rf ./src/environments/environment.prod.ts
rm -rf ./src/environments/environment.local.ts
rm -rf ./src/assets/env.run-time.js
rm -rf lista_env.txt
if [ $NPM_RUN = "build" ] 
then
  echo "Run script Environment Container Docker"
  cp ./src/environments/environment.ts ./src/environments/environment.prod.ts
else
  echo "Run script Environment Localhost"
  cp ./src/environments/environment.ts ./src/environments/environment.local.ts
  cp ./src/assets/env.template.js ./src/assets/env.run-time.js
  while read -r line || [[ -n "$line" ]];
  do
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
    value='${'$varname'}'
    #sed -i 's/'$value'/'$varvalue'/' ./src/environments/environment.local.ts
    sed -i 's/'$value'/'$varvalue'/' ./src/assets/env.run-time.js  
  done < "$PATH_ENV"
  envsubst < ./src/assets/env.run-time.js > ./src/assets/env.js
  rm -rf ./src/assets/env.run-time.js
fi