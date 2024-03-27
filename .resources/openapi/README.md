# brazona-agile-framework-app-api-admin





npx redoc-cli --output index.html bundle .resources/openapi/api-spec-v3.yaml
npx @redocly/cli build-docs --config=./.resources/openapi/api-spec-v3.yaml
npx redoc-cli --output index.html bundle openapi.yaml