import { useState } from "react";
import SecondaryButton from "../../components/secondaryButton";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import ButtonCheck from "../../components/buttonCheck";

export default function VisualInspection({ onBack, onNext }) {
  const [selectOil, setSelectOil] = useState(null);
  const [selectCoolant, setSelectCoolant] = useState(null);
  const [selectInterior, setSelectInterior] = useState(null);
  const [selectAirConditioning, setSelectAirConditioning] = useState(null);
  const [selectFault, setSelectFault] = useState(null);

  const handleOil = (type) => {
    setSelectOil((prev) => (prev === type ? null : type));
  };

  const handleCoolant = (type) => {
    setSelectCoolant((prev) => (prev === type ? null : type));
  };

  const handleInterior = (type) => {
    setSelectInterior((prev) => (prev === type ? null : type));
  };

  const handleAirConditioning = (type) => {
    setSelectAirConditioning((prev) => (prev === type ? null : type));
  };

  const handleFault = (type) => {
    setSelectFault((prev) => (prev === type ? null : type));
  };

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
        Visual Inspection
      </h2>

      <div className="flex flex-col gap-4 bg-white rounded-sm p-8 justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">
            What is the Engine’s Oil Level?
          </p>
          <div className="flex py-2 gap-4">
            <div className="flex flex-wrap gap-4">
              <RegularButton
                onClick={() => handleOil("empty")}
                showIcon={selectOil === "empty"}
              >
                Empty
              </RegularButton>

              <RegularButton
                onClick={() => handleOil("low")}
                showIcon={selectOil === "low"}
              >
                Low
              </RegularButton>

              <RegularButton
                onClick={() => handleOil("mid")}
                showIcon={selectOil === "mid"}
              >
                Mid
              </RegularButton>

              <RegularButton
                onClick={() => handleOil("full")}
                showIcon={selectOil === "full"}
              >
                Full
              </RegularButton>
              <RegularButton
                onClick={() => handleOil("overfull")}
                showIcon={selectOil === "overfull"}
              >
                Overfull
              </RegularButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">
            What is the Coolant Level?
          </p>
          <div className="flex py-2 gap-4">
            <div className="flex flex-wrap gap-4">
              <RegularButton
                onClick={() => handleCoolant("empty")}
                showIcon={selectCoolant === "empty"}
              >
                Empty
              </RegularButton>

              <RegularButton
                onClick={() => handleCoolant("low")}
                showIcon={selectCoolant === "low"}
              >
                Low
              </RegularButton>

              <RegularButton
                onClick={() => handleCoolant("mid")}
                showIcon={selectCoolant === "mid"}
              >
                Mid
              </RegularButton>

              <RegularButton
                onClick={() => handleCoolant("full")}
                showIcon={selectCoolant === "full"}
              >
                Full
              </RegularButton>
              <RegularButton
                onClick={() => handleCoolant("overfull")}
                showIcon={selectCoolant === "overfull"}
              >
                Overfull
              </RegularButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">
            Is the interior free from any visible damage, including seats,
            upholstery, and trim components?
          </p>
          <div className="flex py-2 gap-4">
            <div className="flex flex-wrap gap-4">
              <RegularButton
                onClick={() => handleInterior("nodamage")}
                showIcon={selectInterior === "nodamage"}
              >
                No Damage
              </RegularButton>

              <RegularButton
                onClick={() => handleInterior("minordamage")}
                showIcon={selectInterior === "minordamage"}
              >
                Minor Damage
              </RegularButton>

              <RegularButton
                onClick={() => handleInterior("cosmeticdamage")}
                showIcon={selectInterior === "cosmeticdamage"}
              >
                Cosmetic Damage
              </RegularButton>

              <RegularButton
                onClick={() => handleInterior("majordamage")}
                showIcon={selectInterior === "majordamage"}
              >
                Major Damage
              </RegularButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">
            Is the air conditioning system operational, and does the compressor
            appear to be in good visual condition?
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <ButtonCheck
                onClick={() => handleAirConditioning("one")}
                showIcon={selectAirConditioning === "one"}
              />
              <p className="font-montserrat font-medium">
                Fully operational. Compressor in good visual condition too.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ButtonCheck
                onClick={() => handleAirConditioning("two")}
                showIcon={selectAirConditioning === "two"}
              />
              <p className="font-montserrat font-medium">
                Operational, but compressor shows signs of wear or minor issues.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ButtonCheck
                onClick={() => handleAirConditioning("three")}
                showIcon={selectAirConditioning === "three"}
              />
              <p className="font-montserrat font-medium">
                Not operational; compressor appears damaged or compromised.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">
            Did the diagnostic scan return any fault codes?
          </p>
          <div className="flex py-2 gap-4">
            <div className="flex flex-wrap gap-4">
              <RegularButton
                onClick={() => handleFault("nofault")}
                showIcon={selectFault === "nofault"}
              >
                No Damage
              </RegularButton>

              <RegularButton
                onClick={() => handleFault("minorfault")}
                showIcon={selectFault === "minorfault"}
              >
                Minor Fault
              </RegularButton>

              <RegularButton
                onClick={() => handleFault("majorfault")}
                showIcon={selectFault === "majorfault"}
              >
                Major Fault
              </RegularButton>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            <SecondaryButton onClick={onBack}>Back</SecondaryButton>
            <PrimaryButton onClick={onNext}>Save and Continue</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
