import { useState, Fragment } from "react";
import { Disclosure, DisclosurePanel } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import SecondaryButton from "../../components/secondaryButton";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import ButtonYes from "../../components/buttonYes";
import ButtonNo from "../../components/buttonNo";

export default function Tires({ onBack, onNext }) {
  const [clickYes, setClickYes] = useState(false);
  const [clickNo, setClickNo] = useState(false);
  const [manualClick, setManualClick] = useState(false);
  const [autoClick, setAutoClick] = useState(false);
  const [isFalse, setIsFalse] = useState(false);

  const handleManual = () => {
    if (manualClick) {
      setManualClick(false);
    } else {
      setManualClick(true);
      setAutoClick(false);
    }
  };

  const handleAuto = () => {
    if (autoClick) {
      setAutoClick(false);
    } else {
      setAutoClick(true);
      setManualClick(false);
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
          Tires
        </h2>
        <p className="font-montserrat font-bold">
          Do the tire details (including the second set of wheels) match the
          recorded data?
        </p>
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-sm p-8 justify-center">
        <div>
          <p className="font-montserrat font-medium">
            Previously Recorded:
            <span className="ml-4 font-montserrat font-bold">
              Type Of Tires:
              <span className="ml-2 text-lg text-primary">Summer Tires</span>
            </span>
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
                          What is the actual transmission of the vehicle?
                        </p>
                        <div className="flex gap-4">
                          <RegularButton
                            onClick={handleManual}
                            showIcon={manualClick}
                          >
                            Manual
                          </RegularButton>
                          <RegularButton
                            onClick={handleAuto}
                            showIcon={autoClick}
                          >
                            Automatic
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
        <div>
          <p className="font-montserrat font-medium">
            Previously Recorded:
            <span className="ml-4 font-montserrat font-bold">
              Rim Type:
              <span className="ml-2 text-lg text-primary">Steel rims</span>
            </span>
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
                          What is the actual transmission of the vehicle?
                        </p>
                        <div className="flex gap-4">
                          <RegularButton
                            onClick={handleManual}
                            showIcon={manualClick}
                          >
                            Manual
                          </RegularButton>
                          <RegularButton
                            onClick={handleAuto}
                            showIcon={autoClick}
                          >
                            Automatic
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
        <div>
          <p className="font-montserrat font-medium">
            Previously Recorded:
            <span className="ml-4 font-montserrat font-bold">
              Rim Size:
              <span className="ml-2 text-lg text-primary">13</span>
            </span>
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
                          What is the actual transmission of the vehicle?
                        </p>
                        <div className="flex gap-4">
                          <RegularButton
                            onClick={handleManual}
                            showIcon={manualClick}
                          >
                            Manual
                          </RegularButton>
                          <RegularButton
                            onClick={handleAuto}
                            showIcon={autoClick}
                          >
                            Automatic
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
        <div>
          <p className="font-montserrat font-medium">
            Previously Recorded:
            <span className="ml-4 font-montserrat font-bold">
              Rim Status:
              <span className="ml-2 text-lg text-primary">Original</span>
            </span>
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
                          What is the actual transmission of the vehicle?
                        </p>
                        <div className="flex gap-4">
                          <RegularButton
                            onClick={handleManual}
                            showIcon={manualClick}
                          >
                            Manual
                          </RegularButton>
                          <RegularButton
                            onClick={handleAuto}
                            showIcon={autoClick}
                          >
                            Automatic
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
        <div>
          <p className="font-montserrat font-medium">
            Previously Recorded:
            <span className="ml-4 font-montserrat font-bold">
              Tire Thread Depth:
              <span className="ml-2 text-lg text-primary">all 4.5 mm</span>
            </span>
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
                          What is the actual transmission of the vehicle?
                        </p>
                        <div className="flex gap-4">
                          <RegularButton
                            onClick={handleManual}
                            showIcon={manualClick}
                          >
                            Manual
                          </RegularButton>
                          <RegularButton
                            onClick={handleAuto}
                            showIcon={autoClick}
                          >
                            Automatic
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
        <div>
          <p className="font-montserrat font-medium">
            Previously Recorded:
            <span className="ml-4 font-montserrat font-bold">
              Second Set of Wheels:
              <span className="ml-2 text-lg text-primary">No</span>
            </span>
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
                          What is the actual transmission of the vehicle?
                        </p>
                        <div className="flex gap-4">
                          <RegularButton
                            onClick={handleManual}
                            showIcon={manualClick}
                          >
                            Manual
                          </RegularButton>
                          <RegularButton
                            onClick={handleAuto}
                            showIcon={autoClick}
                          >
                            Automatic
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
