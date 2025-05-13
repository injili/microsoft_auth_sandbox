import {
  AuthenticatedTemplate,
  useMsal,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { loginRequest } from "./auth/authConfig";

const MainContent = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const handleLogInRedirect = () => {
    instance
      .loginRedirect({
        ...loginRequest,
        prompt: "select_account",
      })
      .catch((error) => console.log(error));
  };

  const handleLogOutRedirect = () => {
    instance
      .logoutPopup({
        postLogoutRedirectUri: "/",
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <AuthenticatedTemplate>
        {activeAccount ? (
          <>
            <button onClick={handleLogOutRedirect}>LogOut</button>
            <p>You are signed in!</p>
          </>
        ) : null}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button onClick={handleLogInRedirect}>LogIn</button>
        <p>Please sign in</p>
      </UnauthenticatedTemplate>
    </div>
  );
};

const App = () => {
  return <MainContent />;
};

export default App;
