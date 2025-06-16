import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
import TertiaryButton from "../../components/tertiaryButton";
import { useState } from "react";
export default function Manufacturer({
  carDetails,
  setCarDetails,
  onNext,
  onBack,
}) {
  const [responseMessage, setResponseMessage] = useState("");
  const [isInValid, setIsInValid] = useState(false);

  const vehicle = [
    { manufacturer: "Toyota" },
    { manufacturer: "Mercedes-Benz" },
    { manufacturer: "Brabus" },
    { manufacturer: "Porsche" },
    { manufacturer: "BMW" },
    { manufacturer: "Peugeot" },
    { manufacturer: "Volkswagen" },
    { manufacturer: "Mazda" },
  ];

  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Manufacturer
        </h2>
        <p className="font-montserrat font-medium">Who is the Manufacturer?</p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Manufacturer</p>
          {responseMessage && (
            <p className="text-sm text-red-500 font-montserrat font-semibold">
              * {responseMessage}
            </p>
          )}
          <select
            type="text"
            onChange={(e) => {
              setCarDetails(() => ({
                manufacturer: e.target.value,
              }));

              setIsInValid(false);
              setResponseMessage("");
            }}
            value={carDetails.manufacturer || ""}
            className={`outline-none bg-white border min-w-96 max-w-96 px-2 p-2 rounded-sm ${
              isInValid ? "border-red-500" : "border-[#2154A2]"
            } focus:border-2 font-montserrat`}
          >
            <option value="" disabled hidden>
              --Select Manufacturer--
            </option>
            {vehicle.map((option, index) => (
              <option key={index} value={option.manufacturer}>
                {option.manufacturer}
              </option>
            ))}
          </select>
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
                if (!carDetails.manufacturer) {
                  setIsInValid(true);
                  setResponseMessage(
                    "Select a vehicle manufacturer to continue."
                  );
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
