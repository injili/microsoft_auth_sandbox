export default function ProgressBar({ progress }) {
  return (
    <div className="w-full flex flex-col gap-1 my-6 lg:max-w-5/8 min-w-7/8">
      <div className="text-black text-sm ">{progress}% Complete</div>
      <div className="w-full bg-[#2154A2]/30 rounded-sm h-2">
        <div
          className="bg-[#2154A2] h-2 rounded-sm transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
