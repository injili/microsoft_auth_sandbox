import { useState, Fragment } from "react";
import { Disclosure, DisclosurePanel } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import SecondaryButton from "../../components/secondaryButton";
import PrimaryButton from "../../components/primaryButton";
import ButtonYes from "../../components/buttonYes";
import ButtonNo from "../../components/buttonNo";

export default function Warranty({ onBack, onNext }) {
  const [dateYes, setDateYes] = useState(false);
  const [dateNo, setDateNo] = useState(false);
  const [mileageYes, setMileageYes] = useState(false);
  const [mileageNo, setMileageNo] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const [isMileage, setIsMileage] = useState(false);
  const [selectDate, setSelectDate] = useState(null);

  const handleYesDate = () => {
    if (dateYes) {
      setDateYes(false);
    } else {
      setDateNo(false);
      setDateYes(true);
      setIsDate(false);
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

  const handleNoDate = () => {
    if (dateNo) {
      setDateNo(false);
      setIsDate(false);
    } else {
      setDateYes(false);
      setDateNo(true);
      setIsDate(true);
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

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Warranty
        </h2>
        <p className="font-montserrat font-bold">
          Previously Recorded Data: Warranty Valid Until:
          <span className="ml-4 text-lg text-primary">October 2025</span>
        </p>
      </div>

      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <p className="font-montserrat font-medium">
          Does the warranty Valid date match the previously recorded details?
        </p>
        <div className="flex py-2 gap-4">
          <ButtonYes onClick={handleYesDate} showIcon={dateYes} />
          <ButtonNo onClick={handleNoDate} showIcon={dateNo} />
        </div>
        <Disclosure
          as="div"
          className="w-full mt-2 border-l-2 border-[#2154A2] ml-4 pl-8"
        >
          <div className="overflow-hidden">
            <AnimatePresence>
              {isDate && (
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
                        Correct date until which the warranty is valid
                      </p>
                      <select
                        type="text"
                        className="outline-none bg-white border-1 min-w-96 max-w-96 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
                      >
                        <option selected>Select</option>
                        <option value="">December 2025</option>
                        <option value="">November 2025</option>
                        <option value="">October 2025</option>
                        <option value="">September 2025</option>
                      </select>
                    </div>
                  </motion.div>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </Disclosure>
      </div>
      <p className="font-montserrat font-bold">
        Previously Recorded Data: Maximum Mileage:
        <span className="ml-4 text-lg text-primary">10,000 Km</span>
      </p>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <p className="font-montserrat font-medium">
          Does the warranty Maximum Mileage match the previously recorded
          details?
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
                          Correct Mileage until which the warranty is valid
                        </p>
                        <select
                          type="text"
                          className="outline-none bg-white border-1 min-w-96 max-w-96 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
                        >
                          <option selected>Select</option>
                          <option value="">5,000 Km</option>
                          <option value="">15,000 Km</option>
                          <option value="">20,000 Km</option>
                          <option value="">25,000 Km</option>
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
