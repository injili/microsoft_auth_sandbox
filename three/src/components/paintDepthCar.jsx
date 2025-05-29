import { car } from "../assets/svgPaths/paintDepthCar";

export default function PaintDepthCar() {
  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="328" height="539" fill="none">
      <path fill="${car.fill}" d="${car.d}" />
    </svg>
  `;
  const encoded = encodeURIComponent(svgString)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");

  return (
    <div className="grid grid-cols-3 py-2">
      <div className="flex items-center justify-end p-4">
        <div className="flex flex-col justify-center gap-16">
          <div className=" flex items-center gap-2 bg-white border-1 max-w-32 px-2 py-1 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat">
            <input
              type="text"
              className="outline-none w-full bg-transparent"
            ></input>
            <p className="px-1 font-montserrat text-lg font-medium">µm</p>
          </div>{" "}
          <div className=" flex items-center gap-2 bg-white border-1 max-w-32 px-2 py-1 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat">
            <input
              type="text"
              className="outline-none w-full bg-transparent"
            ></input>
            <p className="px-1 font-montserrat text-lg font-medium">µm</p>
          </div>{" "}
          <div className=" flex items-center gap-2 bg-white border-1 max-w-32 px-2 py-1 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat">
            <input
              type="text"
              className="outline-none w-full bg-transparent"
            ></input>
            <p className="px-1 font-montserrat text-lg font-medium">µm</p>
          </div>{" "}
          <div className=" flex items-center gap-2 bg-white border-1 max-w-32 px-2 py-1 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat">
            <input
              type="text"
              className="outline-none w-full bg-transparent"
            ></input>
            <p className="px-1 font-montserrat text-lg font-medium">µm</p>
          </div>
        </div>
      </div>
      <div
        className="w-[246px] h-[404px] flex flex-col justify-between items-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encoded}")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-26 flex items-center gap-2 bg-white border-1 max-w-32 px-2 py-1 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat">
          <input
            type="text"
            className="outline-none w-full bg-transparent"
          ></input>
          <p className="px-1 font-montserrat text-lg font-medium">µm</p>
        </div>
        <div className=" flex items-center gap-2 bg-white border-1 max-w-32 px-2 py-1 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat">
          <input
            type="text"
            className="outline-none w-full bg-transparent"
          ></input>
          <p className="px-1 font-montserrat text-lg font-medium">µm</p>
        </div>
        <div className="mb-18 flex items-center gap-2 bg-white border-1 max-w-32 px-2 py-1 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat">
          <input
            type="text"
            className="outline-none w-full bg-transparent"
          ></input>
          <p className="px-1 font-montserrat text-lg font-medium">µm</p>
        </div>
      </div>
      <div className="flex items-center justify-start p-4">
        <div className="flex flex-col justify-center gap-16">
          <div className=" flex items-center gap-2 bg-white border-1 max-w-32 px-2 py-1 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat">
            <input
              type="text"
              className="outline-none w-full bg-transparent"
            ></input>
            <p className="px-1 font-montserrat text-lg font-medium">µm</p>
          </div>{" "}
          <div className=" flex items-center gap-2 bg-white border-1 max-w-32 px-2 py-1 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat">
            <input
              type="text"
              className="outline-none w-full bg-transparent"
            ></input>
            <p className="px-1 font-montserrat text-lg font-medium">µm</p>
          </div>{" "}
          <div className=" flex items-center gap-2 bg-white border-1 max-w-32 px-2 py-1 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat">
            <input
              type="text"
              className="outline-none w-full bg-transparent"
            ></input>
            <p className="px-1 font-montserrat text-lg font-medium">µm</p>
          </div>{" "}
          <div className=" flex items-center gap-2 bg-white border-1 max-w-32 px-2 py-1 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat">
            <input
              type="text"
              className="outline-none w-full bg-transparent"
            ></input>
            <p className="px-1 font-montserrat text-lg font-medium">µm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
