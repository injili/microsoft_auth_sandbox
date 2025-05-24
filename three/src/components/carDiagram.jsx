import { useState } from "react";

// svg importation
import { svgPaths } from "../assets/svgPaths/paths";

export default function CarDiagram() {
  const [markers, setMarkers] = useState({});

  const handleClick = (event, id) => {
    const svg = event.currentTarget.closest("svg");
    const rect = svg.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setMarkers((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), { x, y }],
    }));
  };

  return (
    <div>
      <svg style={{ display: "none" }}>
        <symbol id="custom-marker" viewBox="0 0 17 16">
          <path d="M12.688.479 8.142 5.013 3.596.479a1.431 1.431 0 0 0-2.02 0L.566 1.486a1.423 1.423 0 0 0 0 2.015l4.546 4.535L.566 12.57a1.423 1.423 0 0 0 0 2.015l1.01 1.008a1.431 1.431 0 0 0 2.02 0l4.546-4.535 4.546 4.535a1.431 1.431 0 0 0 2.02 0l1.01-1.008a1.423 1.423 0 0 0 0-2.015l-4.545-4.534L15.718 3.5a1.423 1.423 0 0 0 0-2.015L14.708.48a1.431 1.431 0 0 0-2.02 0Z" />
        </symbol>
      </svg>
      <svg
        width="432"
        height="243"
        viewBox="0 0 432 243"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {svgPaths.map(({ id, clipPathBox, path }) => (
          <g key={id} onClick={(event) => handleClick(event, id)}>
            {/* <defs>
              <clipPath id={id} clipPathUnits="userSpaceOnUse">
                <path
                  d={clipPathBox.d}
                  style={{ fill: "#000", strokeWidth: 0.816016 }}
                />
              </clipPath>
            </defs> */}
            <path
              d={path.d}
              clipPath={`url(#${id})`}
              style={{ fill: "#304a6e", stroke: "none", strokeWidth: 1.743574 }}
              transform={path.transform}
            />
            {(markers[id] || []).map((marker, index) => (
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
        ))}
      </svg>
    </div>
  );
}
