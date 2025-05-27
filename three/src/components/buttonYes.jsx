export default function ButtonYes({ onClick, showIcon }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onClick}
        className={`h-10 w-10  flex justify-center items-center ${
          showIcon ? "border-2" : "border"
        } rounded-sm border-[#2154A2] hover:bg-[#2154A2]/10 hover:shadow-lg transition-colors focus:outline-none focus:border focus:border-2 focus:rounded-sm focus:border-[#2154A2] focus:shadow-md`}
      >
        {showIcon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 26 26"
            className="w-6 h-6 pt-1"
          >
            <path
              fill="#2154A2"
              d="M8.491 18.277.366 10.152a1.25 1.25 0 0 1 0-1.768l1.768-1.768a1.25 1.25 0 0 1 1.768 0l5.473 5.473L21.098.366a1.25 1.25 0 0 1 1.768 0l1.768 1.768a1.25 1.25 0 0 1 0 1.768L10.259 18.277a1.25 1.25 0 0 1-1.768 0Z"
            />
          </svg>
        )}
      </button>
      <p className="font-poppins font-semibold text-[#2154A2]">Yes</p>
    </div>
  );
}
