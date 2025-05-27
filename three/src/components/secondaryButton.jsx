export default function SecondaryButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="text-[#2154A2] font-poppins text-sm max-w-64 border border-2 border-[#2154A2] font-bold px-10 py-1.5 rounded-sm hover:border-[#2C6DD1] hover:text-[#2C6DD1] hover:shadow-lg transition-colors focus:outline-none focus:border focus:border-2 focus:rounded-sm focus:shadow-md"
    >
      {children}
    </button>
  );
}
