import PrimaryButton from "../components/primaryButton";

export default function PasteLink() {
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
        Use Link
      </h2>
      <div className="flex flex-col gap-2 bg-white rounded-sm p-8">
        <p className="font-montserrat font-medium">
          Paste the link to the vehicle here.
        </p>
        <input
          type="text"
          placeholder="eg. https://suchen.mobile.de/fahrzeuge/details..."
          className="outline-none w-full border-1 w-full px-2 py-1.5 rounded-sm border-[#2154A2] focus:border-2 font-montserrat"
        ></input>
        <p className="font-montserrat mt-2 font-medium">
          or{" "}
          <span className="text-primary underline text-lg">
            Manually Fill Form
          </span>
        </p>
        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            <PrimaryButton onClick={() => alert("Next step")}>
              Continue
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
