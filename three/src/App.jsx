import DentsScuffsDamagesCar from "./components/dentsScuffsDamagesCar";
import AccidentStatusPage from "./pages/AccidentStatusPage";
import AccidentStatusCar from "./components/accidentStatusCar";
import PaintDepthCar from "./components/paintDepthCar";
import PaintDepthPage from "./pages/PaintDepthPage";
import DentsScuffsDamagesPage from "./pages/DentsScuffsDamagesPage";
import TireThreadDepthCar from "./components/tireTreadDepthCar";
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

export default function App() {
  return (
    <div className="min-h-screen py-4 flex flex-col items-center justify-center  bg-linear-to-br from-[#D6DCE5] via-[#F4F9FF] via-[#F4F4F4] to-[#C7D1DF]">
      <PreviousOwners />
    </div>
  );
}
