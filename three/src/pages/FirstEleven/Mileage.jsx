import { useNavigate } from "react-router-dom";
import TertiaryButton from "../../components/tertiaryButton";
import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
import { useState } from "react";

export default function Mileage({ carDetails, setCarDetails, onBack, onNext }) {
  const [responseMessage, setResponseMessage] = useState("");
  const [isInValid, setIsInValid] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Mileage
        </h2>
        <p className="font-montserrat font-medium">
          What is the vehicle's mileage?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Mileage</p>
          {responseMessage && (
            <p className="text-sm text-red-500 font-montserrat font-semibold">
              * {responseMessage}
            </p>
          )}
          <div
            className={` flex items-center gap-2 border-1 max-w-96 px-2 py-1.5 rounded-sm ${
              isInValid ? "border-red-500" : "border-[#2154A2]"
            } focus-within:border-2 font-montserrat`}
          >
            <input
              type="number"
              value={carDetails.mileage ?? ""}
              onChange={(e) =>
                setCarDetails((prev) => ({
                  ...prev,
                  mileage: parseInt(e.target.value),
                }))
              }
              className="outline-none w-full bg-transparent"
            ></input>
            <p className="px-2 font-montserrat text-lg font-medium">Km</p>
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
                if (!carDetails.mileage) {
                  setIsInValid(true);
                  setResponseMessage("Input the mileage of the vehicle");
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
