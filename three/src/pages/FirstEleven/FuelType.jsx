import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import TertiaryButton from "../../components/tertiaryButton";
import SecondaryButton from "../../components/secondaryButton";
import { useEffect, useState } from "react";
export default function FuelType({
  carDetails,
  setCarDetails,
  onBack,
  onNext,
}) {
  const [responseMessage, setResponseMessage] = useState("");
  const [selectedType, setSelectedType] = useState(null);
  const types = [
    { id: 0, label: "Petrol" },
    { id: 1, label: "Diesel" },
    { id: 2, label: "Electric" },
    { id: 3, label: "Hydrogen" },
    { id: 4, label: "Hybrid" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    if (!carDetails.engine_specification) return onBack();

    const fuelId = carDetails.engine_specification?.fuel_type_id;
    const match = types.find((type) => type.id === fuelId);
    if (match) setSelectedType(match.label);
  }, [carDetails.engine_specification]);

  const handleType = (type) => {
    setSelectedType((prev) => (prev === type ? null : type));
  };

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Fuel Type
        </h2>
        <p className="font-montserrat font-medium">
          What is the vehicle's fuel type?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Type</p>
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
                    engine_specification: {
                      ...prev.engine_specification,
                      fuel_type_id: option.id,
                    },
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
                if (carDetails.engine_specification.fuel_type_id === null) {
                  setResponseMessage("Select a fuel type");
                  return;
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
