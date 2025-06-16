import { useNavigate } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import SecondaryButton from "../../components/secondaryButton";
import TertiaryButton from "../../components/tertiaryButton";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
export default function Color({ onBack, onNext, hasStep }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const types = [
    { label: "Blue" },
    { label: "Red" },
    { label: "Black" },
    { label: "Gray" },
    { label: "Orange" },
    { label: "Purple" },
    { label: "Pink" },
  ];
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
          <div className="flex items-center gap-4 flex-wrap max-w-10/12">
            {types.map((option, index) => (
              <RegularButton
                key={index}
                onClick={() => {
                  console.log(`Selected rim size: ${option.label}`);
                }}
                showIcon={false}
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
            {hasStep && (
              <TertiaryButton onClick={() => navigate("/onlinesummary")}>
                Go to Summary
              </TertiaryButton>
            )}
            <SecondaryButton onClick={() => onBack()}>Back</SecondaryButton>
            <PrimaryButton onClick={() => onNext()}>Continue</PrimaryButton>
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
              type="text"
              className="outline-none  min-w-62 border-1 max-w-62 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
            <div className="flex justify-end">
              <PrimaryButton onClick={() => setIsOpen(false)}>
                Submit
              </PrimaryButton>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
