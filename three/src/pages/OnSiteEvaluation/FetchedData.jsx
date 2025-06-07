import SecondaryButton from "../../components/secondaryButton";
import PrimaryButton from "../../components/primaryButton";

export default function FetchedData({ onNext, onBack }) {
  const data = [
    { label: "Manufacturer", value: "Porsche" },
    { label: "Model", value: "Macan" },
    { label: "First Registration", value: "14th June, 2024" },
    { label: "Engine Specifications", value: "195 kW | 265 PS | 1,984 ccm" },
    { label: "Fuel Type", value: "Diesel" },
    { label: "Drive", value: "all-wheel" },
    { label: "Color", value: "White" },
    {
      label: "Vehicle Identification Number (VIN)",
      value: "WPOZZZ98ZK1234567",
    },
  ];
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Fetched Data
        </h2>
        <p className="font-montserrat font-medium">
          This is the information that was found on the car from the previous
          evaluation.
        </p>
      </div>
      <div className="bg-white rounded-sm flex flex-col gap-4 p-8 justify-center">
        {data.map((option, index) => (
          <div className="flex min-w-9/12" key={index}>
            <p className="font-montserrat font-medium min-w-96">
              {option.label}
            </p>
            <p className="px-2 font-montserrat font-medium text-primary min-w-96">
              {option.value}
            </p>
          </div>
        ))}
        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            <SecondaryButton onClick={onBack}>Back</SecondaryButton>
            <PrimaryButton onClick={onNext}>Continue</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
