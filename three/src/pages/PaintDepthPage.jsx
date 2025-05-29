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

export default function PaintDepthPage() {
  const [clickYes, setClickYes] = useState(false);
  const [clickNo, setClickNo] = useState(false);
  const [isRepainted, setIsRepainted] = useState(null);

  const handleClickYes = () => {
    if (clickYes) {
      setClickYes(false);
      setIsRepainted(false);
    } else {
      setClickYes(true);
      setClickNo(false);
      setIsRepainted(true);
    }
  };

  const handleClickNo = () => {
    if (clickNo) {
      setClickNo(false);
    } else {
      setClickYes(false);
      setClickNo(true);
      setIsRepainted(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
        Paint Inspection
      </h2>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <p className="font-montserrat font-medium">
          Does the vehicle have repainted parts?
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
              {isRepainted && (
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
                        Record the paint depth of the vehicle here.
                      </p>
                      <PaintDepthCar />
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

      <ProgressBar progress={4} />
    </div>
  );
}
