import Slice1 from "../assets/car/SliceH1.svg";
import Slice2 from "../assets/car/SliceH2.svg";
import Slice3 from "../assets/car/SliceH3.svg";
import Slice4 from "../assets/car/SliceH4.svg";
import Slice5 from "../assets/car/SliceH5.svg";
import Slice6 from "../assets/car/SliceH6.svg";
import Slice7 from "../assets/car/SliceH7.svg";
import Slice8 from "../assets/car/SliceH8.svg";
import Slice9 from "../assets/car/SliceH9.svg";
import Slice10 from "../assets/car/SliceH10.svg";
import Slice11 from "../assets/car/SliceH11.svg";
import Slice12 from "../assets/car/SliceH12.svg";
import Slice13 from "../assets/car/SliceH13.svg";
import Slice14 from "../assets/car/SliceH14.svg";
import Slice15 from "../assets/car/SliceH15.svg";
import Slice16 from "../assets/car/SliceH16.svg";
import Slice17 from "../assets/car/SliceH17.svg";
import Slice18 from "../assets/car/SliceH18.svg";

{
  /* <div>
        <img src={Slice1} alt="Car Slice 1" />
        <img src={Slice2} alt="Car Slice 2" />
        <img src={Slice3} alt="Car Slice 3" />
      </div>
      <div>
        <img src={Slice4} alt="Car Slice 4" />
        <img src={Slice5} alt="Car Slice 5" />
        <img src={Slice6} alt="Car Slice 6" />
      </div>
      <div>
        <img src={Slice7} alt="Car Slice 7" />
        <img src={Slice8} alt="Car Slice 8" />
        <img src={Slice9} alt="Car Slice 9" />
      </div>
      <div>
        <img src={Slice10} alt="Car Slice 10" />
        <img src={Slice11} alt="Car Slice 11" />
        <img src={Slice12} alt="Car Slice 12" />
      </div>
      <div>
        <img src={Slice13} alt="Car Slice 13" />
        <img src={Slice14} alt="Car Slice 14" />
        <img src={Slice15} alt="Car Slice 15" />
      </div>
      <div>
        <img src={Slice16} alt="Car Slice 16" />
        <img src={Slice17} alt="Car Slice 17" />
        <img src={Slice18} alt="Car Slice 18" />
      </div> */
}

{
  /* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="81"
          onClick={handleClick}
        >
          <defs>
            <clipPath id="a" clipPathUnits="userSpaceOnUse">
              <path d="M-36.442-660.924h72v81h-72z" style={{ fill: "#000" }} />
            </clipPath>
          </defs>
          {markers.map((marker, index) => (
            <circle
              key={index}
              cx={marker.x}
              cy={marker.y}
              r="4"
              fill="red"
              stroke="white"
              strokeWidth="1"
            />
          ))}
        </svg> */
}
import { useState } from "react";

// svg importation
import { svgPaths } from "./paths";

