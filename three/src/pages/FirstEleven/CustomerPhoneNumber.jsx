import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton";
import TertiaryButton from "../../components/tertiaryButton";
import SecondaryButton from "../../components/secondaryButton";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";

export default function CustomerPhoneNumber({
  carDetails,
  setCarDetails,
  onBack,
  onNext,
}) {
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
        Customer Phone Number
      </h2>

      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">
            The Customer's Phone Number
          </p>
          {responseMessage && (
            <p className="text-sm text-red-500 font-montserrat font-semibold">
              * {responseMessage}
            </p>
          )}
          <PhoneInput
            onChange={(e) =>
              setCarDetails((prev) => ({
                ...prev,
                customerPhoneNumber: e,
              }))
            }
            value={carDetails.customerPhoneNumber ?? ""}
            country={"de"}
            localization={{ de: "Deutschland", es: "España" }}
            containerClass="!min-w-96 !max-w-96 "
            inputClass="!outline-none px-2 !py-1 !border !border-[#2154A2] !rounded-sm !font-montserrat !focus:border-2 !w-full"
            buttonClass="!border-r !border-[#2154A2] "
            dropdownClass="!font-montserrat !text-sm !w-96"
          />
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
                if (!carDetails.customerPhoneNumber)
                  return setResponseMessage(
                    "Type in the customer's phone number."
                  );
                onNext(15);
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
