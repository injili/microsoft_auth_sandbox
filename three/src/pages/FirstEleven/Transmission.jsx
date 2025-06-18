import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import SecondaryButton from "../../components/secondaryButton";
import TertiaryButton from "../../components/tertiaryButton";
import { useEffect, useState } from "react";

export default function Transmission({
  carDetails,
  setCarDetails,
  onBack,
  onNext,
}) {
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);

  const types = [
    { id: 0, label: "Automatic" },
    { id: 1, label: "Manual" },
  ];

  useEffect(() => {
    if (carDetails.transmission_id !== null) {
      const transmissionId = carDetails?.transmission_id;
      const match = types.find((type) => type.id === transmissionId);
      if (match) setSelectedType(match.label);
    }
  }, []);

  const handleType = (type) => {
    setSelectedType((prev) => (prev === type ? null : type));
  };

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Transmission
        </h2>
        <p className="font-montserrat font-medium">
          What is the vehicle's transmission?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Transmission</p>
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
                    transmission_id: option.id,
                  }));
                  handleType(option.label);
                }}
                showIcon={selectedType == option.label}
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
                  typeof carDetails.transmission_id !== "number" ||
                  !Number.isInteger(carDetails.transmission_id)
                ) {
                  return setResponseMessage(
                    "Select the vehicle's transmission."
                  );
                }
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
