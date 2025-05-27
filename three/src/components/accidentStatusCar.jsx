import { accidentCar } from "../assets/svgPaths/accidentStatusSvg";
import { useState } from "react";

export default function AccidentStatusCar() {
  const [activePaths, setActivePaths] = useState([]);
  const handlePathClick = (pathId) => {
    setActivePaths((prev) =>
      prev.includes(pathId)
        ? prev.filter((id) => id !== pathId)
        : [...prev, pathId]
    );
  };

  const paths = Object.entries(accidentCar).map(([key, pathData], index) => {
    const isTogglable = index < 13;
    const isActive = activePaths.includes(key);
    return (
      <path
        key={key}
        d={pathData}
        fill={isTogglable ? (isActive ? "red" : "transparent") : "#304A6E"}
        onClick={() => isTogglable && handlePathClick(key)}
        className={isTogglable ? "cursor-pointer" : ""}
      />
    );
  });

  return (
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="574"
          height="327"
          fill="none"
        >
          <g>{paths}</g>
        </svg>
      </div>
    </div>
  );
}
