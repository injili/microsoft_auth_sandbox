import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
import CustomerPhoneNumber from "./FirstEleven/CustomerPhoneNumber";
import ProgressBar from "../components/progressBar";
import PasteLink from "./FirstEleven/PasteLink";
import OnlineSummary from "./FirstEleven/OnlineSummary";
import IncompleteFormPage from "./FirstEleven/FirstElevenFormPage";

export default function OnlineEvaluation() {
  const [searchParams] = useSearchParams();
  const stepParam = searchParams.get("step");
  const hasStep = stepParam !== null;
  const initialStep = parseInt(stepParam) || 1;
  const [step, setStep] = useState(initialStep);
  const navigate = useNavigate();

  const handleNext = (i) => {
    if (i) return setStep(i);
    if (step < 16) return setStep(step + 1);
    else return;
  };
  const handleBack = (i) => {
    if (i) return setStep(i);
    if (step > 1) return setStep(step - 1);
    else return;
  };

  useEffect(() => {
    if (step !== initialStep) {
      searchParams.set("step", step);
      navigate(`?${searchParams.toString()}`, { replace: true });
    }
  }, [step]);

  return (
    <div className="min-h-full w-full  flex flex-col items-center justify-center">
      <div></div>
      <div className="px-4 flex-grow flex items-center justify-center w-full md:w-10/12 lg:w-11/12">
        {step === 1 && <PasteLink onNext={handleNext} />}
        {step === 2 && (
          <Manufacturer
            onNext={handleNext}
            onBack={handleBack}
            hasStep={hasStep}
          />
        )}
        {step === 3 && (
          <Model onNext={handleNext} onBack={handleBack} hasStep={hasStep} />
        )}
        {step === 4 && (
          <VehicleType
            onNext={handleNext}
            onBack={handleBack}
            hasStep={hasStep}
          />
        )}
        {step === 5 && (
          <FirstRegistration
            onNext={handleNext}
            onBack={handleBack}
            hasStep={hasStep}
          />
        )}
        {step === 6 && (
          <Mileage onNext={handleNext} onBack={handleBack} hasStep={hasStep} />
        )}
        {step === 7 && (
          <EngineSpecification
            onNext={handleNext}
            onBack={handleBack}
            hasStep={hasStep}
          />
        )}
        {step === 8 && (
          <FuelType onNext={handleNext} onBack={handleBack} hasStep={hasStep} />
        )}
        {step === 9 && (
          <Transmission
            onNext={handleNext}
            onBack={handleBack}
            hasStep={hasStep}
          />
        )}
        {step === 10 && (
          <Drive onNext={handleNext} onBack={handleBack} hasStep={hasStep} />
        )}
        {step === 11 && (
          <Color onNext={handleNext} onBack={handleBack} hasStep={hasStep} />
        )}
        {step === 12 && (
          <PriceAsAdvertised
            onNext={handleNext}
            onBack={handleBack}
            hasStep={hasStep}
          />
        )}
        {step === 13 && (
          <CustomerPhoneNumber
            onNext={handleNext}
            onBack={handleBack}
            hasStep={hasStep}
          />
        )}
        {step === 14 && (
          <IncompleteFormPage onBack={handleBack} onNext={handleNext} />
        )}
        {step === 15 && <OnlineSummary onBack={handleBack} />}
      </div>
      <div className="px-4 flex justify-center w-full md:w-10/12 lg:w-11/12">
        {step > 1 && step < 14 && (
          <ProgressBar progress={Math.round(((step - 2) / 12) * 100)} />
        )}
      </div>
    </div>
  );
}
