import { Link } from "react-router-dom";
import SecondaryButton from "../../components/secondaryButton";
import PrimaryButton from "../../components/primaryButton";

export default function IncompleteFormPage() {
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Fill Out Form
        </h2>
        <p className="font-montserrat font-bold">
          The following fields could not be extracted.
        </p>
      </div>
      <div className="flex flex-wrap items-start gap-8 bg-white rounded-sm p-8">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Milage</p>
          <div className=" flex items-center gap-2 border-1 min-w-56 max-w-56 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat">
            <input
              type="text"
              className="outline-none w-full bg-transparent"
            ></input>
            <p className="px-2 font-montserrat text-lg font-medium">Km</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Transmission</p>
          <select
            type="text"
            className="outline-none bg-white border-1 min-w-56 max-w-56 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
          >
            <option selected>Select</option>
            <option value="">Manual</option>
            <option value="">Automatic</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Drive</p>
          <select
            type="text"
            className="outline-none bg-white border-1 min-w-56 max-w-56 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
          >
            <option selected>Select</option>
            <option value="">Front-wheel</option>
            <option value="">Rear-wheel</option>
            <option value="">All-wheel</option>
            <option value="">Four-wheel</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Color</p>
          <select
            type="text"
            className="outline-none bg-white border-1 min-w-56 max-w-56 px-2 p-2 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
          >
            <option selected>Select</option>
            <option value="">Black</option>
            <option value="">White</option>
            <option value="">Gray</option>
            <option value="">Red</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">Price as Advertised</p>
          <div className=" flex items-center gap-2 border-1 min-w-56 max-w-56 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat">
            <input
              type="text"
              className="outline-none w-full bg-transparent"
            ></input>
            <p className="px-2 font-montserrat text-lg font-medium">€</p>
          </div>
        </div>

        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            <Link to="/">
              <SecondaryButton
                onClick={() => console.log("Back to previous page")}
              >
                Back
              </SecondaryButton>
            </Link>
            <Link to="/onlinesummary">
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
