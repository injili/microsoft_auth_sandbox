import { car } from "../assets/svgPaths/paintDepthCar";

export default function TireTreadDepthCar() {
  const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" width="328" height="539" fill="none">
          <path fill="${car.fill}" d="${car.d}" />
        </svg>
      `;
  const encoded = encodeURIComponent(svgString)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");

  return (
    <div className="grid grid-cols-3">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-end p-4 mt-16">
          <p className="px-1 font-montserrat text-lg font-medium">Left Front</p>
          <select
            type="text"
            className="outline-none bg-white border-1 min-w-42 max-w-42 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
          >
            <option selected>Select</option>
            <option value="">0 mm</option>
            <option value="">0.5 mm</option>
            <option value="">1 mm</option>
            <option value="">1.5 mm</option>
          </select>
        </div>
        <div className="flex flex-col items-end p-4 mb-30">
          <p className="px-1 font-montserrat text-lg font-medium">Left Back</p>
          <select
            type="text"
            className="outline-none bg-white border-1 min-w-42 max-w-42 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
          >
            <option selected>Select</option>
            <option value="">0 mm</option>
            <option value="">0.5 mm</option>
            <option value="">1 mm</option>
            <option value="">1.5 mm</option>
          </select>
        </div>
      </div>
      <div
        className="w-[246px] h-[404px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encoded}")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-start p-4 mt-16">
          <p className="px-1 font-montserrat text-lg font-medium">Left Front</p>
          <select
            type="text"
            className="outline-none bg-white border-1 min-w-42 max-w-42 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
          >
            <option selected>Select</option>
            <option value="">0 mm</option>
            <option value="">0.5 mm</option>
            <option value="">1 mm</option>
            <option value="">1.5 mm</option>
          </select>
        </div>
        <div className="flex flex-col items-start p-4 mb-30">
          <p className="px-1 font-montserrat text-lg font-medium">Left Back</p>
          <select
            type="text"
            className="outline-none bg-white border-1 min-w-42 max-w-42 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
          >
            <option selected>Select</option>
            <option value="">0 mm</option>
            <option value="">0.5 mm</option>
            <option value="">1 mm</option>
            <option value="">1.5 mm</option>
          </select>
        </div>
      </div>
    </div>
  );
}
