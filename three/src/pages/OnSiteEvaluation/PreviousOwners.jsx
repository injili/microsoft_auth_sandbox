import { useState, Fragment } from "react";
import { Disclosure, DisclosurePanel } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import SecondaryButton from "../../components/secondaryButton";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import ButtonYes from "../../components/buttonYes";
import ButtonNo from "../../components/buttonNo";

export default function PreviousOwners({ onBack, onNext }) {
  const [ownerYes, setOwnerYes] = useState(false);
  const [ownerNo, setOwnerNo] = useState(false);
  const [numberYes, setNumberYes] = useState(false);
  const [numberNo, setNumberNo] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [selectOwner, setSelectOwner] = useState(null);

  const handleOwner = (type) => {
    setSelectOwner((prev) => (prev === type ? null : type));
  };

  const handleYesOwner = () => {
    if (ownerYes) {
      setOwnerYes(false);
    } else {
      setOwnerNo(false);
      setOwnerYes(true);
      setIsOwner(false);
    }
  };

  const handleYesNumber = () => {
    if (numberYes) {
      setNumberYes(false);
    } else {
      setNumberNo(false);
      setNumberYes(true);
      setIsNumber(false);
    }
  };

  const handleNoOwner = () => {
    if (ownerNo) {
      setOwnerNo(false);
      setIsOwner(false);
    } else {
      setOwnerYes(false);
      setOwnerNo(true);
      setIsOwner(true);
    }
  };

  const handleNoNumber = () => {
    if (numberNo) {
      setNumberNo(false);
      setIsNumber(false);
    } else {
      setNumberYes(false);
      setNumberNo(true);
      setIsNumber(true);
    }
  };

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Previous Owners
        </h2>
        <p className="font-montserrat font-bold">
          Previously Recorded Data: Type of previous owner
          <span className="ml-4 text-lg text-primary">Private Individual</span>
        </p>
      </div>

      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <p className="font-montserrat font-medium">
          Does the type of previous owner match the previously recorded data?
        </p>
        <div className="flex py-2 gap-4">
          <ButtonYes onClick={handleYesOwner} showIcon={ownerYes} />
          <ButtonNo onClick={handleNoOwner} showIcon={ownerNo} />
        </div>
        <Disclosure
          as="div"
          className="w-full mt-2 border-l-2 border-[#2154A2] ml-4 pl-8"
        >
          <div className="overflow-hidden">
            <AnimatePresence>
              {isOwner && (
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
                        Does the type match the previously recorded data?
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <RegularButton
                          onClick={() => handleOwner("private")}
                          showIcon={selectOwner === "private"}
                        >
                          Private
                        </RegularButton>

                        <RegularButton
                          onClick={() => handleOwner("commercial")}
                          showIcon={selectOwner === "commercial"}
                        >
                          Commercial
                        </RegularButton>

                        <RegularButton
                          onClick={() => handleOwner("rental")}
                          showIcon={selectOwner === "rental"}
                        >
                          Rental
                        </RegularButton>

                        <RegularButton
                          onClick={() => handleOwner("drivingschool")}
                          showIcon={selectOwner === "drivingschool"}
                        >
                          Driving School
                        </RegularButton>
                        <RegularButton
                          onClick={() => handleOwner("taxi")}
                          showIcon={selectOwner === "taxi"}
                        >
                          Taxi
                        </RegularButton>
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
        Previously Recorded Data: Number of previous owners
        <span className="ml-4 text-lg text-primary">1 Owner</span>
      </p>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <p className="font-montserrat font-medium">
          Does the number of previous owners match the previously recorded data?
        </p>
        <div className="flex py-2 gap-4">
          <ButtonYes onClick={handleYesNumber} showIcon={numberYes} />
          <ButtonNo onClick={handleNoNumber} showIcon={numberNo} />
        </div>
        <Disclosure
          as="div"
          className="w-full mt-2 border-l-2 border-[#2154A2] ml-4 pl-8"
        >
          <div className="overflow-hidden">
            <AnimatePresence>
              {isNumber && (
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
                          What is the correct number of the Previous Owner?
                        </p>
                        <select
                          type="text"
                          className="outline-none bg-white border-1 min-w-96 max-w-96 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
                        >
                          <option selected>Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
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
