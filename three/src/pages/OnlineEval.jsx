import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import PreviousOwners from "./SecondEleven/PreviousOwners";
import PaintDepthPage from "./SecondEleven/PaintDepthPage";
import AccidentStatusPage from "./SecondEleven/AccidentStatusPage";
import DentsScuffsDamagesPage from "./SecondEleven/DentsScuffsDamagesPage";
import VehicleIdentificationNumber from "./SecondEleven/VehicleIdentificationNumber";
import TiresPage from "./SecondEleven/TiresPage";
import AdditionalEquipment from "./SecondEleven/AdditionalEquipment";
import InspectionData from "./SecondEleven/InspectionData";
import Warranty from "./SecondEleven/Warranty";
import Financing from "./SecondEleven/Financing";
import AddressCustomeData from "./SecondEleven/AddressCustomerData";
import CustomerFinalPrice from "./SecondEleven/CustomerFinalPrice";

export default function OnlineEval() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialStep = parseInt(searchParams.get("step")) || 1;
  const [step, setStep] = useState(initialStep);

  const handleNext = () => {
    if (step < 12) return setStep(step + 1);
    else return navigate("/onlinesummary");
  };

  const handleBack = () => {
    if (step > 1) return setStep(step - 1);
    else return navigate("/onlinesummary");
  };

  return (
    <div className="flex w-full items-center justify-center">
      {step === 1 && <PreviousOwners onNext={handleNext} onBack={handleBack} />}
      {step === 2 && <PaintDepthPage onNext={handleNext} onBack={handleBack} />}
      {step === 3 && (
        <AccidentStatusPage onNext={handleNext} onBack={handleBack} />
      )}
      {step === 4 && (
        <DentsScuffsDamagesPage onNext={handleNext} onBack={handleBack} />
      )}
      {step === 5 && (
        <VehicleIdentificationNumber onNext={handleNext} onBack={handleBack} />
      )}
      {step === 6 && <TiresPage onNext={handleNext} onBack={handleBack} />}
      {step === 7 && (
        <AdditionalEquipment onNext={handleNext} onBack={handleBack} />
      )}
      {step === 8 && <InspectionData onNext={handleNext} onBack={handleBack} />}
      {step === 9 && <Warranty onNext={handleNext} onBack={handleBack} />}
      {step === 10 && <Financing onNext={handleNext} onBack={handleBack} />}
      {step === 11 && (
        <AddressCustomeData onNext={handleNext} onBack={handleBack} />
      )}
      {step === 12 && (
        <CustomerFinalPrice onNext={handleNext} onBack={handleBack} />
      )}
    </div>
  );
}
