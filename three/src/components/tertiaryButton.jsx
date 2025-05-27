export default function TertiaryButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#2154A2]/25 font-poppins text-[#2154A2] max-w-64 text-sm font-bold px-10 py-1.5 rounded-sm hover:bg-[#2154A2]/50 hover:shadow-lg transition-colors focus:outline-none focus:border focus:border-2 focus:rounded-sm focus:border-[#2154A2] focus:shadow-md"
    >
      {children}
    </button>
  );
}
