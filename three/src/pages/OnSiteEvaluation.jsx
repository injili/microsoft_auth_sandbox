import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import FetchedData from "./OnSiteEvaluation/FetchedData";
import RegistrationDocument from "./OnSiteEvaluation/RegistrationDocument";
import Transmission from "./OnSiteEvaluation/Transmission";
import Drive from "./OnSiteEvaluation/Drive";
import Type from "./OnSiteEvaluation/Type";
import PreviousOwners from "./OnSiteEvaluation/PreviousOwners";
import PaintInspection from "./OnSiteEvaluation/PaintInspection";
import AccidentStatus from "./OnSiteEvaluation/AccidentStatus";
import DentsScuffsDamages from "./OnSiteEvaluation/DentScuffsDamages";
import Tires from "./OnSiteEvaluation/Tires";
import AdditionalEquipment from "./OnSiteEvaluation/AdditionalEquipment";
import InspectionData from "./OnSiteEvaluation/InspectionData";
import Warranty from "./OnSiteEvaluation/Warranty";
import VisualInspection from "./OnSiteEvaluation/VisualInspection";
import TestDrive from "./OnSiteEvaluation/TestDrive";
import PurchaseContract from "./OnSiteEvaluation/PurchaseContract";

export default function OnSiteEvaluation() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(parseInt(searchParams.get("step")) || 1);

  const handleNext = () => {
    if (step < 16) return setStep(step + 1);
    else return navigate("/onlinesummary");
  };
  const handleBack = () => {
    if (step > 1) return setStep(step - 1);
    else return navigate("/");
  };

  return (
    <div className="w-full py-8 flex flex-col items-center justify-center">
      {step === 1 && <FetchedData onNext={handleNext} onBack={handleBack} />}
      {step === 2 && (
        <RegistrationDocument onNext={handleNext} onBack={handleBack} />
      )}
      {step === 3 && <Transmission onNext={handleNext} onBack={handleBack} />}
      {step === 4 && <Drive onNext={handleNext} onBack={handleBack} />}
      {step === 5 && <Type onNext={handleNext} onBack={handleBack} />}
      {step === 6 && <PreviousOwners onNext={handleNext} onBack={handleBack} />}
      {step === 7 && (
        <PaintInspection onNext={handleNext} onBack={handleBack} />
      )}
      {step === 8 && <AccidentStatus onNext={handleNext} onBack={handleBack} />}
      {step === 9 && (
        <DentsScuffsDamages onNext={handleNext} onBack={handleBack} />
      )}
      {step === 10 && <Tires onNext={handleNext} onBack={handleBack} />}
      {step === 11 && (
        <AdditionalEquipment onNext={handleNext} onBack={handleBack} />
      )}
      {step === 12 && (
        <InspectionData onNext={handleNext} onBack={handleBack} />
      )}
      {step === 13 && <Warranty onNext={handleNext} onBack={handleBack} />}
      {step === 14 && (
        <VisualInspection onNext={handleNext} onBack={handleBack} />
      )}
      {step === 15 && <TestDrive onNext={handleNext} onBack={handleBack} />}
      {step === 16 && (
        <PurchaseContract onNext={handleNext} onBack={handleBack} />
      )}
    </div>
  );
}
