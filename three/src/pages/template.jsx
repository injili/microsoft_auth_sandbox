export default function PasteLink() {
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Use Link
        </h2>
        <p className="font-montserrat font-medium">
          What is the Accident Status on the vehicle’s body?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
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
      </div>
    </div>
  );
}
