import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import { useState, Fragment } from "react";

import NoCheckbox from "../components/noCheckbox";
import ProgressBar from "../components/progressBar";
import YesCheckbox from "../components/yesCheckbox";
import RegularButton from "../components/regularButton";
import SecondaryButton from "../components/secondaryButton";
import PrimaryButton from "../components/primaryButton";

import AccidentStatusCar from "../components/accidentStatusCar";
import ButtonTest from "../components/buttonTest";

export default function AccidentStatusPage() {
  const [isAccidentFree, setIsAccidentFree] = useState(null);
  const [currentClicked, setCurrentClicked] = useState(false);
  const [repairedClicked, setRepairedClicked] = useState(false);

  const handleCurrentClick = () => {
    if (currentClicked) {
      setCurrentClicked(false);
    } else {
      setCurrentClicked(true);
      setRepairedClicked(false);
    }
  };
  const handleRepairedClick = () => {
    if (repairedClicked) {
      setRepairedClicked(false);
    } else {
      setRepairedClicked(true);
      setCurrentClicked(false);
    }
  };

  const handleYes = () => setIsAccidentFree(true);
  const handleNo = () => setIsAccidentFree(false);
  return (
    <div className="flex flex-col gap-4 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Accident Status
        </h2>
        <p className="font-montserrat font-medium">
          What is the Accident Status on the vehicle’s body?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center neumorphic">
        <p className="font-montserrat font-medium">
          Is the vehicle accident free?
        </p>
        <div className="flex py-2 gap-4">
          <ButtonTest />
          <YesCheckbox onClick={handleYes} />
          <NoCheckbox onClick={handleNo} />
        </div>
        <Disclosure
          as="div"
          className="w-full border-l-2 border-[#2154A2] ml-4 pl-4"
        >
          <div className="overflow-hidden py-2">
            <AnimatePresence>
              {isAccidentFree === false && (
                <DisclosurePanel static as={Fragment}>
                  <motion.div
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.5, ease: easeOut }}
                    className="origin-top"
                  >
                    <div className="flex flex-col gap-2">
                      <p className="font-montserrat font-medium">
                        What kind of accident damage is present?
                      </p>
                      <div className="flex gap-4">
                        <RegularButton
                          onClick={handleCurrentClick}
                          showIcon={currentClicked}
                        >
                          Current Damage
                        </RegularButton>
                        <RegularButton
                          onClick={handleRepairedClick}
                          showIcon={repairedClicked}
                        >
                          Repaired Damage
                        </RegularButton>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-montserrat font-medium">
                          Damage Cost
                        </p>
                        <input
                          type="text"
                          className="border-1 max-w-96 p-2 rounded-sm border-[#2154A2] focus:outline-none focus:border-[#2C6DD1] font-montserrat"
                        ></input>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-montserrat font-medium">
                          Damaged Parts
                        </p>
                        <p className="font-montserrat font-medium">
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
            <SecondaryButton onClick={() => alert("Back to previous page")}>
              Back
            </SecondaryButton>
            <PrimaryButton onClick={() => alert("Next step")}>
              Save and Continue
            </PrimaryButton>
          </div>
        </div>
      </div>
      <ProgressBar progress={9} />
    </div>
  );
}
