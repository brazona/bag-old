(function(window) {
    window.env = window.env || {};
    // Environment variables
    window["env"]["APP_ENVIRONMENT"] = "${APP_ENVIRONMENT}";
    window["env"]["APP_VERSION"] = "${APP_VERSION}";
  })(this);