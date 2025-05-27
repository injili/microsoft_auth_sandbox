export default function NoCheckbox({ onClick }) {
  return (
    <div class="flex gap-2 items-center">
      <div class="inline-flex items-center">
        <label class="relative flex items-center cursor-pointer">
          <input
            onClick={onClick}
            type="checkbox"
            class="peer relative h-10 w-10 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-[#2154A2] checked:bg-white checked:border-[#2154A2]"
            id="check-custom-icon"
          />
          <span class="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#2154A2"
              class="w-10 h-10 py-2 px-2"
            >
              <path d="m11.852 8.594 4.886-4.886c.6-.6.6-1.572 0-2.172L15.652.45c-.6-.6-1.572-.6-2.172 0L8.594 5.336 3.708.45c-.6-.6-1.572-.6-2.172 0L.45 1.536c-.6.6-.6 1.571 0 2.172l4.886 4.886L.45 13.48c-.6.6-.6 1.572 0 2.172l1.086 1.086c.6.6 1.572.6 2.172 0l4.886-4.886 4.886 4.886c.6.6 1.572.6 2.172 0l1.086-1.086c.6-.6.6-1.572 0-2.172l-4.886-4.886Z" />
            </svg>
          </span>
        </label>
      </div>
      <p className="font-poppins font-semibold text-[#2154A2]">No</p>
    </div>
  );
}
