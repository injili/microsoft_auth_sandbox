import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
import RegularButton from "../../components/regularButton";
import { Link } from "react-router-dom";

export default function InspectionData() {
  const types = [
    { label: "Brand Specific Workshop" },
    { label: "Independent Workshop" },
  ];
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Inspection Data
        </h2>
        <p className="font-montserrat font-medium">
          When was the Vehicle last inspected and when will it be inspected
          next?
        </p>
      </div>
      <div className="bg-white flex flex-col gap-4 rounded-sm p-8 justify-center">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">Last Inspection</p>
            <select
              type="text"
              className="outline-none bg-white border-1 min-w-62 max-w-62 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
            >
              <option selected>Select</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">
              Mileage at last inspection
            </p>
            <select
              type="text"
              className="outline-none bg-white border-1 min-w-62 max-w-62 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
            >
              <option selected>Select</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">Next Inspection</p>
            <select
              type="text"
              className="outline-none bg-white border-1 min-w-62 max-w-62 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
            >
              <option selected>Select</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Place of inspection</p>
          <div className="flex flex-wrap gap-4">
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
            <Link to="/onlineadditionalequipment">
              <SecondaryButton
                onClick={() => console.log("Back to previous page")}
              >
                Back
              </SecondaryButton>
            </Link>
            <Link to="/onlinewarranty">
              <PrimaryButton onClick={() => console.log("Next step")}>
                Save and Continue
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
