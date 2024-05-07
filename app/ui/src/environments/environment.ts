export const environment = {
  production: true,
  //@ts-ignore
  ENVIRONMENT: window["env"]["APP_ENVIRONMENT"],
  //@ts-ignore
  VERSION: window["env"]["APP_VERSION"],
  //@ts-ignore
  APP_API:{
    //@ts-ignore
    URL: window["env"]["APP_API_URL"],
    BASIC_AUTH:{
      //@ts-ignore
      AUTH_USER: window["env"]["AUTHENTICATION_USER"],
      //@ts-ignore
      AUTH_PASS:window["env"]["AUTHENTICATION_PASS"]
    },
    
    //@ts-ignore
    GRANT: window["env"]["AUTHENTICATION_GRANT"]
  },
};