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
          <div className="h-screen flex flex-col items-center justify-center  bg-linear-to-br from-[#D6DCE5] via-[#F4F9FF] via-[#F4F4F4] to-[#C7D1DF]">
            <div className="bg-white rounded-sm aspect-square w-96 flex flex-col items-center justify-center">
              <h1 className="text-3xl font-semibold mb-12">You are in</h1>
              <button
                className="px-16 font-semibold mt-4 rounded-sm py-1 text-white bg-[#2154A2] hover:bg-[#1E4A8D] transition duration-300 ease-in-out"
                onClick={handleLogOutRedirect}
              >
                LogOut
              </button>
            </div>
          </div>
        ) : null}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <div className="h-screen flex flex-col items-center justify-center  bg-linear-to-br from-[#D6DCE5] via-[#F4F9FF] via-[#F4F4F4] to-[#C7D1DF]">
          <div className="bg-white rounded-sm aspect-square w-96 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold mb-12">WELCOME</h1>
            <p className="text-sm">Please Log in below </p>
            <button
              className="px-16 font-semibold mt-4 rounded-sm py-1 text-white bg-[#2154A2] hover:bg-[#1E4A8D] transition duration-300 ease-in-out"
              onClick={handleLogInRedirect}
            >
              Log In
            </button>
          </div>
        </div>
      </UnauthenticatedTemplate>
    </div>
  );
};

const App = () => {
  return <MainContent />;
};

export default App;
