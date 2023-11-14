import React from "react";

function Icon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 159 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60.1623 29.8991L80.4119 23.2447L98.0853 29.8991L119.369 27.0092L140.265 29.8991L158.065 38.156V46H0.957794V1L19.1436 13.7982L40.4269 16.2752L60.1623 29.8991Z"
        fill="url(#paint0_linear_2_6190)"
      />
      <path
        d="M157.023 38.156L139.461 29.8991L118.846 27.0092L97.8478 29.8991L80.4115 23.2447L60.4337 29.8991L40.9631 16.2752L19.9653 13.7982L2.0235 1"
        stroke="#FA5252"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_6190"
          x1="79.5116"
          y1="1"
          x2="79.5117"
          y2="41.7811"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA5252" stopOpacity="0.2" />
          <stop offset="1" stopColor="#FA5252" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;
