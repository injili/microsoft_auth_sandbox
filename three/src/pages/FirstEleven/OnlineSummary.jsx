import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
import { MdOutlineModeEdit } from "react-icons/md";

const summary = [
  { label: "Manufacturer", value: "Porsche" },
  { label: "Model", value: "Macan" },
  { label: "Type", value: "SUV" },
  { label: "First Registration", value: "14th June, 2024" },
  { label: "Mileage", value: "7,000 Km" },
  { label: "Engine Specifications", value: "195 kW | 265 PS | 1,984 ccm" },
  { label: "Fuel Type", value: "Diesel" },
  { label: "Transmission", value: "Manual" },
  { label: "Drive", value: "all-wheel" },
  { label: "Color", value: "White" },
  { label: "Price as Advertised", value: "38,900 €" },
  { label: "Customer Phone Number", value: "+49 30 12345678" },
];

export default function OnlineSummary() {
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
        Summary
      </h2>

      <div className="bg-white rounded-sm flex flex-col gap-4 p-8 justify-center">
        {summary.map((option, index) => (
          <div
            className="flex justify-between min-w-9/12 max-w-9/12"
            key={index}
          >
            <p className="font-montserrat font-medium">{option.label}</p>
            <p className="px-2 font-montserrat font-medium text-primary">
              {option.value}
            </p>
            <MdOutlineModeEdit className="text-2xl text-primary" />
          </div>
        ))}
        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            <SecondaryButton onClick={() => alert("Back to previous page")}>
              Back
            </SecondaryButton>
            <PrimaryButton onClick={() => alert("Next step")}>
              Continue
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
