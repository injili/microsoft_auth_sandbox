import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
import RegularButton from "../../components/regularButton";

export default function PreviousOwners() {
  const types = [
    { label: "Private" },
    { label: "Commercial" },
    { label: "Rental" },
    { label: "Driving School" },
    { label: "Taxi" },
  ];
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Previous Owners
        </h2>
        <p className="font-montserrat font-medium">
          What is the number and type of previous owners?
        </p>
      </div>
      <div className="bg-white flex flex-col gap-4 rounded-sm p-8 justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Previous Owners</p>
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
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Type of Previous Owners</p>
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
