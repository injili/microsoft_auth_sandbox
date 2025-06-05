import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
import TertiaryButton from "../../components/tertiaryButton";

export default function EngineSpecification({ onBack, onNext, hasStep }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Engine Specification
        </h2>
        <p className="font-montserrat font-medium">
          What is the vehicle's engine specification?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">kW</p>
            <input
              type="text"
              className="outline-none  min-w-62 border-1 max-w-62 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">PS</p>
            <input
              type="text"
              className="outline-none  min-w-62 border-1 max-w-62 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">ccm</p>
            <input
              type="text"
              className="outline-none min-w-62 border-1 max-w-62 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
          </div>
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
