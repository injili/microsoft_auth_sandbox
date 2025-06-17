import { useNavigate } from "react-router-dom";
import TertiaryButton from "../../components/tertiaryButton";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import SecondaryButton from "../../components/secondaryButton";
import { useEffect, useMemo, useState } from "react";
export default function VehicleType({
  carDetails,
  setCarDetails,
  onNext,
  onBack,
}) {
  const navigate = useNavigate();
  const [responseMessage, setResponseMessage] = useState("");
  const [selectedType, setSelectedType] = useState(null);

  const vehicle = [
    {
      manufacturer: "Toyota",
      models: [
        { model: "Corolla", types: ["sedan", "hatchback"] },
        { model: "Camry", types: ["sedan"] },
        { model: "RAV4", types: ["SUV"] },
        { model: "Hilux", types: ["pickup"] },
        { model: "Land Cruiser", types: ["SUV"] },
      ],
    },
    {
      manufacturer: "Mercedes-Benz",
      models: [
        { model: "A-Class", types: ["hatchback", "sedan"] },
        { model: "C-Class", types: ["sedan", "coupe", "wagon"] },
        { model: "E-Class", types: ["sedan", "coupe", "wagon"] },
        { model: "GLA", types: ["SUV", "crossover"] },
        { model: "S-Class", types: ["sedan", "coupe"] },
      ],
    },
    {
      manufacturer: "Brabus",
      models: [
        { model: "G V12 900", types: ["SUV"] },
        { model: "Brabus 800 Adventure XLP", types: ["pickup", "SUV"] },
        { model: "Brabus Rocket 900", types: ["sedan"] },
        { model: "Brabus GLE Coupe", types: ["coupe", "SUV"] },
        { model: "Brabus E V12", types: ["sedan"] },
      ],
    },
    {
      manufacturer: "Porsche",
      models: [
        { model: "911", types: ["coupe", "convertible"] },
        { model: "Panamera", types: ["sedan", "wagon"] },
        { model: "Macan", types: ["SUV"] },
        { model: "Cayenne", types: ["SUV", "coupe"] },
        { model: "Taycan", types: ["sedan"] },
      ],
    },
    {
      manufacturer: "BMW",
      models: [
        { model: "3 Series", types: ["sedan", "wagon", "coupe"] },
        { model: "5 Series", types: ["sedan", "wagon"] },
        { model: "X5", types: ["SUV"] },
        { model: "X3", types: ["SUV"] },
        { model: "M4", types: ["coupe", "convertible"] },
      ],
    },
    {
      manufacturer: "Peugeot",
      models: [
        { model: "208", types: ["hatchback"] },
        { model: "2008", types: ["SUV", "crossover"] },
        { model: "3008", types: ["SUV"] },
        { model: "508", types: ["sedan", "wagon"] },
        { model: "5008", types: ["SUV"] },
      ],
    },
    {
      manufacturer: "Volkswagen",
      models: [
        { model: "Golf", types: ["hatchback"] },
        { model: "Passat", types: ["sedan", "wagon"] },
        { model: "Tiguan", types: ["SUV"] },
        { model: "Polo", types: ["hatchback"] },
        { model: "Arteon", types: ["sedan", "wagon"] },
      ],
    },
    {
      manufacturer: "Mazda",
      models: [
        { model: "Mazda3", types: ["sedan", "hatchback"] },
        { model: "Mazda6", types: ["sedan"] },
        { model: "CX-5", types: ["SUV"] },
        { model: "CX-9", types: ["SUV"] },
        { model: "MX-5 Miata", types: ["convertible"] },
      ],
    },
  ];

  const selectedModelObj = useMemo(() => {
    const manufacturerIndex = carDetails.manufacturer;
    const modelIndex = carDetails.model;

    if (
      typeof manufacturerIndex === "number" &&
      typeof modelIndex === "number" &&
      vehicle[manufacturerIndex] &&
      vehicle[manufacturerIndex].models[modelIndex]
    ) {
      return vehicle[manufacturerIndex].models[modelIndex];
    }

    return onBack();
  }, [carDetails.manufacturer, carDetails.model]);

  useEffect(() => {
    if (!carDetails.model || !carDetails.manufacturer) return onBack();
  });

  useEffect(() => {
    if (
      carDetails.type !== undefined &&
      selectedModelObj?.types[carDetails.type]
    ) {
      setSelectedType(selectedModelObj.types[carDetails.type]);
    }
  }, [carDetails.type, selectedModelObj]);

  const handleType = (type) => {
    setSelectedType((prev) => (prev === type ? null : type));
  };

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Type
        </h2>
        <p className="font-montserrat font-medium">
          What is the vehicle's type?
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
            {selectedModelObj?.types.map((type, index) => (
              <RegularButton
                key={index}
                onClick={() => {
                  setCarDetails((prev) => ({ ...prev, type: index }));
                  handleType(type);
                }}
                showIcon={selectedType === type}
              >
                {type}
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
                if (carDetails.type === undefined || carDetails.type === null) {
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
