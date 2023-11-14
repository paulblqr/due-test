import React from "react";

function Icon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 138 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M85.9877 29.8991L68.2204 23.2447L52.7133 29.8991L34.039 27.0092L15.7041 29.8991L0.0855713 38.156V46H137.935V1L121.978 13.7982L103.304 16.2752L85.9877 29.8991Z"
        fill="url(#paint0_linear_2_3219)"
      />
      <path
        d="M1.00024 38.156L16.4092 29.8991L34.4981 27.0092L52.9219 29.8991L68.2208 23.2447L85.7498 29.8991L102.834 16.2752L121.257 13.7982L137 1"
        stroke="#00B548"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_3219"
          x1="69.0102"
          y1="1"
          x2="69.0102"
          y2="41.7811"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00B548" stopOpacity="0.2" />
          <stop offset="1" stopColor="#00B548" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;
