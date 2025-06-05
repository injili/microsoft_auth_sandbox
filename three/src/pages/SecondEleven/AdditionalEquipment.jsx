import { Dialog, DialogPanel } from "@headlessui/react";
import { FaPlus } from "react-icons/fa";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import SecondaryButton from "../../components/secondaryButton";
import { useState } from "react";
export default function AdditionalEquipment({ onBack, onNext }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseDialog = () => {
    setIsOpen(false);
  };
  const types = [
    { label: "Trailer Hitch" },
    { label: "Partition" },
    { label: "Roof Rack" },
    { label: "Bike Rack" },
  ];
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
        Additional Equipment
      </h2>

      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">
            What additional equipment does the vehicle have?
          </p>
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
            <button onClick={() => setIsOpen(true)}>
              <RegularButton>
                <FaPlus className="text-xl" />
              </RegularButton>
            </button>
          </div>
        </div>
        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            <SecondaryButton onClick={onBack}>Back</SecondaryButton>
            <PrimaryButton onClick={onNext}>Save and Continue</PrimaryButton>
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
              What other equipment does the vehicle have?
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
