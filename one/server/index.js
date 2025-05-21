const express = require("express");
const session = require("express-session");
const { AuthorizationCode } = require("simple-oauth2");

const app = express();
const port = 3000;

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

const config = {
  client: {
    id: "", // clientId
    secret: "", //clientSecret
  },
  auth: {
    tokenHost: "", // e.g., https://provider.com
    authorizePath: "", // e.g., /oauth2/authorize
    tokenPath: "", // e.g., /oauth2/token
  },
};

const redirectUri = "http://localhost:3000/callback";
const client = new AuthorizationCode(config);

app.get("/login", (req, res) => {
  const authorizationUri = client.authorizeURL({
    redirect_uri: redirectUri,
    scope: "openid profile email",
    state: Math.random().toString(36).substring(7),
  });

  req.session.oauthState = authorizationUri.split("state=")[1];
  res.redirect(authorizationUri);
});

app.get("/callback", async (req, res) => {
  const { code, state } = req.query;

  if (!code || !state || state !== req.session.oauthState) {
    return res.status(400).send("Invalid state");
  }

  try {
    const tokenParams = {
      code,
      redirect_uri: redirectUri,
      scope: "openid profile email",
    };

    const accessToken = await client.getToken(tokenParams);
    const token = accessToken.token;

    const userInfoResponse = await fetch("https://provider.com/userinfo", {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });
    const user = await userInfoResponse.json();

    req.session.user = user;

    res.redirect(
      `http://localhost:5173/dashboard?name=${encodeURIComponent(user.name)}`
    );
  } catch (error) {
    res.status(500).send(`Error retrieving access token: ${error.message}`);
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
