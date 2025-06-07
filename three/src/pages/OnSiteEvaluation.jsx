import { useNavigate, useSearchParams } from "react-router-dom";

export default function OnSiteEvaluation() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(parseInt(searchParams.get("step")) || 1);

  const handleNext = () => {
    if (step < 12) return setStep(step + 1);
    else return navigate("/onlinesummary");
  };
  const handleBack = () => {
    if (step > 1) return setStep(step - 1);
    else return navigate("/");
  };

  return <div></div>;
}
