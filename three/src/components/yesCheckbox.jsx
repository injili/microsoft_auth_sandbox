export default function YesCheckbox({ onClick }) {
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
              class="w-11 h-11 py-2 px-1"
            >
              <path d="M8.491 18.277.366 10.152a1.25 1.25 0 0 1 0-1.768l1.768-1.768a1.25 1.25 0 0 1 1.768 0l5.473 5.473L21.098.366a1.25 1.25 0 0 1 1.768 0l1.768 1.768a1.25 1.25 0 0 1 0 1.768L10.259 18.277a1.25 1.25 0 0 1-1.768 0Z" />
            </svg>
          </span>
        </label>
      </div>
      <p className="font-poppins font-semibold text-[#2154A2]">Yes</p>
    </div>
  );
}
