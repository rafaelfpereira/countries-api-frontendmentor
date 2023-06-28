import React from "react";
const DEFAULT_ICON_SIZE = 24;

const Icon = ({ name, width = DEFAULT_ICON_SIZE }) => {
  switch (name) {
    case "magnifying-glass":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width={width}
          height={width}
          x="0"
          y="0"
          viewBox="0 0 32 32"
          style={{ fill: "var(--primary-text-color)" }}
        >
          <g>
            <path
              d="m27.414 24.586-5.077-5.077A9.932 9.932 0 0 0 24 14c0-5.514-4.486-10-10-10S4 8.486 4 14s4.486 10 10 10a9.932 9.932 0 0 0 5.509-1.663l5.077 5.077a2 2 0 1 0 2.828-2.828zM7 14c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7z"
              data-original="#000000"
            ></path>
          </g>
        </svg>
      );
    case "moon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width={width}
          height={width}
          x="0"
          y="0"
          viewBox="0 0 48 48"
          style={{ fill: "var(--primary-text-color)" }}
        >
          <g>
            <path
              d="M25.52 3.84a1 1 0 0 0 .42-1.13A1 1 0 0 0 25 2a22 22 0 1 0 19.89 32 1 1 0 0 0-1.41-1.31 17 17 0 0 1-18-28.87z"
              data-original="#000000"
            ></path>
          </g>
        </svg>
      );

    case "sun":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width={width}
          height={width}
          x="0"
          y="0"
          viewBox="0 0 24 24"
          style={{ fill: "var(--primary-text-color)" }}
        >
          <g>
            <path
              d="M12 6a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4zM12 5a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zM12 19a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM5 12a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zM22 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM5.636 7.05A1 1 0 0 0 7.05 5.636L5.636 4.222a1 1 0 0 0-1.414 1.414zM18.364 16.95a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414zM17.657 7.343a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 0 0-1.414-1.414L16.95 5.636a1 1 0 0 0 .707 1.707zM5.636 16.95l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414z"
              data-original="#000000"
            ></path>
          </g>
        </svg>
      );
    default:
      break;
  }
};

export default Icon;
