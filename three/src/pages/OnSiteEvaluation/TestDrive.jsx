import { useState } from "react";
import SecondaryButton from "../../components/secondaryButton";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import ButtonCheck from "../../components/buttonCheck";

export default function TestDrive({ onBack, onNext }) {
  const [selectBraking, setSelectBraking] = useState(null);
  const [selectEngineNoise, setSelectEngineNoise] = useState(null);
  const [selectClutch, setSelectClutch] = useState(null);
  const [selectSteering, setSelectSteering] = useState(null);

  const handleBraking = (type) => {
    setSelectBraking((prev) => (prev === type ? null : type));
  };

  const handleEngineNoise = (type) => {
    setSelectEngineNoise((prev) => (prev === type ? null : type));
  };

  const handleClutch = (type) => {
    setSelectClutch((prev) => (prev === type ? null : type));
  };

  const handleSteering = (type) => {
    setSelectSteering((prev) => (prev === type ? null : type));
  };

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
        Test Drive
      </h2>

      <div className="flex flex-col gap-4 bg-white rounded-sm p-8 justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">
            Is the braking system functioning effectively, with no unusual
            noises observed during application?
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <ButtonCheck
                onClick={() => handleBraking("one")}
                showIcon={selectBraking === "one"}
              />
              <p className="font-montserrat font-medium">
                Brakes functioning well; no noise.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ButtonCheck
                onClick={() => handleBraking("two")}
                showIcon={selectBraking === "two"}
              />
              <p className="font-montserrat font-medium">
                Braking effect sufficient; slight noise present.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ButtonCheck
                onClick={() => handleBraking("three")}
                showIcon={selectBraking === "three"}
              />
              <p className="font-montserrat font-medium">
                Braking effect reduced or noticeable noise.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">
            Are there unusual engine noises?
          </p>
          <div className="flex py-2 gap-4">
            <div className="flex flex-wrap gap-4">
              <RegularButton
                onClick={() => handleEngineNoise("yes")}
                showIcon={selectEngineNoise === "yes"}
              >
                Yes
              </RegularButton>

              <RegularButton
                onClick={() => handleEngineNoise("no")}
                showIcon={selectEngineNoise === "no"}
              >
                No
              </RegularButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">
            Is the clutch operating correctly, with a proper pressure point and
            normal clutch pedal travel?
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <ButtonCheck
                onClick={() => handleClutch("one")}
                showIcon={selectClutch === "one"}
              />
              <p className="font-montserrat font-medium">
                Clutch operates smoothly; pressure point and travel are normal.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ButtonCheck
                onClick={() => handleClutch("two")}
                showIcon={selectClutch === "two"}
              />
              <p className="font-montserrat font-medium">
                Clutch functional; slight irregularity in pressure point or
                travel.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ButtonCheck
                onClick={() => handleClutch("three")}
                showIcon={selectClutch === "three"}
              />
              <p className="font-montserrat font-medium">
                Clutch shows signs of slipping, hard engagement, or abnormal
                travel.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">
            Is the steering wheel straight when driving?
          </p>
          <div className="flex py-2 gap-4">
            <div className="flex flex-wrap gap-4">
              <RegularButton
                onClick={() => handleSteering("yes")}
                showIcon={selectSteering === "yes"}
              >
                Yes
              </RegularButton>

              <RegularButton
                onClick={() => handleSteering("no")}
                showIcon={selectSteering === "no"}
              >
                No
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