export default function CarDiagram() {
  const [markers, setMarkers] = useState({});

  const handleClick = (event, id) => {
    const svg = event.currentTarget;
    const rect = svg.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setMarkers((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), { x, y }],
    }));
  };

  return (
    <div className="p-8 grid grid-cols-6">
      <svg style={{ display: "none" }}>
        <symbol id="custom-marker" viewBox="0 0 17 16">
          <path d="M12.688.479 8.142 5.013 3.596.479a1.431 1.431 0 0 0-2.02 0L.566 1.486a1.423 1.423 0 0 0 0 2.015l4.546 4.535L.566 12.57a1.423 1.423 0 0 0 0 2.015l1.01 1.008a1.431 1.431 0 0 0 2.02 0l4.546-4.535 4.546 4.535a1.431 1.431 0 0 0 2.02 0l1.01-1.008a1.423 1.423 0 0 0 0-2.015l-4.545-4.534L15.718 3.5a1.423 1.423 0 0 0 0-2.015L14.708.48a1.431 1.431 0 0 0-2.02 0Z" />
        </symbol>
      </svg>
      {svgPaths.map(({ id, clipPathBox, path }) => (
        <div key={id}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="81"
            onClick={(e) => handleClick(e, id)}
          >
            <defs>
              <clipPath id={id} clipPathUnits="userSpaceOnUse">
                <path
                  d={clipPathBox.d}
                  style={{ fill: "#000", strokeWidth: 0.816016 }}
                />
              </clipPath>
            </defs>
            <path
              d={path.d}
              clipPath={`url(#${id})`}
              style={{ fill: "#304a6e", stroke: "none", strokeWidth: 0.743574 }}
              transform={path.transform}
            />
            {(markers[id] || []).map((marker, index) => (
              <use
                href="#custom-marker"
                key={index}
                x={marker.x - 8.5}
                y={marker.y}
                r="4"
                fill="red"
                stroke="white"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>
      ))}
      <div></div>
    </div>
  );
}

{
  /* <div className="flex flex-col gap-2">
        <PrimaryButton onClick={() => alert("Button clicked!")}>
          Primary Action
        </PrimaryButton>
        <SecondaryButton onClick={() => alert("Secondary button clicked!")}>
          Secondary Action
        </SecondaryButton>
        <TertiaryButton onClick={() => alert("Tertiary button clicked!")}>
          Tertiary Action
        </TertiaryButton>
        <ProgressBar progress={50} />
      </div> */
}

{
  /* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="574"
        height="327"
        fill="none"
      >
        <g>
          <path fill="transparent" d={accidentCar.d1} />
          <path fill="transparent" d={accidentCar.d2} />
          <path fill="transparent" d={accidentCar.d3} />
          <path fill="transparent" d={accidentCar.d4} />
          <path fill="transparent" d={accidentCar.d5} />
          <path fill="transparent" d={accidentCar.d6} />
          <path fill="transparent" d={accidentCar.d7} />
          <path fill="transparent" d={accidentCar.d8} />
          <path fill="transparent" d={accidentCar.d9} />
          <path fill="transparent" d={accidentCar.d10} />
          <path fill="transparent" d={accidentCar.d11} />
          <path fill="transparent" d={accidentCar.d12} />
          <path fill="transparent" d={accidentCar.d13} />
        </g>
        <path fill="#304A6E" d={accidentCar.d14} />
      </svg> */
}

// import PrimaryButton from "./primaryButton";
// import ProgressBar from "./progressBar";
// import SecondaryButton from "./secondaryButton";
// import TertiaryButton from "./tertiaryButton";


import { Dialog, DialogPanel } from "@headlessui/react";
import { useState, useRef } from "react";
import { car } from "../assets/svgPaths/dentsScuffsDamagesSvg";
import RegularButton from "./regularButton";
import PrimaryButton from "./primaryButton";
import TakePhoto from "./takePhoto";
import UploadFile from "./uploadFile";

export default function DentsScuffsDamagesCar() {
  const [markers, setMarkers] = useState([]);
  const [pendingMarker, setPendingMarker] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDamage, setSelectedDamage] = useState(null);
  const [damageColor, setDamageColor] = useState("red");
  const svgRef = useRef(null);
  const markerRadius = 10.5;

  const isNearExistingMarker = (x, y) => {
    return markers.some((marker) => {
      const dx = marker.x - x;
      const dy = marker.y - y;
      return Math.sqrt(dx * dx + dy * dy) < markerRadius;
    });
  };

  const handleClick = (event) => {
    if (!selectedDamage) return;

    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (isNearExistingMarker(x, y)) return;

    setPendingMarker({ x, y, color: damageColor });
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedDamage(null);
    setDamageColor("red");
  };

  return (
    <div className="p-4">
      <svg style={{ display: "none" }}>
        <symbol id="custom-marker" viewBox="0 0 17 16">
          <path d="M12.688.479 8.142 5.013 3.596.479a1.431 1.431 0 0 0-2.02 0L.566 1.486a1.423 1.423 0 0 0 0 2.015l4.546 4.535L.566 12.57a1.423 1.423 0 0 0 0 2.015l1.01 1.008a1.431 1.431 0 0 0 2.02 0l4.546-4.535 4.546 4.535a1.431 1.431 0 0 0 2.02 0l1.01-1.008a1.423 1.423 0 0 0 0-2.015l-4.545-4.534L15.718 3.5a1.423 1.423 0 0 0 0-2.015L14.708.48a1.431 1.431 0 0 0-2.02 0Z" />
        </symbol>
      </svg>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="446"
        height="243"
        fill="none"
        style={{ cursor: "crosshair" }}
      >
        <path fill={car.fill2} d={car.d2} />
        <g onClick={handleClick}>
          <path fill="transparent" d={car.d1} />
          {markers.map((marker, index) => (
            <use
              href="#custom-marker"
              key={index}
              x={marker.x - 8.5}
              y={marker.y - 8}
              fill={marker.color}
              width="17"
              height="16"
            />
          ))}
        </g>
      </svg>
      <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-primary/30 p-4">
          <DialogPanel className="min-w-6/8 flex flex-col gap-3 space-y-4 bg-white p-12 rounded-sm">
            <div className="flex flex-col">
              <p className="font-montserrat font-medium">
                Write the details on the damage here.
              </p>
              <textarea className="min-h-24 p-2 max-w-96 border border-primary rounded-sm focus:border-2 focus:outline-none" />
            </div>
            <div>
              <p className="font-montserrat font-medium">
                Upload or take a photo of the marked positions here.
              </p>
              <div className="flex items-center gap-2">
                <TakePhoto />
                <UploadFile />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-montserrat font-medium">
                Was it a minor damage or significant damage?
              </p>
              <div className="flex gap-4">
                <RegularButton
                  onClick={() => {
                    setSelectedDamage("dent");
                    setDamageColor("yellow");
                  }}
                  showIcon={false}
                >
                  Dent
                </RegularButton>
                <RegularButton
                  onClick={() => {
                    setSelectedDamage("scuff");
                    setDamageColor("yellow");
                  }}
                  showIcon={false}
                >
                  Scuff
                </RegularButton>
                <RegularButton
                  onClick={() => {
                    setSelectedDamage("scratch");
                    setDamageColor("red");
                  }}
                  showIcon={true}
                >
                  Scratch
                </RegularButton>
              </div>
            </div>
            <div className="flex w-full justify-end gap-4">
              <PrimaryButton
                onClick={() => {
                  if (pendingMarker)
                    setMarkers((prev) => [...prev, pendingMarker]);
                  setIsOpen(false);
                  setPendingMarker(null);
                }}
              >
                Submit
              </PrimaryButton>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
