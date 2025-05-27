export default function RegularButton({ onClick, showIcon, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex font-poppins items-center gap-2 justify-center text-[#2154A2] text-sm max-w-96  ${
        showIcon ? "border-2 font-bold" : "border font-semibold"
      } border-[#2154A2]  px-10 py-1.5 rounded-sm hover:border-[#2C6DD1] hover:text-[#2C6DD1] hover:shadow-lg transition-colors focus:outline-none focus:border focus:border-2 focus:rounded-sm focus:shadow-md`}
    >
      {showIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#2154A2"
          viewBox="0 0 26 26"
          class="w-6 h-6 pt-1"
        >
          <path d="M8.491 18.277.366 10.152a1.25 1.25 0 0 1 0-1.768l1.768-1.768a1.25 1.25 0 0 1 1.768 0l5.473 5.473L21.098.366a1.25 1.25 0 0 1 1.768 0l1.768 1.768a1.25 1.25 0 0 1 0 1.768L10.259 18.277a1.25 1.25 0 0 1-1.768 0Z" />
        </svg>
      )}
      {children}
    </button>
  );
}
