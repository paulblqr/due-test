import React from "react";

function Icon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 18 19"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 1.5v16m8-8H1"
      ></path>
    </svg>
  );
}

export default Icon;
