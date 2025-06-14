import { useState, Fragment } from "react";
import { Disclosure, DisclosurePanel } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import SecondaryButton from "../../components/secondaryButton";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import ButtonYes from "../../components/buttonYes";
import ButtonNo from "../../components/buttonNo";
import AccidentStatusCar from "../../components/accidentStatusCar";

export default function AccidentStatus({ onBack, onNext }) {
  const [clickYes, setClickYes] = useState(false);
  const [clickNo, setClickNo] = useState(false);
  const [manualClick, setCurrentClick] = useState(false);
  const [repairedClick, setRepairedClick] = useState(false);
  const [isFalse, setIsFalse] = useState(false);

  const handleCurrent = () => {
    if (manualClick) {
      setCurrentClick(false);
    } else {
      setCurrentClick(true);
      setRepairedClick(false);
    }
  };

  const handleRepaired = () => {
    if (repairedClick) {
      setRepairedClick(false);
    } else {
      setRepairedClick(true);
      setCurrentClick(false);
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
          Accident Status
        </h2>
        <p className="font-montserrat font-bold">
          Previously Recorded Data: Is the vehicle accident free?
          <span className="ml-4 text-lg text-primary">Yes</span>
        </p>
      </div>

      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <p className="font-montserrat font-medium">
          Is the vehicle accident free?
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
                      <div className="flex gap-4">
                        <RegularButton
                          onClick={handleCurrent}
                          showIcon={manualClick}
                        >
                          Current Damage
                        </RegularButton>
                        <RegularButton
                          onClick={handleRepaired}
                          showIcon={repairedClick}
                        >
                          Repaired Damage
                        </RegularButton>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-montserrat font-medium">
                          Damage Cost
                        </p>
                        <div className=" flex items-center gap-2 border-1 max-w-96 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat">
                          <input
                            type="text"
                            className="outline-none w-full bg-transparent"
                          ></input>
                          <p className="px-2 font-montserrat text-lg font-medium">
                            €
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-montserrat font-medium">
                          Damaged Parts
                        </p>
                        <p className="font-montserrat font-medium text-sm">
                          Tap on the diagram to give details on the damage
                        </p>
                        <AccidentStatusCar />
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
