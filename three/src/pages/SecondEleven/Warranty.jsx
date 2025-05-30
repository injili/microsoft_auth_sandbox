import { Disclosure, DisclosurePanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, Fragment } from "react";

import SecondaryButton from "../../components/secondaryButton";
import PrimaryButton from "../../components/primaryButton";
import ButtonYes from "../../components/buttonYes";
import ButtonNo from "../../components/buttonNo";

export default function Warranty() {
  const [clickYes, setClickYes] = useState(false);
  const [clickNo, setClickNo] = useState(false);
  const [hasWarranty, setHasWarranty] = useState(null);

  const handleClickYes = () => {
    if (clickYes) {
      setClickYes(false);
      setHasWarranty(false);
    } else {
      setClickNo(false);
      setHasWarranty(true);
      setClickYes(true);
    }
  };

  const handleClickNo = () => {
    if (clickNo) {
      setClickNo(false);
    } else {
      setClickYes(false);
      setClickNo(true);
      setHasWarranty(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
        Warranty
      </h2>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <p className="font-montserrat font-medium">
          Does the vehicle have a warranty?
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
              {hasWarranty && (
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
                          When is the warranty valid until?
                        </p>
                        <select
                          type="text"
                          className="outline-none bg-white border-1 min-w-62 max-w-62 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
                        >
                          <option selected>Select</option>
                          <option value="">May 2025</option>
                          <option value="">June 2025</option>
                          <option value="">July 2025</option>
                          <option value="">August 2025</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-montserrat font-medium">
                          Maximum Mileage
                        </p>
                        <select
                          type="text"
                          className="outline-none bg-white border-1 min-w-62 max-w-62 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
                        >
                          <option selected>Select</option>
                          <option value="">5000</option>
                          <option value="">10,000</option>
                          <option value="">15,000</option>
                          <option value="">20,000</option>
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
            <SecondaryButton onClick={() => alert("Back to previous page")}>
              Back
            </SecondaryButton>
            <PrimaryButton onClick={() => alert("Next step")}>
              Save and Continue
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
