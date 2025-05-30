import { useState, useRef } from "react";
import { car } from "../assets/svgPaths/dentsScuffsDamagesSvg";
import { Dialog, DialogPanel } from "@headlessui/react";
import TakePhoto from "./takePhoto";
import UploadFile from "./uploadFile";
import RegularButton from "./regularButton";
import PrimaryButton from "./primaryButton";

export default function DentsScuffsDamagesCar() {
  const [markers, setMarkers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null);

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
    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const color = "transparent";

    if (isNearExistingMarker(x, y)) return;
    setIsOpen(true);
    setActiveMarker({ x, y, color });
    console.log(activeMarker);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    if (activeMarker && activeMarker.color !== "transparent") {
      setMarkers((prev) => [...prev, activeMarker]);
      setActiveMarker(null);
    } else {
      setActiveMarker(null);
    }
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
      <Dialog
        open={isOpen}
        onClose={() => handleCloseDialog()}
        className="relative z-50"
      >
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
                    activeMarker &&
                      setActiveMarker({ ...activeMarker, color: "red" });
                  }}
                  showIcon={false}
                >
                  Dent
                </RegularButton>
                <RegularButton
                  onClick={() => {
                    activeMarker &&
                      setActiveMarker({ ...activeMarker, color: "yellow" });
                  }}
                  showIcon={false}
                >
                  Scuff
                </RegularButton>
                <RegularButton
                  onClick={() => {
                    activeMarker &&
                      setActiveMarker({ ...activeMarker, color: "blue" });
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
                  handleCloseDialog();
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
