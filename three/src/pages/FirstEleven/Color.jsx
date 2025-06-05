import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import SecondaryButton from "../../components/secondaryButton";
import TertiaryButton from "../../components/tertiaryButton";
import { FaPlus } from "react-icons/fa";
export default function Color({ onBack, onNext, hasStep }) {
  const navigate = useNavigate();
  const types = [
    { label: "Blue" },
    { label: "Red" },
    { label: "Black" },
    { label: "Gray" },
    { label: "Orange" },
    { label: "Purple" },
    { label: "Pink" },
  ];
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Color
        </h2>
        <p className="font-montserrat font-medium">
          What is the vehicle's color?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Color</p>
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
            <RegularButton>
              <FaPlus className="text-xl" />
            </RegularButton>
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
