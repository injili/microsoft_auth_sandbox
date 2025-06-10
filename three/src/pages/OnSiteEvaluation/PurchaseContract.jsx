import SecondaryButton from "../../components/secondaryButton";
import PrimaryButton from "../../components/primaryButton";

export default function PurchaseContract({ onBack, onNext }) {
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
        Purchase Contract
      </h2>
      <div className="flex  gap-4 flex-col bg-white rounded-sm p-8 justify-center">
        <p className="font-montserrat font-medium">
          Discrepancies were found during the evaluation. A new purchase
          contract is required.
        </p>

        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            <SecondaryButton onClick={onBack}>Back</SecondaryButton>
            <PrimaryButton onClick={onNext}>
              Prepare New Purchase Contract
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
