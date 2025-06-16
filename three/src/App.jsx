import Navigation from "./components/navigation";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/footer";
import OnlineEvaluation from "./pages/OnlineEvaluation";
import OnlineEval from "./pages/OnlineEval";
import OnSiteEvaluation from "./pages/OnSiteEvaluation";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-[#D6DCE5] via-[#F4F9FF] via-[#F4F4F4] to-[#C7D1DF]">
      <Navigation />
      <div className="flex-grow flex">
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
        element: <OnlineEvaluation />,
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
