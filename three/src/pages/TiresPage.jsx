import RegularButton from "../components/regularButton";
import { Disclosure, DisclosurePanel } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import { Fragment, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import TireThreadDepthCar from "../components/tireTreadDepthCar";
import YesCheckbox from "../components/yesCheckbox";
import NoCheckbox from "../components/noCheckbox";
import ProgressBar from "../components/progressBar";
import ButtonYes from "../components/buttonYes";
import ButtonNo from "../components/buttonNo";
import PrimaryButton from "../components/primaryButton";
import SecondaryButton from "../components/secondaryButton";

export default function TiresPage() {
  const [summerTires, setSummerTires] = useState(false);
  const [winterTires, setWinterTires] = useState(false);
  const [allSeasonTires, setAllSeasonTires] = useState(false);
  const [alloyRims, setAlloyRims] = useState(false);
  const [steelRims, setSteelRims] = useState(false);
  const [aftermarketRims, setAftermarketRims] = useState(false);
  const [originalRims, setOriginalRims] = useState(false);
  const [abeUnknown, setAbeUnknown] = useState(false);
  const [abeInCar, setAbeInCar] = useState(false);
  const [rimStatus, setRimStatus] = useState(false);
  const [secondWheels, setSecondWheels] = useState(false);
  const [clickYes, setClickYes] = useState(false);
  const [clickNo, setClickNo] = useState(false);

  const handleClickYes = () => {
    if (clickYes) {
      setClickYes(false);
      setSecondWheels(false);
    } else {
      setClickNo(false);
      setSecondWheels(true);
      setClickYes(true);
    }
  };

  const handleClickNo = () => {
    if (clickNo) {
      setClickNo(false);
    } else {
      setClickYes(false);
      setClickNo(true);
      setSecondWheels(false);
    }
  };

  const rimOptions = [
    { label: '13"' },
    { label: '14"' },
    { label: '15"' },
    { label: '16"' },
    { label: '17"' },
    { label: '18"' },
    { label: '19"' },
    { label: '20"' },
    { label: '21"' },
    { label: '22"' },
  ];

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
      <div className="bg-white rounded-sm p-8 flex flex-col gap-4 justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Type of Tires</p>
          <div className="flex items-center gap-4">
            <RegularButton
              onClick={() => {
                !summerTires ? setSummerTires(true) : setSummerTires(false);
              }}
              showIcon={summerTires}
            >
              Summer Tires
            </RegularButton>
            <RegularButton
              onClick={() => {
                !winterTires ? setWinterTires(true) : setWinterTires(false);
              }}
              showIcon={winterTires}
            >
              Winter Tires
            </RegularButton>
            <RegularButton
              onClick={() => {
                !allSeasonTires
                  ? setAllSeasonTires(true)
                  : setAllSeasonTires(false);
              }}
              showIcon={allSeasonTires}
            >
              All-season Tires
            </RegularButton>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Type of Rims</p>
          <div className="flex items-center gap-4">
            <RegularButton
              onClick={() => {
                !alloyRims ? setAlloyRims(true) : setAlloyRims(false);
              }}
              showIcon={alloyRims}
            >
              Alloy Rims
            </RegularButton>
            <RegularButton
              onClick={() => {
                !steelRims ? setSteelRims(true) : setSteelRims(false);
              }}
              showIcon={steelRims}
            >
              Steel Rims
            </RegularButton>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Rim Size</p>
          <div className="flex items-center gap-4 flex-wrap max-w-9/12">
            {rimOptions.map((option, index) => (
              <RegularButton
                key={index}
                onClick={() => {
                  console.log(`Selected rim size: ${option.label}`);
                }}
                showIcon={false}
              >
                {option.label}
              </RegularButton>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Rim Status</p>
          <div className="flex items-center gap-4">
            <RegularButton
              onClick={() => {
                !aftermarketRims
                  ? setAftermarketRims(true)
                  : setAftermarketRims(false);
                setRimStatus(true);
              }}
              showIcon={aftermarketRims}
            >
              Aftermarket
            </RegularButton>
            <RegularButton
              onClick={() => {
                !originalRims ? setOriginalRims(true) : setOriginalRims(false);
              }}
              showIcon={originalRims}
            >
              Original
            </RegularButton>
          </div>
        </div>
        <Disclosure
          as="div"
          className="w-full border-l-2 border-[#2154A2] ml-4 pl-8"
        >
          <div className="overflow-hidden">
            <AnimatePresence>
              {rimStatus && (
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
                        Where did the ABE go?
                      </p>
                      <div className="flex items-center gap-4">
                        <RegularButton
                          onClick={() => {
                            !abeUnknown
                              ? setAbeUnknown(true)
                              : setAbeUnknown(false);
                          }}
                          showIcon={abeUnknown}
                        >
                          Unknown
                        </RegularButton>
                        <RegularButton
                          onClick={() => {
                            !abeInCar ? setAbeInCar(true) : setAbeInCar(false);
                          }}
                          showIcon={abeInCar}
                        >
                          In The Car
                        </RegularButton>
                      </div>
                    </div>
                    <div className="flex pt-4 gap-4 flex-col items-center justify-center">
                      <p className="font-montserrat font-medium">
                        Tire Tread Depth
                      </p>
                      <TireThreadDepthCar />
                    </div>
                  </motion.div>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </Disclosure>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">
            Is a second set of wheels present?
          </p>
          <div className="flex items-center gap-4">
            <ButtonYes onClick={handleClickYes} showIcon={clickYes} />
            <ButtonNo onClick={handleClickNo} showIcon={clickNo} />
          </div>
        </div>
        <Disclosure
          as="div"
          className="w-full mt-2 border-l-2 border-[#2154A2] ml-4 pl-8"
        >
          <div className="overflow-hidden">
            <AnimatePresence>
              {secondWheels && (
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
                    className="origin-top flex flex-col gap-4"
                  >
                    <div className="flex flex-col gap-2">
                      <p className="font-montserrat font-medium">
                        What is the tyre's configuration?
                      </p>
                      <div className="flex items-center gap-4">
                        <RegularButton
                          onClick={() => {
                            !aftermarketRims
                              ? setAftermarketRims(true)
                              : setAftermarketRims(false);
                            setRimStatus(true);
                          }}
                          showIcon={aftermarketRims}
                        >
                          Tires Only
                        </RegularButton>
                        <RegularButton
                          onClick={() => {
                            !originalRims
                              ? setOriginalRims(true)
                              : setOriginalRims(false);
                          }}
                          showIcon={originalRims}
                        >
                          Tires on Steel Rims
                        </RegularButton>
                        <RegularButton
                          onClick={() => {
                            !originalRims
                              ? setOriginalRims(true)
                              : setOriginalRims(false);
                          }}
                          showIcon={originalRims}
                        >
                          Tires on Alloy Rims
                        </RegularButton>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-montserrat font-medium">Rim Size</p>
                      <div className="flex items-center gap-4 flex-wrap max-w-9/12">
                        {rimOptions.map((option, index) => (
                          <RegularButton
                            key={index}
                            onClick={() => {
                              console.log(`Selected rim size: ${option.label}`);
                            }}
                            showIcon={false}
                          >
                            {option.label}
                          </RegularButton>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-montserrat font-medium">Rim Status</p>
                      <div className="flex items-center gap-4">
                        <RegularButton
                          onClick={() => {
                            !aftermarketRims
                              ? setAftermarketRims(true)
                              : setAftermarketRims(false);
                            setRimStatus(true);
                          }}
                          showIcon={aftermarketRims}
                        >
                          Aftermarket
                        </RegularButton>
                        <RegularButton
                          onClick={() => {
                            !originalRims
                              ? setOriginalRims(true)
                              : setOriginalRims(false);
                          }}
                          showIcon={originalRims}
                        >
                          Original
                        </RegularButton>
                      </div>
                    </div>
                    <Disclosure
                      as="div"
                      className="w-full mt-2 border-l-2 border-[#2154A2] ml-4 pl-8"
                    >
                      <div className="overflow-hidden">
                        <AnimatePresence>
                          {secondWheels && (
                            <DisclosurePanel static as={Fragment}>
                              <motion.div
                                initial={{ opacity: 0, y: -40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{
                                  opacity: { duration: 0.5, ease: "easeOut" },
                                  y: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 30,
                                  },
                                  default: {
                                    duration: 0.1,
                                    ease: "easeOut",
                                  },
                                }}
                                className="origin-top flex flex-col gap-4"
                              >
                                <div className="flex flex-col gap-2">
                                  <p className="font-montserrat font-medium">
                                    Where did the ABE go?
                                  </p>
                                  <div className="flex items-center gap-4">
                                    <RegularButton
                                      onClick={() => {
                                        !abeUnknown
                                          ? setAbeUnknown(true)
                                          : setAbeUnknown(false);
                                      }}
                                      showIcon={abeUnknown}
                                    >
                                      Unknown
                                    </RegularButton>
                                    <RegularButton
                                      onClick={() => {
                                        !abeInCar
                                          ? setAbeInCar(true)
                                          : setAbeInCar(false);
                                      }}
                                      showIcon={abeInCar}
                                    >
                                      In The Car
                                    </RegularButton>
                                  </div>
                                </div>
                              </motion.div>
                            </DisclosurePanel>
                          )}
                        </AnimatePresence>
                      </div>
                    </Disclosure>
                    <div className="flex py-4 gap-2 flex-col">
                      <p className="font-montserrat font-medium">
                        Tire Tread Depth
                      </p>
                      <select
                        type="text"
                        className="outline-none bg-white border-1 min-w-42 max-w-42 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
                      >
                        <option selected>Select</option>
                        <option value="">0 mm</option>
                        <option value="">0.5 mm</option>
                        <option value="">1 mm</option>
                        <option value="">1.5 mm</option>
                      </select>
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
      <ProgressBar progress={36} />
    </div>
  );
}
