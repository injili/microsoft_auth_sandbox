import { Link } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import SecondaryButton from "../../components/secondaryButton";
export default function Transmission() {
  const types = [{ label: "Automatic" }, { label: "Manual" }];
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Transmission
        </h2>
        <p className="font-montserrat font-medium">
          What is the vehicle's transmission?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Transmission</p>
          <div className="flex items-center gap-4 flex-wrap max-w-9/12">
            {types.map((option, index) => (
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
        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            <Link to="/onlinefueltype">
              <SecondaryButton
                onClick={() => console.log("Back to previous page")}
              >
                Back
              </SecondaryButton>
            </Link>
            <Link to="/onlinedrive">
              <PrimaryButton onClick={() => console.log("Next step")}>
                Continue
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
