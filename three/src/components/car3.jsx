import { useState } from "react";
import { car } from "../assets/svgPaths/car";
export default function DiagramCar() {
  const [markers, setMarkers] = useState([]);
  const handleClick = (event) => {
    const svg = event.currentTarget;
    const rect = svg.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setMarkers((prev) => [...prev, { x, y }]);
    console.log(markers);
  };
  return (
    <div
      className="
    "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="581"
        height="326.667"
        onClick={handleClick}
      >
        <path d={car.d1} style={car.style1} />
        <path d={car.d2} style={car.style2} />
        <path d={car.d3} style={car.style3} />
        <path d={car.d4} style={car.style4} />
        <path d={car.d5} style={car.style5} />
        <path d={car.d6} style={car.style6} />
        <path d={car.d7} style={car.style7} />
        <path d={car.d8} style={car.style8} />
        {markers.map((marker, index) => (
          <circle
            key={index}
            cx={marker.x}
            cy={marker.y}
            r="4"
            fill="red"
            stroke="white"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
