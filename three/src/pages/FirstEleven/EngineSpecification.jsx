import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
import TertiaryButton from "../../components/tertiaryButton";
import { useEffect, useState } from "react";

export default function EngineSpecification({
  carDetails,
  setCarDetails,
  onBack,
  onNext,
}) {
  const [kw, setKw] = useState("");
  const [ps, setPs] = useState("");
  const [ccm, setCcm] = useState("");

  const [responseMessage, setResponseMessage] = useState("");
  const [isInValid, setIsInValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (carDetails.engine_specification) {
      setKw(carDetails.engine_specification.kw);
      setPs(carDetails.engine_specification.ps);
      setCcm(carDetails.engine_specification.ccm);
    }
  }, [carDetails.engine_specification]);

  const handleSubmit = () => {
    if (!kw || !ps || !ccm) {
      setIsInValid(true);
      setResponseMessage("Fill out the engine specification.");
      return;
    }

    setCarDetails((prev) => ({
      ...prev,
      engine_specification: {
        ...prev.engine_specification,
        kw: kw,
        ps: ps,
        ccm: ccm,
      },
    }));

    onNext();
  };

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Engine Specification
        </h2>
        <p className="font-montserrat font-medium">
          What is the vehicle's engine specification?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        {responseMessage && (
          <p className="text-sm text-red-500 font-montserrat font-semibold">
            * {responseMessage}
          </p>
        )}
        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">kW</p>
            <input
              type="number"
              value={kw}
              onChange={(e) => setKw(parseInt(e.target.value))}
              className="outline-none  min-w-62 border-1 max-w-62 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">PS</p>
            <input
              type="number"
              value={ps}
              onChange={(e) => setPs(parseInt(e.target.value))}
              className="outline-none  min-w-62 border-1 max-w-62 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">ccm</p>
            <input
              type="number"
              value={ccm}
              onChange={(e) => setCcm(parseInt(e.target.value))}
              className="outline-none min-w-62 border-1 max-w-62 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
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
            <PrimaryButton onClick={handleSubmit}>Continue</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
