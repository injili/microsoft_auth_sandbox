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
// import axios from "axios";
// import base64 from "base-64";

// const API_URL = import.meta.env.VITE_API_URL;
// const TOKEN_URL = import.meta.env.VITE_TOKEN_URL;
// const CONSUMER_KEY = import.meta.env.VITE_CONSUMER_KEY;
// const CONSUMER_SECRET = import.meta.env.VITE_CONSUMER_SECRET;

export default function OnlineEvaluation() {
  // const [responseMessage, setResponseMessage] = useState("");
  // const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const stepParam = searchParams.get("step");
  const hasStep = stepParam !== null;
  const initialStep = parseInt(stepParam) || 1;
  const [step, setStep] = useState(initialStep);
  const [carDetails, setCarDetails] = useState({});
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
    console.log("Updated carDetails:", carDetails);
  }, [carDetails]);

  useEffect(() => {
    if (step !== initialStep) {
      searchParams.set("step", step);
      navigate(`?${searchParams.toString()}`, { replace: true });
    }
  }, [step]);

  // const getAccessToken = async () => {
  //   const credentials = base64.encode(`${CONSUMER_KEY}:${CONSUMER_SECRET}`);
  //   try {
  //     const response = await axios.get(`${TOKEN_URL}`, {
  //       headers: {
  //         Authorization: `Basic ${credentials}`,
  //       },
  //     });
  //     const { access_token } = response.data;
  //     return access_token;
  //   } catch (error) {
  //     console.error("Error fetching access token", error);
  //     throw error;
  //   }
  // };

  // const handleLink = async (l) => {
  //   setLoading(true);
  //   try {
  //     const accessToken = await getAccessToken();
  //     const headers = {
  //       Authorization: `Bearer ${accessToken}`,
  //     };

  //     const data = {
  //       link: l,
  //     };

  //     const response = await axios.post(`${API_URL}`, data, { headers });

  //   } catch (error) {
  //     console.error("Error:", error);
  //     setResponseMessage(
  //       "An error occurred while fetching car details request. Please try again"
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="min-h-full w-full  flex flex-col items-center justify-center">
      <div></div>
      <div className="px-4 flex-grow flex items-center justify-center w-full md:w-10/12 lg:w-11/12">
        {/* {step === 1 && <PasteLink onFetch={handleLink} onNext={handleNext} />} */}
        {step === 1 && <PasteLink onNext={handleNext} />}
        {step === 2 && (
          <Manufacturer
            carDetails={carDetails}
            setCarDetails={setCarDetails}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 3 && (
          <Model
            carDetails={carDetails}
            setCarDetails={setCarDetails}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 4 && (
          <VehicleType
            carDetails={carDetails}
            setCarDetails={setCarDetails}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 5 && (
          <FirstRegistration
            carDetails={carDetails}
            setCarDetails={setCarDetails}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 6 && (
          <Mileage
            carDetails={carDetails}
            setCarDetails={setCarDetails}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 7 && (
          <EngineSpecification
            carDetails={carDetails}
            setCarDetails={setCarDetails}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 8 && (
          <FuelType
            carDetails={carDetails}
            setCarDetails={setCarDetails}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 9 && (
          <Transmission
            carDetails={carDetails}
            setCarDetails={setCarDetails}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 10 && (
          <Drive
            carDetails={carDetails}
            setCarDetails={setCarDetails}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 11 && (
          <Color
            carDetails={carDetails}
            setCarDetails={setCarDetails}
            onNext={handleNext}
            onBack={handleBack}
          />
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
