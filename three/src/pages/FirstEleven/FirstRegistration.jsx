import { useNavigate } from "react-router-dom";
import TertiaryButton from "../../components/tertiaryButton";
import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
export default function FirstRegistration({ onBack, onNext, hasStep }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          First Registration
        </h2>
        <p className="font-montserrat font-medium">
          When was the First Registration done?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">First Registration</p>
          <select
            type="text"
            className="outline-none bg-white border-1 min-w-96 max-w-96 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
          >
            <option selected>Select</option>
            <option value="">Jan 2025</option>
            <option value="">Dec 2024</option>
            <option value="">Nov 2024</option>
            <option value="">Oct 2024</option>
          </select>
        </div>
        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            {hasStep && (
              <TertiaryButton onClick={() => navigate("/onlinesummary")}>
                Go to Summary
              </TertiaryButton>
            )}
            <SecondaryButton onClick={onBack}>Back</SecondaryButton>
            <PrimaryButton onClick={onNext}>Continue</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
