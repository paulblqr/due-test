import React from "react";

function Icon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="heroicons-mini/arrow-up-right">
        <path
          id="Vector (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.2636 17.7364C6.61508 18.0879 7.18492 18.0879 7.5364 17.7364L16.2 9.07279V15.9C16.2 16.3971 16.6029 16.8 17.1 16.8C17.5971 16.8 18 16.3971 18 15.9V6.9C18 6.40294 17.5971 6 17.1 6H8.1C7.60294 6 7.2 6.40294 7.2 6.9C7.2 7.39706 7.60294 7.8 8.1 7.8H14.9272L6.2636 16.4636C5.91213 16.8151 5.91213 17.3849 6.2636 17.7364Z"
        />
      </g>
    </svg>
  );
}

export default Icon;
