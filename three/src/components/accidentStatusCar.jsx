import { Dialog, DialogPanel } from "@headlessui/react";
import { accidentCar } from "../assets/svgPaths/accidentStatusSvg";
import { useState } from "react";
import RegularButton from "./regularButton";
import PrimaryButton from "./primaryButton";
import TakePhoto from "./takePhoto";
import UploadFile from "./uploadFile";

export default function AccidentStatusCar() {
  const [activePaths, setActivePaths] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [pathColors, setPathColors] = useState({});
  const [currentPath, setCurrentPath] = useState(null);
  const [selectDamage, setSelectDamage] = useState(null);
  const [selectReplaced, setSelectReplaced] = useState(null);

  const handleDamage = (type) => {
    setSelectDamage((prev) => (prev === type ? null : type));
  };

  const handleReplaced = (type) => {
    setSelectReplaced((prev) => (prev === type ? null : type));
  };

  const handlePathClick = (pathId) => {
    setActivePaths((prev) => {
      if (prev.includes(pathId)) {
        const updated = prev.filter((id) => id !== pathId);
        setPathColors((prevColors) => {
          const updatedColors = { ...prevColors };
          delete updatedColors[pathId];
          return updatedColors;
        });
        return updated;
      } else {
        setCurrentPath(pathId);
        setIsOpen(true);
        return [...prev, pathId];
      }
    });
  };

  const setDamageColor = (color) => {
    if (currentPath) {
      setPathColors((prev) => ({
        ...prev,
        [currentPath]: color,
      }));
    }
  };

  const paths = Object.entries(accidentCar).map(([key, pathData], index) => {
    const isTogglable = index < 13;
    const isActive = activePaths.includes(key);
    return (
      <path
        key={key}
        d={pathData}
        fill={
          isTogglable
            ? isActive
              ? pathColors[key] || "transparent"
              : "transparent"
            : "#304A6E"
        }
        onClick={() => isTogglable && handlePathClick(key)}
        className={isTogglable ? "cursor-pointer" : ""}
      />
    );
  });

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="574"
        height="327"
        fill="none"
      >
        <g>{paths}</g>
      </svg>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
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
                Upload or take a photo of the damage here.
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
                    handleDamage("minor");
                    setDamageColor("yellow");
                  }}
                  showIcon={selectDamage === "minor"}
                >
                  Minor Damage
                </RegularButton>

                <RegularButton
                  onClick={() => {
                    handleDamage("significant");
                    setDamageColor("red");
                  }}
                  showIcon={selectDamage === "significant"}
                >
                  Significant Damage
                </RegularButton>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-montserrat font-medium">
                Was the part replaced?
              </p>
              <div className="flex gap-4">
                <RegularButton
                  onClick={() => {
                    handleReplaced("yes");
                    setIsOpen(true);
                  }}
                  showIcon={selectReplaced === "yes"}
                >
                  Yes
                </RegularButton>
                <RegularButton
                  onClick={() => {
                    handleReplaced("no");
                    setIsOpen(true);
                  }}
                  showIcon={selectReplaced === "no"}
                >
                  No
                </RegularButton>
              </div>
            </div>
            <div className="flex w-full justify-end gap-4">
              <PrimaryButton
                onClick={() => {
                  setIsOpen(false);
                  setSelectDamage(null);
                  setSelectReplaced(null);
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
