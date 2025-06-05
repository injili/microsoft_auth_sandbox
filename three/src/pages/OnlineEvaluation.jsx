import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Manufacturer from "./FirstEleven/Manufacturer";
import Model from "./FirstEleven/Model";
import VehicleType from "./FirstEleven/VehicleType";
import FirstRegistration from "./FirstEleven/FirstRegistration";
import Mileage from "./FirstEleven/Mileage";
import EngineSpecification from "./FirstEleven/EngineSpecification";
import FuelType from "./FirstEleven/FuelType";
import Transmission from "./FirstEleven/Transmission";
import Drive from "./FirstEleven/Drive";
import Color from "./FirstEleven/Color";
import PriceAsAdvertised from "./FirstEleven/PriceAsAdvertised";
import { useNavigate } from "react-router-dom";
import CustomerPhoneNumber from "./FirstEleven/CustomerPhoneNumber";

export default function OnlineEvaluation() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const stepParam = searchParams.get("step");
  const hasStep = stepParam !== null;
  const initialStep = parseInt(stepParam) || 1;
  const [step, setStep] = useState(initialStep);

  const handleNext = () => {
    if (step < 12) return setStep(step + 1);
    else return navigate("/onlinesummary");
  };
  const handleBack = () => {
    if (step > 1) return setStep(step - 1);
    else return navigate("/");
  };

  return (
    <div className="w-full flex items-center justify-center">
      {step === 1 && (
        <Manufacturer
          onNext={handleNext}
          onBack={handleBack}
          hasStep={hasStep}
        />
      )}
      {step === 2 && (
        <Model onNext={handleNext} onBack={handleBack} hasStep={hasStep} />
      )}
      {step === 3 && (
        <VehicleType
          onNext={handleNext}
          onBack={handleBack}
          hasStep={hasStep}
        />
      )}
      {step === 4 && (
        <FirstRegistration
          onNext={handleNext}
          onBack={handleBack}
          hasStep={hasStep}
        />
      )}
      {step === 5 && (
        <Mileage onNext={handleNext} onBack={handleBack} hasStep={hasStep} />
      )}
      {step === 6 && (
        <EngineSpecification
          onNext={handleNext}
          onBack={handleBack}
          hasStep={hasStep}
        />
      )}
      {step === 7 && (
        <FuelType onNext={handleNext} onBack={handleBack} hasStep={hasStep} />
      )}
      {step === 8 && (
        <Transmission
          onNext={handleNext}
          onBack={handleBack}
          hasStep={hasStep}
        />
      )}
      {step === 9 && (
        <Drive onNext={handleNext} onBack={handleBack} hasStep={hasStep} />
      )}
      {step === 10 && (
        <Color onNext={handleNext} onBack={handleBack} hasStep={hasStep} />
      )}
      {step === 11 && (
        <PriceAsAdvertised
          onNext={handleNext}
          onBack={handleBack}
          hasStep={hasStep}
        />
      )}
      {step === 12 && (
        <CustomerPhoneNumber
          onNext={handleNext}
          onBack={handleBack}
          hasStep={hasStep}
        />
      )}
    </div>
  );
}
