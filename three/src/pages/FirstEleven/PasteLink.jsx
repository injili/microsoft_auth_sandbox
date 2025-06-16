import { useState } from "react";
import PrimaryButton from "../../components/primaryButton";
import { Link } from "react-router-dom";

export default function PasteLink({ onNext }) {
  const [theurl, setTheurl] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const evaluateURL = async () => {
    const urlRegex =
      /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
    if (theurl && !urlRegex.test(theurl.trim())) {
      setResponseMessage("Invalid URL format");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!theurl) {
      setResponseMessage("Please paste the URL.");
      return;
    }
    await evaluateURL;
  };
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
        Use Link
      </h2>
      <div className="flex flex-col gap-2 bg-white rounded-sm p-8">
        <p className="font-montserrat font-medium">
          Paste the link to the vehicle here.
        </p>
        {responseMessage && (
          <p className="text-sm text-red-500 font-montserrat font-semibold">
            * {responseMessage}
          </p>
        )}
        <input
          type="text"
          placeholder="eg. https://suchen.mobile.de/fahrzeuge/details..."
          className="outline-none w-full border-1 w-full px-2 py-1.5 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
          onChange={(e) => setTheurl(e.target.value)}
        ></input>
        <p className="font-montserrat mt-2 font-medium">
          or
          <button onClick={() => onNext}>
            <span className="text-primary underline text-lg">
              Manually Fill Form
            </span>
          </button>
        </p>
        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            <Link to={`/onlineevaluation?step=14`}>
              <PrimaryButton onClick={() => handleSubmit()}>
                Continue
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
