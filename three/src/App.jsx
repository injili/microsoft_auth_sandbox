import AccidentStatusPage from "./pages/AccidentStatusPage";
import PaintDepthPage from "./pages/PaintDepthPage";
import DentsScuffsDamagesPage from "./pages/DentsScuffsDamagesPage";
import TiresPage from "./pages/TiresPage";
import PasteLink from "./pages/PasteLink";
import FirstElevenFormPage from "./pages/FirstElevenFormPage";
import Manufacturer from "./pages/FirstEleven/Manufacturer";
import Model from "./pages/FirstEleven/Model";
import VehicleType from "./pages/FirstEleven/VehicleType";
import FirstRegistration from "./pages/FirstEleven/FirstRegistration";
import Mileage from "./pages/FirstEleven/Mileage";
import EngineSpecification from "./pages/FirstEleven/EngineSpecification";
import FuelType from "./pages/FirstEleven/FuelType";
import Transmission from "./pages/FirstEleven/Transmission";
import Drive from "./pages/FirstEleven/Drive";
import Color from "./pages/FirstEleven/Color";
import PriceAsAdvertised from "./pages/FirstEleven/PriceAsAdvertised";
import CustomerPhoneNumber from "./pages/FirstEleven/CustomerPhoneNumber";
import OnlineSummary from "./pages/FirstEleven/OnlineSummary";
import PreviousOwners from "./pages/SecondEleven/PreviousOwners";
import VehicleIdentificationNumber from "./pages/SecondEleven/VehicleIdentificationNumber";
import AdditionalEquipment from "./pages/SecondEleven/AdditionalEquipment";
import InspectionData from "./pages/SecondEleven/InspectionData";
import Warranty from "./pages/SecondEleven/Warranty";
import Financing from "./pages/SecondEleven/Financing";
import AddressCustomerData from "./pages/SecondEleven/AddressCustomerData";
import CustomerFinalPrice from "./pages/SecondEleven/CustomerFinalPrice";

import Navigation from "./components/navigation";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/footer";

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
        path: "/fillform",
        element: <FirstElevenFormPage />,
      },
      {
        path: "/onlinemanufacturer",
        element: <Manufacturer />,
      },
      {
        path: "/onlinemodel",
        element: <Model />,
      },
      {
        path: "/onlinevehicletype",
        element: <VehicleType />,
      },
      {
        path: "/onlinefirstregistration",
        element: <FirstRegistration />,
      },
      {
        path: "/onlinemileage",
        element: <Mileage />,
      },
      {
        path: "/onlineenginespecification",
        element: <EngineSpecification />,
      },
      {
        path: "/onlinefueltype",
        element: <FuelType />,
      },
      {
        path: "/onlinetransmission",
        element: <Transmission />,
      },
      {
        path: "/onlinedrive",
        element: <Drive />,
      },
      {
        path: "/onlinecolor",
        element: <Color />,
      },
      {
        path: "/onlinepriceasadvertised",
        element: <PriceAsAdvertised />,
      },
      {
        path: "/onlinecustomerphonenumber",
        element: <CustomerPhoneNumber />,
      },
      {
        path: "/onlinesummary",
        element: <OnlineSummary />,
      },
      {
        path: "/onlinepreviousowners",
        element: <PreviousOwners />,
      },
      {
        path: "/onlinepaintinspection",
        element: <PaintDepthPage />,
      },
      {
        path: "/onlineaccidentstatus",
        element: <AccidentStatusPage />,
      },
      {
        path: "/onlinedentsscuffsdamages",
        element: <DentsScuffsDamagesPage />,
      },
      {
        path: "/onlinevin",
        element: <VehicleIdentificationNumber />,
      },
      {
        path: "/onlinetires",
        element: <TiresPage />,
      },
      {
        path: "/onlineadditionalequipment",
        element: <AdditionalEquipment />,
      },
      {
        path: "/onlineinspectiondata",
        element: <InspectionData />,
      },
      {
        path: "/onlinewarranty",
        element: <Warranty />,
      },
      {
        path: "/onlinefinancing",
        element: <Financing />,
      },
      {
        path: "/onlineaddresscustomerdata",
        element: <AddressCustomerData />,
      },
      {
        path: "/onlinecustomerfinalprice",
        element: <CustomerFinalPrice />,
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
