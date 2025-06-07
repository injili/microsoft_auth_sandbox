import SecondaryButton from "../../components/secondaryButton";
import PrimaryButton from "../../components/primaryButton";
import TakePhoto from "../../components/takePhoto";
import UploadFile from "../../components/uploadFile";

export default function RegistrationDocument({ onNext, onBack }) {
  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
        Registration Document
      </h2>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <p className="font-montserrat font-medium">
          Upload or take a photo of the registration document for evaluation
          here...
        </p>
        <div className="flex items-center py-2 gap-4">
          <UploadFile />
          <TakePhoto />
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
