import { useNavigate } from "react-router-dom";
import Select from "react-select";
import TertiaryButton from "../../components/tertiaryButton";
import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
import { useEffect, useState } from "react";

const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#fff",
    borderColor: "#2154A2",
    borderWidth: "1px",
    boxShadow: state.isFocused ? "0 0 0 2px rgba(33,84,162,0.2)" : "none",
    minHeight: "30px",
    width: "150px",
    borderRadius: "0.125rem",
    padding: "0 1px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#fff",
    borderRadius: "0.125rem",
    marginTop: "4px",
    zIndex: 100,
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected ? "#2154A2" : isFocused ? "#E0ECFF" : "#fff",
    color: isSelected ? "#fff" : "#000",
    padding: "10px 15px",
    fontFamily: "Montserrat, sans-serif",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#888",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
  }),
};

export default function FirstRegistration({
  carDetails,
  setCarDetails,
  onBack,
  onNext,
}) {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const years = Array.from({ length: 50 }, (_, i) => {
    const y = new Date().getFullYear() - i;
    return { value: y.toString(), label: y.toString() };
  });

  const handleSubmit = () => {
    console.log("function called");
    if (selectedMonth && selectedYear) {
      setCarDetails((prev) => ({
        ...prev,
        first_registration: `${selectedMonth.label} ${selectedYear.label}`,
      }));
      onNext();
    } else {
      setResponseMessage("Select Month and Year of first registration");
      return;
    }
  };

  useEffect(() => {
    if (carDetails.first_registration) {
      const [monthLabel, yearLabel] = carDetails.first_registration.split(" ");
      const foundMonth = months.find((m) => m.label === monthLabel);
      const foundYear = years.find((y) => y.label === yearLabel);

      if (foundMonth) setSelectedMonth(foundMonth);
      if (foundYear) setSelectedYear(foundYear);
    }
  }, [carDetails.first_registration]);

  return (
    <div className="flex flex-col gap-4 lg:max-w-5/8 min-w-7/8">
      <div className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-3xl text-[#2154A2]">
          First Registration
        </h2>
        <p className="font-montserrat font-medium">
          When was the First Registration done?
        </p>
      </div>
      <div className="bg-white rounded-sm p-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-medium">First Registration</p>

          {responseMessage && (
            <p className="text-sm text-red-500 font-montserrat font-semibold">
              * {responseMessage}
            </p>
          )}

          <div className="flex gap-2 min-w-96 max-w-96 ">
            <Select
              options={months}
              placeholder="Month"
              styles={customStyles}
              value={selectedMonth}
              onChange={(selectedMonth) => setSelectedMonth(selectedMonth)}
            />
            <Select
              options={years}
              placeholder="Year"
              styles={customStyles}
              value={selectedYear}
              onChange={(selectedYear) => setSelectedYear(selectedYear)}
            />
          </div>
        </div>
        <div className="w-full flex mt-4 justify-end">
          <div className="flex gap-4">
            {carDetails.customerPhoneNumber && (
              <TertiaryButton onClick={() => navigate("/onlinesummary")}>
                Go to Summary
              </TertiaryButton>
            )}
            <SecondaryButton onClick={() => onBack()}>Back</SecondaryButton>
            <PrimaryButton onClick={() => handleSubmit()}>
              Continue
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
