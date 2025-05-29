import { useState, Fragment } from "react";
import ButtonYes from "../components/buttonYes";
import ButtonNo from "../components/buttonNo";
import RegularButton from "../components/regularButton";
import ProgressBar from "../components/progressBar";
import PaintDepthCar from "../components/paintDepthCar";
import { Disclosure, DisclosurePanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import SecondaryButton from "../components/secondaryButton";
import PrimaryButton from "../components/primaryButton";
import TakePhoto from "../components/takePhoto";
import DentsScuffsDamagesCar from "../components/dentsScuffsDamagesCar";

export default function DentsScuffsDamagesPage() {
  const [clickYes, setClickYes] = useState(false);
  const [clickNo, setClickNo] = useState(false);
  const [isDamaged, setIsDamaged] = useState(null);

  const handleClickYes = () => {
    if (clickYes) {
      setClickYes(false);
      setIsDamaged(false);
    } else {
      setClickYes(true);
      setClickNo(false);
      setIsDamaged(true);
    }
  };

  const handleClickNo = () => {
    if (clickNo) {
      setClickNo(false);
    } else {
      setClickYes(false);
      setClickNo(true);
      setIsDamaged(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
        Dents, Scuffs and Damages
      </h2>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <p className="font-montserrat font-medium">
          Does the vehicle have dents, scuffs or damages?
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
              {isDamaged && (
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
                    <div className="flex flex-col gap-1">
                      <p className="font-montserrat font-medium">
                        Mark the damaged areas on the diagram below by tapping
                        the damaged sections till they are all recorded.
                      </p>
                      <DentsScuffsDamagesCar />
                      <div className="flex flex-col gap-2">
                        <p className="font-montserrat font-bold">Key</p>
                        <div className="flex items-center gap-2">
                          <svg
                            viewBox="0 0 20 20"
                            width="15"
                            height="15"
                            fill="blue"
                          >
                            <path d="M12.688.479 8.142 5.013 3.596.479a1.431 1.431 0 0 0-2.02 0L.566 1.486a1.423 1.423 0 0 0 0 2.015l4.546 4.535L.566 12.57a1.423 1.423 0 0 0 0 2.015l1.01 1.008a1.431 1.431 0 0 0 2.02 0l4.546-4.535 4.546 4.535a1.431 1.431 0 0 0 2.02 0l1.01-1.008a1.423 1.423 0 0 0 0-2.015l-4.545-4.534L15.718 3.5a1.423 1.423 0 0 0 0-2.015L14.708.48a1.431 1.431 0 0 0-2.02 0Z" />
                          </svg>

                          <p className="font-montserrat font-medium text-sm">
                            - Scratch
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            viewBox="0 0 20 20"
                            width="15"
                            height="15"
                            fill="red"
                          >
                            <path d="M12.688.479 8.142 5.013 3.596.479a1.431 1.431 0 0 0-2.02 0L.566 1.486a1.423 1.423 0 0 0 0 2.015l4.546 4.535L.566 12.57a1.423 1.423 0 0 0 0 2.015l1.01 1.008a1.431 1.431 0 0 0 2.02 0l4.546-4.535 4.546 4.535a1.431 1.431 0 0 0 2.02 0l1.01-1.008a1.423 1.423 0 0 0 0-2.015l-4.545-4.534L15.718 3.5a1.423 1.423 0 0 0 0-2.015L14.708.48a1.431 1.431 0 0 0-2.02 0Z" />
                          </svg>

                          <p className="font-montserrat font-medium text-sm">
                            - Dent
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            viewBox="0 0 20 20"
                            width="15"
                            height="15"
                            fill="yellow"
                          >
                            <path d="M12.688.479 8.142 5.013 3.596.479a1.431 1.431 0 0 0-2.02 0L.566 1.486a1.423 1.423 0 0 0 0 2.015l4.546 4.535L.566 12.57a1.423 1.423 0 0 0 0 2.015l1.01 1.008a1.431 1.431 0 0 0 2.02 0l4.546-4.535 4.546 4.535a1.431 1.431 0 0 0 2.02 0l1.01-1.008a1.423 1.423 0 0 0 0-2.015l-4.545-4.534L15.718 3.5a1.423 1.423 0 0 0 0-2.015L14.708.48a1.431 1.431 0 0 0-2.02 0Z" />
                          </svg>

                          <p className="font-montserrat font-medium text-sm">
                            - Scuff
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

      <ProgressBar progress={18} />
    </div>
  );
}
