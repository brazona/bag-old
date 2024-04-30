#Execute app local with env file

echo execute script app local
sleep 5
cd ../.resources/environments
#export $(cat local.env | xargs)
if [ -f local.env ]; then
  export $(echo $(cat local.env | sed 's/#.*//g'| xargs) | envsubst)
fi
printenv
cat local.env
sleep 6
#export $(grep -v '^#' local.env | xargs)
cd ../../app
#mvn package -P local -DskipTests
mvn -f ./app-api/config-server/ spring-boot:run