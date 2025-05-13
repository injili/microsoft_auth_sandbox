import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "f1af00d6-6675-4bb1-9c52-833a1ba168a8",
    authority:
      "https://login.microsoftonline.com/692d67d0-021c-4eb1-80e1-809da23ade73/",
    redirectUri: "http://localhost:5173",
    postLogoutRedirectUri: "/",
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};
