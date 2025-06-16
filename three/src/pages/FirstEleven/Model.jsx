import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
import TertiaryButton from "../../components/tertiaryButton";
import { useState } from "react";
import EngineSpecification from "./EngineSpecification";
export default function Model({ carDetails, setCarDetails, onNext, onBack }) {
  const [responseMessage, setResponseMessage] = useState("");
  const [isInValid, setIsInValid] = useState(false);

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

  const carData = {
    manufacturer: "Toyota",
    model: "Corolla",
    vehicletype: "sedan",
    firstregistration: "Jan 2023",
    milage: 1000,
    enginespecification: {
      kw: 200,
      ps: 30,
      ccm: 400,
    },
    fueltype: "Diesel",
    transmission: "Automatic",
    drive: "Front-Wheel",
    color: "Lilac",
    priceasadvertised: 15000,
    customerphonenumber: "+49 30 12345678",
  };

  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Model
        </h2>
        <p className="font-montserrat font-medium">
          What is the vehicle's model?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Model</p>
          {responseMessage && (
            <p className="text-sm text-red-500 font-montserrat font-semibold">
              * {responseMessage}
            </p>
          )}
          <select
            onChange={(e) => {
              setCarDetails((prev) => ({
                ...prev,
                model: e.target.value,
                type: "",
              }));
              setIsInValid(false);
              setResponseMessage("");
            }}
            value={carDetails.model || ""}
            type="text"
            className={`outline-none bg-white border min-w-96 max-w-96 px-2 p-2 rounded-sm ${
              isInValid ? "border-red-500" : "border-[#2154A2]"
            } focus:border-2 font-montserrat`}
          >
            <option value="" disabled hidden>
              --Select Model --
            </option>
            {vehicle
              .find((v) => v.manufacturer == carDetails.manufacturer)
              ?.models.map((option, index) => (
                <option key={index} value={option.model}>
                  {option.model}
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
                if (!carDetails.model) {
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
