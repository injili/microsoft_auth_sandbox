import { useState, Fragment } from "react";
import { Disclosure, DisclosurePanel } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import SecondaryButton from "../../components/secondaryButton";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import ButtonYes from "../../components/buttonYes";
import ButtonNo from "../../components/buttonNo";

export default function InspectionData({ onBack, onNext }) {
  const [lastYes, setLastYes] = useState(false);
  const [lastNo, setLastNo] = useState(false);
  const [mileageYes, setMileageYes] = useState(false);
  const [mileageNo, setMileageNo] = useState(false);
  const [nextYes, setNextYes] = useState(false);
  const [nextNo, setNextNo] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const [isMileage, setIsMileage] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [selectLast, setSelectLast] = useState(null);

  const handleLast = (type) => {
    setSelectLast((prev) => (prev === type ? null : type));
  };

  const handleYesLast = () => {
    if (lastYes) {
      setLastYes(false);
    } else {
      setLastNo(false);
      setLastYes(true);
      setIsLast(false);
    }
  };

  const handleYesMileage = () => {
    if (mileageYes) {
      setMileageYes(false);
    } else {
      setMileageNo(false);
      setMileageYes(true);
      setIsMileage(false);
    }
  };

  const handleYesNext = () => {
    if (nextYes) {
      setNextYes(false);
    } else {
      setNextNo(false);
      setNextYes(true);
      setIsNext(false);
    }
  };

  const handleNoLast = () => {
    if (lastNo) {
      setLastNo(false);
      setIsLast(false);
    } else {
      setLastYes(false);
      setLastNo(true);
      setIsLast(true);
    }
  };

  const handleNoMileage = () => {
    if (mileageNo) {
      setMileageNo(false);
      setIsMileage(false);
    } else {
      setMileageYes(false);
      setMileageNo(true);
      setIsMileage(true);
    }
  };

  const handleNoNext = () => {
    if (nextNo) {
      setNextNo(false);
      setIsNext(false);
    } else {
      setNextYes(false);
      setNextNo(true);
      setIsNext(true);
    }
  };

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Inspection Data
        </h2>
        <p className="font-montserrat font-bold">
          Previously Recorded Data: Last Inspection:
          <span className="ml-4 text-lg text-primary">October 2024</span>
        </p>
      </div>

      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <p className="font-montserrat font-medium">
          Is the date of the last inspection correct?
        </p>
        <div className="flex py-2 gap-4">
          <ButtonYes onClick={handleYesLast} showIcon={lastYes} />
          <ButtonNo onClick={handleNoLast} showIcon={lastNo} />
        </div>
        <Disclosure
          as="div"
          className="w-full mt-2 border-l-2 border-[#2154A2] ml-4 pl-8"
        >
          <div className="overflow-hidden">
            <AnimatePresence>
              {isLast && (
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
                      <div className="flex flex-col gap-2">
                        <p className="font-montserrat font-medium">
                          Correct date of last inspection
                        </p>
                        <select
                          type="text"
                          className="outline-none bg-white border-1 min-w-96 max-w-96 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
                        >
                          <option selected>Select</option>
                          <option value="">Jan 2025</option>
                          <option value="">Feb 2025</option>
                          <option value="">March 2025</option>
                          <option value="">April 2025</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </Disclosure>
      </div>
      <p className="font-montserrat font-bold">
        Previously Recorded Data: Mileage at last inspection
        <span className="ml-4 text-lg text-primary">5,000 Km</span>
      </p>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <p className="font-montserrat font-medium">
          Does the mileage of previous lasts match the previously recorded data?
        </p>
        <div className="flex py-2 gap-4">
          <ButtonYes onClick={handleYesMileage} showIcon={mileageYes} />
          <ButtonNo onClick={handleNoMileage} showIcon={mileageNo} />
        </div>
        <Disclosure
          as="div"
          className="w-full mt-2 border-l-2 border-[#2154A2] ml-4 pl-8"
        >
          <div className="overflow-hidden">
            <AnimatePresence>
              {isMileage && (
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
                      <div className="flex flex-col gap-2">
                        <p className="font-montserrat font-medium">
                          Correct Mileage at Last Inspection
                        </p>
                        <select
                          type="text"
                          className="outline-none bg-white border-1 min-w-96 max-w-96 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
                        >
                          <option selected>Select</option>
                          <option value="">10,000</option>
                          <option value="">15,000</option>
                          <option value="">20,000</option>
                          <option value="">25,000</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </Disclosure>
      </div>
      <p className="font-montserrat font-bold">
        Previously Recorded Data: Next General Inspection
        <span className="ml-4 text-lg text-primary">August 2025</span>
      </p>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <p className="font-montserrat font-medium">
          Is the date of the next inspection correct?
        </p>
        <div className="flex py-2 gap-4">
          <ButtonYes onClick={handleYesNext} showIcon={nextYes} />
          <ButtonNo onClick={handleNoNext} showIcon={nextNo} />
        </div>
        <Disclosure
          as="div"
          className="w-full mt-2 border-l-2 border-[#2154A2] ml-4 pl-8"
        >
          <div className="overflow-hidden">
            <AnimatePresence>
              {isNext && (
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
                      <div className="flex flex-col gap-2">
                        <p className="font-montserrat font-medium">
                          Correct date of Next General Inspection
                        </p>
                        <select
                          type="text"
                          className="outline-none bg-white border-1 min-w-96 max-w-96 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
                        >
                          <option selected>Select</option>
                          <option value="">Jan 2025</option>
                          <option value="">Feb 2025</option>
                          <option value="">March 2025</option>
                          <option value="">April 2025</option>
                        </select>
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
