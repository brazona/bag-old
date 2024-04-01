# brazona-agile-framework-app-api-admin

hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".

npx redoc-cli --output index.html bundle .resources/openapi/api-spec-v3.yaml
npx @redocly/cli build-docs --config=./.resources/openapi/api-spec-v3.yaml
npx redoc-cli --output index.html bundle openapi.yaml