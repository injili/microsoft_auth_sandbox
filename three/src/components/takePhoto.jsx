import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

export default function TakePhoto() {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [image, setImage] = useState(null);

  const toggleCamera = () => {
    if (isCameraOn) {
      setIsCameraOn(false);
      setImage(null);
    } else {
      setIsCameraOn(true);
      // If you want to reset the image when the camera is turned on
      setImage(null);
    }
  };

  const capture = () => {
    const screenshot = webcamRef.current.getScreenshot();
    setImage(screenshot);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <button
        onClick={toggleCamera}
        className={`flex font-poppins items-center gap-2 justify-center text-[#2154A2] text-sm max-w-96 border border-[#2154A2]  px-10 py-1.5 rounded-sm hover:border-[#2C6DD1] hover:text-[#2C6DD1] hover:shadow-lg transition-colors focus:outline-none focus:border focus:border-2 focus:rounded-sm focus:shadow-md`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#2154A2"
          viewBox="0 0 26 26"
          class="w-6 h-6 pt-1"
        >
          <path d="M25 5.469V19.53a2.344 2.344 0 0 1-2.344 2.344H2.344A2.344 2.344 0 0 1 0 19.531V5.47a2.344 2.344 0 0 1 2.344-2.344H6.64l.6-1.606A2.34 2.34 0 0 1 9.434 0h6.128c.976 0 1.85.605 2.192 1.519l.605 1.606h4.297A2.344 2.344 0 0 1 25 5.469ZM18.36 12.5a5.864 5.864 0 0 0-5.86-5.86 5.864 5.864 0 0 0-5.86 5.86 5.864 5.864 0 0 0 5.86 5.86 5.864 5.864 0 0 0 5.86-5.86Zm-1.563 0a4.303 4.303 0 0 1-4.297 4.297A4.303 4.303 0 0 1 8.203 12.5 4.303 4.303 0 0 1 12.5 8.203a4.303 4.303 0 0 1 4.297 4.297Z" />
        </svg>
        {isCameraOn ? "Turn Camera Off" : "Take Photo"}
      </button>
      {isCameraOn && (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="rounded-sm max-w-sm"
            videoConstraints={{ facingMode: "user" }}
          />
          <button
            onClick={capture}
            className="bg-[#2154A2] text-white font-poppins text-sm max-w-64 text-bold px-10 py-2 rounded-sm hover:bg-[#2C6DD1] hover:shadow-xl transition-colors focus:outline-none focus:border focus:border-2 focus:rounded-sm focus:border-white focus:shadow-md"
          >
            Capture
          </button>

          {image && (
            <img
              src={image}
              alt="Captured"
              className="mt-4 rounded shadow-md max-w-sm"
            />
          )}
        </>
      )}
    </div>
  );
}
