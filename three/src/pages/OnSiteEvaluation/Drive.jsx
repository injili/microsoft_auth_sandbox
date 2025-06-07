import { useState, Fragment } from "react";
import { Disclosure, DisclosurePanel } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import SecondaryButton from "../../components/secondaryButton";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import ButtonYes from "../../components/buttonYes";
import ButtonNo from "../../components/buttonNo";

export default function Drive({ onBack, onNext }) {
  const [clickYes, setClickYes] = useState(false);
  const [clickNo, setClickNo] = useState(false);
  const [frontWheel, setFrontWheel] = useState(false);
  const [rearWheel, setRearWheel] = useState(false);
  const [allWheel, setAllWheel] = useState(false);
  const [fourWheel, setFourWheel] = useState(false);
  const [isFalse, setIsFalse] = useState(false);

  const handleFrontWheel = () => {
    if (frontWheel) {
      setFrontWheel(false);
    } else {
      setFrontWheel(true);
      setAllWheel(false);
      setFourWheel(false);
      setRearWheel(false);
    }
  };

  const handleRearWheel = () => {
    if (rearWheel) {
      setRearWheel(false);
    } else {
      setRearWheel(true);
      setFrontWheel(false);
      setAllWheel(false);
      setFourWheel(false);
    }
  };

  const handleAllWheel = () => {
    if (allWheel) {
      setAllWheel(false);
    } else {
      setRearWheel(false);
      setFrontWheel(false);
      setAllWheel(true);
      setFourWheel(false);
    }
  };

  const handleFourWheel = () => {
    if (fourWheel) {
      setAllWheel(false);
    } else {
      setRearWheel(false);
      setFrontWheel(false);
      setAllWheel(false);
      setFourWheel(true);
    }
  };

  const handleClickYes = () => {
    if (clickYes) {
      setClickYes(false);
    } else {
      setClickNo(false);
      setClickYes(true);
      setIsFalse(false);
    }
  };

  const handleClickNo = () => {
    if (clickNo) {
      setClickNo(false);
      setIsFalse(false);
    } else {
      setClickYes(false);
      setClickNo(true);
      setIsFalse(true);
    }
  };

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Drive
        </h2>
        <p className="font-montserrat font-bold">
          Previously Recorded Data:
          <span className="ml-4 text-lg text-primary">All-Wheel</span>
        </p>
      </div>

      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <p className="font-montserrat font-medium">
          Do the transmission details match the previously recorded data?
        </p>
        <div className="flex py-2 gap-4">
          <ButtonYes onClick={handleClickYes} showIcon={clickYes} />
          <ButtonNo onClick={handleClickNo} showIcon={clickNo} />
        </div>
        <Disclosure
          as="div"
          className="w-full mt-2 border-l-2 border-[#2154A2] ml-4 pl-8"
        >
          <div className="overflow-hidden">
            <AnimatePresence>
              {isFalse && (
                <DisclosurePanel static as={Fragment}>
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{
                      opacity: { duration: 0.5, ease: "easeOut" },
                      y: { type: "spring", stiffness: 100, damping: 30 },
                      default: {
                        duration: 0.1,
                        ease: "easeOut",
                      },
                    }}
                    className="origin-top"
                  >
                    <div className="flex flex-col gap-2">
                      <p className="font-montserrat font-medium">
                        What kind of accident damage is present?
                      </p>
                      <div className="flex max-w-1/2 flex-wrap gap-4">
                        <RegularButton
                          onClick={handleFrontWheel}
                          showIcon={frontWheel}
                        >
                          Front-Wheel
                        </RegularButton>
                        <RegularButton
                          onClick={handleRearWheel}
                          showIcon={rearWheel}
                        >
                          Rear-Wheel
                        </RegularButton>
                        <RegularButton
                          onClick={handleAllWheel}
                          showIcon={allWheel}
                        >
                          All-Wheel
                        </RegularButton>
                        <RegularButton
                          onClick={handleFourWheel}
                          showIcon={fourWheel}
                        >
                          Four-Wheel
                        </RegularButton>
                      </div>
                    </div>
                  </motion.div>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </Disclosure>
        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            <SecondaryButton onClick={onBack}>Back</SecondaryButton>
            <PrimaryButton onClick={onNext}>Save and Continue</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
