import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import SecondaryButton from "../../components/secondaryButton";
import TertiaryButton from "../../components/tertiaryButton";
import { useEffect, useState } from "react";

export default function Drive({ carDetails, setCarDetails, onBack, onNext }) {
  const navigate = useNavigate();
  const [responseMessage, setResponseMessage] = useState("");
  const [selectedType, setSelectedType] = useState(null);
  const types = [
    { id: 0, label: "Front-wheel" },
    { id: 1, label: "Rear-wheel" },
    { id: 2, label: "Four-wheel" },
    { id: 3, label: "All-wheel" },
  ];

  const handleType = (type) => {
    setSelectedType((prev) => (prev === type ? null : type));
  };

  useEffect(() => {
    if (carDetails.drive_type_id !== null) {
      const driveId = carDetails?.drive_type_id;
      const match = types.find((type) => type.id === driveId);
      if (match) setSelectedType(match.label);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Drive
        </h2>
        <p className="font-montserrat font-medium">
          What is the vehicle's drive?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Drive</p>
          {responseMessage && (
            <p className="text-sm text-red-500 font-montserrat font-semibold">
              * {responseMessage}
            </p>
          )}
          <div className="flex items-center gap-4 flex-wrap max-w-9/12">
            {types.map((option) => (
              <RegularButton
                key={option.id}
                onClick={() => {
                  setCarDetails((prev) => ({
                    ...prev,
                    drive_type_id: option.id,
                  }));
                  handleType(option.label);
                }}
                showIcon={selectedType === option.label}
              >
                {option.label}
              </RegularButton>
            ))}
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
                if (
                  typeof carDetails.drive_type_id !== "number" ||
                  !Number.isInteger(carDetails.drive_type_id)
                )
                  return setResponseMessage(
                    "Select the drive type of the vehicle."
                  );

                onNext();
              }}
            >
              Continue
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
