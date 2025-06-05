import { Link } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";

export default function AddressCustomerData({ onBack, onNext }) {
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          Address and Customer Data
        </h2>
        <p className="font-montserrat font-medium">
          What are the customer's details?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 flex flex-col gap-4 justify-center">
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">First Name</p>
            <input
              placeholder="Muster"
              type="text"
              className="outline-none  min-w-96 border-1 max-w-96 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">Last Name</p>
            <input
              placeholder="Mann"
              type="text"
              className="outline-none  min-w-96 border-1 max-w-96 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">Street</p>
            <input
              placeholder="Street Name"
              type="text"
              className="outline-none  min-w-96 border-1 max-w-96 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">House Number</p>
            <input
              placeholder="SA"
              type="text"
              className="outline-none  min-w-96 border-1 max-w-96 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">Postal Code</p>
            <input
              placeholder="10115"
              type="text"
              className="outline-none  min-w-96 border-1 max-w-96 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">City</p>
            <input
              placeholder="Berlin"
              type="text"
              className="outline-none  min-w-96 border-1 max-w-96 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">Phone Number</p>
            <input
              placeholder="+49 170 1234567"
              type="text"
              className="outline-none  min-w-96 border-1 max-w-96 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-medium">Email Address</p>
            <input
              placeholder="muster@example.com"
              type="text"
              className="outline-none  min-w-96 border-1 max-w-96 px-2 py-1.5 rounded-sm border-[#2154A2] focus-within:border-2 font-montserrat"
            ></input>
          </div>
        </div>

        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            <SecondaryButton onClick={onBack}>Back</SecondaryButton>
            <PrimaryButton onClick={onNext}>Save and Continue</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
