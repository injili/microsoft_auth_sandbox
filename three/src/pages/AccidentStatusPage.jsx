import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, easeOut, motion, spring } from "framer-motion";
import { useState, Fragment } from "react";

import NoCheckbox from "../components/noCheckbox";
import ProgressBar from "../components/progressBar";
import YesCheckbox from "../components/yesCheckbox";
import RegularButton from "../components/regularButton";
import SecondaryButton from "../components/secondaryButton";
import PrimaryButton from "../components/primaryButton";

import AccidentStatusCar from "../components/accidentStatusCar";
import ButtonYes from "../components/buttonYes";
import ButtonNo from "../components/buttonNo";
import TakePhoto from "../components/takePhoto";

export default function AccidentStatusPage() {
  const [clickYes, setClickYes] = useState(false);
  const [clickNo, setClickNo] = useState(false);
  const [isAccidentFree, setIsAccidentFree] = useState(null);
  const [currentClicked, setCurrentClicked] = useState(false);
  const [repairedClicked, setRepairedClicked] = useState(false);

  const handleClickYes = () => {
    if (clickYes) {
      setClickYes(false);
    } else {
      setClickNo(false);
      setIsAccidentFree(false);
      setClickYes(true);
    }
  };

  const handleClickNo = () => {
    if (clickNo) {
      setClickNo(false);
      setIsAccidentFree(false);
    } else {
      setClickYes(false);
      setClickNo(true);
      setIsAccidentFree(true);
    }
  };

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

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Accident Status
        </h2>
        <p className="font-montserrat font-medium">
          What is the Accident Status on the vehicle’s body?
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
          className="w-full mt-2 border-l-2 border-[#2154A2] ml-4 pl-4"
        >
          <div className="overflow-hidden">
            <AnimatePresence>
              {isAccidentFree && (
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
                      <div className="flex flex-col gap-1">
                        <p className="font-montserrat font-medium">Key</p>
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="yellow"
                            viewBox="0 0 20 20"
                            className="border rounded-full"
                          >
                            <circle cx="10" cy="10" r="10" />
                          </svg>

                          <p className="font-montserrat font-medium text-sm">
                            - Minor Damage
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="red"
                            viewBox="0 0 20 20"
                            className="border rounded-full"
                          >
                            <circle cx="10" cy="10" r="10" />
                          </svg>

                          <p className="font-montserrat font-medium text-sm">
                            - Significant Damage
                          </p>
                        </div>
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
