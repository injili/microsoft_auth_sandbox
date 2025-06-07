import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import FetchedData from "./OnSiteEvaluation/FetchedData";
import RegistrationDocument from "./OnSiteEvaluation/RegistrationDocument";

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
    <div className="w-full flex flex-col items-center justify-center">
      {step === 1 && <FetchedData onNext={handleNext} onBack={handleBack} />}
      {step === 2 && (
        <RegistrationDocument onNext={handleNext} onBack={handleBack} />
      )}
    </div>
  );
}
