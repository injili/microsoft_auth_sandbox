import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
export default function Model() {
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Model
        </h2>
        <p className="font-montserrat font-medium">
          What is the vehicle's model?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Model</p>
          <select
            type="text"
            className="outline-none bg-white border-1 min-w-96 max-w-96 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
          >
            <option selected>Select</option>
            <option value="">Panamera</option>
            <option value="">Cayman</option>
            <option value="">Macan</option>
            <option value="">911 Turbo S</option>
          </select>
        </div>
        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            <SecondaryButton onClick={() => alert("Back to previous page")}>
              Back
            </SecondaryButton>
            <PrimaryButton onClick={() => alert("Next step")}>
              Continue
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
