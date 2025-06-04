import { Link } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton";
import RegularButton from "../../components/regularButton";
import SecondaryButton from "../../components/secondaryButton";
export default function AdditionalEquipment() {
  const types = [
    { label: "Trailer Hitch" },
    { label: "Partition" },
    { label: "Roof Rack" },
    { label: "Bike Rack" },
  ];
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
        Additional Equipment
      </h2>

      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">
            What additional equipment does the vehicle have?
          </p>
          <div className="flex items-center gap-4 flex-wrap max-w-10/12">
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
            <Link to="/onlinetires">
              <SecondaryButton
                onClick={() => console.log("Back to previous page")}
              >
                Back
              </SecondaryButton>
            </Link>
            <Link to="/onlineinspectiondata">
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
