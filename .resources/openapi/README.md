# brazona-agile-framework-app-api-admin

http://localhost:8484/auth/realms/brazona-agile-framework/protocol/openid-connect/token
http://localhost:8484/auth/realms/brazona-agile-framework


acf87c69-1107-4177-a013-00c74cafd254
Api-gateway 

60a3488a-eb6a-4359-9a33-762e972229ac
authentication-server
npx redoc-cli --output index.html bundle .resources/openapi/api-spec-v3.yaml
npx @redocly/cli build-docs --config=./.resources/openapi/api-spec-v3.yaml
npx redoc-cli --output index.html bundle openapi.yaml