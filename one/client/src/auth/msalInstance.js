// src/lib/useMsalInstance.js
import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

// Set the default account if one exists
const accounts = msalInstance.getAllAccounts();
if (!msalInstance.getActiveAccount() && accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0]);
}

// Listen for login success and set active account
msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    msalInstance.setActiveAccount(event.payload.account);
  }
});

export default msalInstance;
