import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadFile() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      <div
        className={`flex font-poppins items-center gap-2 justify-center text-[#2154A2] text-sm max-w-96 border border-[#2154A2]  px-4 py-1 rounded-sm hover:border-[#2C6DD1] hover:text-[#2C6DD1] hover:shadow-lg transition-colors focus:outline-none focus:border focus:border-2 focus:rounded-sm focus:shadow-md`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 19 19"
          class="w-6 h-6 pt-1"
        >
          <path d="M2.467 14.094c-.617 0-1.21-.255-1.682-.728a2.703 2.703 0 0 1 0-3.809L8.95.886c1.275-1.276 3.226-1.162 4.65.265.638.639.996 1.56.983 2.53-.013.958-.388 1.875-1.028 2.516l-6.171 6.57a.454.454 0 0 1-.643.02.457.457 0 0 1-.02-.645l6.181-6.58c.484-.485.761-1.172.771-1.895.01-.723-.25-1.406-.716-1.871C12.084.92 10.661.46 9.604 1.522l-8.165 8.67a1.79 1.79 0 0 0-.01 2.53c.325.325.711.483 1.122.458.406-.025.824-.233 1.176-.586l6.497-6.915c.235-.236.709-.814.227-1.297-.273-.274-.464-.256-.527-.251-.18.016-.39.14-.609.36l-4.89 5.2a.456.456 0 0 1-.662-.625l4.898-5.21c.385-.388.78-.598 1.18-.634.313-.027.778.04 1.253.515.704.706.617 1.74-.217 2.577L4.38 13.229c-.519.52-1.145.822-1.774.86a2.01 2.01 0 0 1-.139.005" />
        </svg>
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <>
            <p>Drop image(s) here ...</p>
            <button className="bg-[#2154A2]/25 font-montserrat text-[#2154A2] max-w-64 text-sm font-semibold px-2 py-1 hover:bg-[#2154A2]/50 transition-colors">
              Browse
            </button>
          </>
        )}
      </div>
    </div>
  );
}
