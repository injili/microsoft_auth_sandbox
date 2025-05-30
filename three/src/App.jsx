import DentsScuffsDamagesCar from "./components/dentsScuffsDamagesCar";
import AccidentStatusPage from "./pages/AccidentStatusPage";
import AccidentStatusCar from "./components/accidentStatusCar";
import PaintDepthCar from "./components/paintDepthCar";
import PaintDepthPage from "./pages/PaintDepthPage";
import DentsScuffsDamagesPage from "./pages/DentsScuffsDamagesPage";
import TireThreadDepthCar from "./components/tireTreadDepthCar";
import TiresPage from "./pages/TiresPage";

export default function App() {
  return (
    <div className="min-h-screen py-4 flex flex-col items-center justify-center  bg-linear-to-br from-[#D6DCE5] via-[#F4F9FF] via-[#F4F4F4] to-[#C7D1DF]">
      <TiresPage />
    </div>
  );
}
