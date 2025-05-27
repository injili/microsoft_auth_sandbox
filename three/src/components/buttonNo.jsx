export default function ButtonNo({ onClick, showIcon }) {
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={onClick}
        className={`h-10 w-10 p-2 flex justify-center items-center ${
          showIcon ? "border-2" : "border"
        } rounded-sm border-[#2154A2] hover:bg-[#2154A2]/10 hover:shadow-lg transition-colors focus:outline-none focus:border focus:border-2 focus:rounded-sm focus:border-[#2154A2] focus:shadow-md`}
      >
        {showIcon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
            className="w-4 h-4 "
          >
            <path
              fill="#2154A2"
              d="m11.852 8.594 4.886-4.886c.6-.6.6-1.572 0-2.172L15.652.45c-.6-.6-1.572-.6-2.172 0L8.594 5.336 3.708.45c-.6-.6-1.572-.6-2.172 0L.45 1.536c-.6.6-.6 1.571 0 2.172l4.886 4.886L.45 13.48c-.6.6-.6 1.572 0 2.172l1.086 1.086c.6.6 1.572.6 2.172 0l4.886-4.886 4.886 4.886c.6.6 1.572.6 2.172 0l1.086-1.086c.6-.6.6-1.572 0-2.172l-4.886-4.886Z"
            />
          </svg>
        )}
      </button>
      <p className="font-poppins font-semibold text-[#2154A2]">No</p>
    </div>
  );
}
