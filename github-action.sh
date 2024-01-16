#!/bin/bash


#sed 's/$NAMESPACE/development/' ./app-ui/deployment.yaml ;
#sed 's/$IMAGE/docker pull ghcr.io/brazona/business-administration-games/app-ui:9-snapshot/' ./app-ui/deployment.yaml |
#sed 's/$DNS/bag.brazona.com.br/' ./app-ui/deployment.yaml
#scat ./app-ui/deployment.yaml

sed 's/$NAMESPACE/development/ ; s/$DNS/bag.brazona.com.br/ ; s/$IMAGE/app-ui:9-snapshot/' ./app-ui/deployment.yaml