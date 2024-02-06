export const environment = {
  production: true,
  APP_API:{
    URL:'${APP_API_URL}',
    AUTH_USER:'${SECURITY_OAUTH_CLIENT_NAME}',
    AUTH_PASS:'${SECURITY_OAUTH_CLIENT_PASS}',
    GRANT: '${APP_API_GRANT}'
  },
};