import { useState } from "react";

import SecondaryButton from "../../components/secondaryButton";
import PrimaryButton from "../../components/primaryButton";
import ButtonYes from "../../components/buttonYes";
import ButtonNo from "../../components/buttonNo";

export default function Financing() {
  const [clickYes, setClickYes] = useState(false);
  const [clickNo, setClickNo] = useState(false);

  const handleClickYes = () => {
    if (clickYes) {
      setClickYes(false);
    } else {
      setClickNo(false);
      setClickYes(true);
    }
  };

  const handleClickNo = () => {
    if (clickNo) {
      setClickNo(false);
    } else {
      setClickYes(false);
      setClickNo(true);
    }
  };

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
        Financing
      </h2>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <p className="font-montserrat font-medium">
          Is the vehicle still financed?
        </p>
        <div className="flex py-2 gap-4">
          <ButtonYes onClick={handleClickYes} showIcon={clickYes} />
          <ButtonNo onClick={handleClickNo} showIcon={clickNo} />
        </div>
        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            <SecondaryButton onClick={() => alert("Back to previous page")}>
              Back
            </SecondaryButton>
            <PrimaryButton onClick={() => alert("Next step")}>
              Save and Continue
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
