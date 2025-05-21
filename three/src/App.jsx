import CarDiagram from "./components/carDiagram";

export default function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center  bg-linear-to-br from-[#D6DCE5] via-[#F4F9FF] via-[#F4F4F4] to-[#C7D1DF]">
      <div className="bg-white rounded-sm aspect-square min-w-96 flex flex-col items-center justify-center neumorphic">
        <CarDiagram />
      </div>
    </div>
  );
}
