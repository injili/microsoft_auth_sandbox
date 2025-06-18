import { useNavigate } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import SecondaryButton from "../../components/secondaryButton";
import TertiaryButton from "../../components/tertiaryButton";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
export default function Color({ carDetails, setCarDetails, onBack, onNext }) {
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [newColor, setNewColor] = useState("");
  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const [types, setTypes] = useState([
    { id: 0, label: "Blue" },
    { id: 1, label: "Red" },
    { id: 2, label: "Black" },
    { id: 3, label: "Gray" },
    { id: 4, label: "Orange" },
    { id: 5, label: "Purple" },
    { id: 6, label: "Pink" },
  ]);

  const handleType = (type) => {
    setSelectedType((prev) => (prev === type ? null : type));
  };

  useEffect(() => {
    if (!carDetails.color) return;

    setTypes((prev) => {
      const exists = prev.some(
        (type) =>
          type.label.trim().toLowerCase() ===
          carDetails.color.trim().toLowerCase()
      );

      if (exists) return prev;

      return [...prev, { id: prev.length, label: carDetails.color }];
    });

    setSelectedType(carDetails.color);
  }, [carDetails.color, types]);

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Color
        </h2>
        <p className="font-montserrat font-medium">
          What is the vehicle's color?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Color</p>
          {responseMessage && (
            <p className="text-sm text-red-500 font-montserrat font-semibold">
              * {responseMessage}
            </p>
          )}
          <div className="flex items-center gap-4 flex-wrap max-w-10/12">
            {types.map((option) => (
              <RegularButton
                key={option.id}
                onClick={() => {
                  handleType(option.label);
                  setCarDetails((prev) => ({
                    ...prev,
                    color: option.label,
                  }));
                }}
                showIcon={selectedType === option.label}
              >
                {option.label}
              </RegularButton>
            ))}
            <div onClick={() => setIsOpen(true)}>
              <RegularButton>
                <FaPlus className="text-xl" />
              </RegularButton>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            {carDetails.customerPhoneNumber && (
              <TertiaryButton onClick={() => navigate("/onlinesummary")}>
                Go to Summary
              </TertiaryButton>
            )}
            <SecondaryButton onClick={() => onBack()}>Back</SecondaryButton>
            <PrimaryButton
              onClick={() => {
                if (!carDetails.color)
                  return setResponseMessage("Select color or create new color");
                onNext();
              }}
            >
              Continue
            </PrimaryButton>
          </div>
        </div>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => handleCloseDialog()}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-primary/30 p-4">
          <DialogPanel className="min-w-6/8 flex flex-col gap-3 space-y-4 bg-white p-12 rounded-sm">
            <p className="font-montserrat font-medium">
              What is the vehicle's color?
            </p>
            <input
              value={newColor}
              onChange={(e) => setNewColor(e.target.value)}
              type="text"
              className="outline-none  min-w-62 border-1 max-w-62 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
            <div className="flex justify-end">
              <PrimaryButton
                onClick={() => {
                  const trimmed = newColor.trim();
                  if (!trimmed) return;

                  const normalizedColor =
                    trimmed.charAt(0).toUpperCase() +
                    trimmed.slice(1).toLowerCase();

                  const existing = types.find(
                    (type) =>
                      type.label.toLowerCase() === normalizedColor.toLowerCase()
                  );

                  if (existing) {
                    setSelectedType(existing.label);
                    setCarDetails((prev) => ({
                      ...prev,
                      color: existing.label,
                    }));
                  } else {
                    const newOption = {
                      id: types.length,
                      label: normalizedColor,
                    };
                    setTypes((prev) => [...prev, newOption]);
                    setSelectedType(normalizedColor);
                    setCarDetails((prev) => ({
                      ...prev,
                      color: normalizedColor,
                    }));
                  }

                  setNewColor("");
                  setIsOpen(false);
                  setResponseMessage("");
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
