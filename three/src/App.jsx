import PasteLink from "./pages/PasteLink";
import FirstElevenFormPage from "./pages/FirstElevenFormPage";
import OnlineSummary from "./pages/FirstEleven/OnlineSummary";
import Navigation from "./components/navigation";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/footer";
import OnlineEvaluation from "./pages/OnlineEvaluation";
import OnlineEval from "./pages/OnlineEval";
import OnSiteEvaluation from "./pages/OnSiteEvaluation";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-[#D6DCE5] via-[#F4F9FF] via-[#F4F4F4] to-[#C7D1DF]">
      <Navigation />
      <div className="flex-grow flex flex-col justify-center w-full items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PasteLink />,
      },
      {
        path: "/onlineevaluation",
        element: <OnlineEvaluation />,
      },
      {
        path: "/onlineeval",
        element: <OnlineEval />,
      },
      {
        path: "/fillform",
        element: <FirstElevenFormPage />,
      },
      {
        path: "/onlinesummary",
        element: <OnlineSummary />,
      },
      {
        path: "/onsiteevaluation",
        element: <OnSiteEvaluation />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
