import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton";
import TertiaryButton from "../../components/tertiaryButton";
import SecondaryButton from "../../components/secondaryButton";

export default function CustomerPhoneNumber({ onBack, onNext, hasStep }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
        Customer Phone Number
      </h2>

      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">
            The Customer's Phone Number is ...{" "}
          </p>

          <p className="px-2 font-montserrat text-2xl font-bold text-primary">
            +49 30 12345678
          </p>
        </div>
        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            {hasStep && (
              <TertiaryButton onClick={() => navigate("/onlinesummary")}>
                Go to Summary
              </TertiaryButton>
            )}
            <SecondaryButton onClick={() => onBack()}>Back</SecondaryButton>
            <PrimaryButton onClick={() => onNext(15)}>Continue</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
