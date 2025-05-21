import { useEffect, useState } from "react";

function App() {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    if (name) {
      setUserName(name);
    }
  }, []);

  const handleLogin = () => {
    window.location.href = "http://localhost:3000/login"; // triggers backend login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        {userName ? (
          <h1 className="text-2xl font-bold">Hallo, {userName}</h1>
        ) : (
          <>
            <h2 className="text-xl mb-4">Welcome</h2>
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Login with OAuth2
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
