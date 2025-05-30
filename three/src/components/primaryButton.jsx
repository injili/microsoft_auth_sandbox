export default function PrimaryButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#2154A2] text-white font-poppins text-sm max-w-96 text-bold px-16 py-2 rounded-sm hover:bg-[#2C6DD1] hover:shadow-xl transition-colors focus:outline-none focus:border focus:border-2 focus:rounded-sm focus:border-white focus:shadow-md"
    >
      {children}
    </button>
  );
}
