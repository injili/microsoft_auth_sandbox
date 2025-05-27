import { useState, useRef } from "react";
import { car } from "../assets/svgPaths/dentsScuffsDamagesSvg";

export default function DentsScuffsDamagesCar() {
  const [markers, setMarkers] = useState([]);
  const svgRef = useRef(null);
  const markerRadius = 10.5;

  const isNearExistingMarker = (x, y) => {
    return markers.some((marker) => {
      const dx = marker.x - x;
      const dy = marker.y - y;
      return Math.sqrt(dx * dx + dy * dy) < markerRadius;
    });
  };

  const handleClick = (event) => {
    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (isNearExistingMarker(x, y)) {
      return;
    }

    setMarkers((prev) => [...prev, { x, y }]);
  };

  return (
    <div className="p-4">
      <svg style={{ display: "none" }}>
        <symbol id="custom-marker" viewBox="0 0 17 16">
          <path d="M12.688.479 8.142 5.013 3.596.479a1.431 1.431 0 0 0-2.02 0L.566 1.486a1.423 1.423 0 0 0 0 2.015l4.546 4.535L.566 12.57a1.423 1.423 0 0 0 0 2.015l1.01 1.008a1.431 1.431 0 0 0 2.02 0l4.546-4.535 4.546 4.535a1.431 1.431 0 0 0 2.02 0l1.01-1.008a1.423 1.423 0 0 0 0-2.015l-4.545-4.534L15.718 3.5a1.423 1.423 0 0 0 0-2.015L14.708.48a1.431 1.431 0 0 0-2.02 0Z" />
        </symbol>
      </svg>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="446"
        height="243"
        fill="none"
        style={{ cursor: "crosshair" }}
      >
        <path fill={car.fill2} d={car.d2} />
        <g onClick={handleClick}>
          <path fill="transparent" d={car.d1} />
          {markers.map((marker, index) => (
            <use
              href="#custom-marker"
              key={index}
              x={marker.x - 8.5}
              y={marker.y - 8}
              fill="red"
              width="17"
              height="16"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
