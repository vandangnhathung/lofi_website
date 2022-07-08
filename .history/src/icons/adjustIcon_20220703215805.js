import React from "react";

const AdjustIcon = ({ openControlAdjust }) => {
  return (
    <div className="-rotate-90 text-[#feffdf] ">
      {openControlAdjust ? (
        <svg
          width="75"
          height="121"
          viewBox="0 0 75 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_153_4603)">
            <path
              d="M5 13.5V2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5V118.5C0 119.881 1.11929 121 2.5 121C3.88071 121 5 119.881 5 118.5V117C5 105.954 13.9543 97 25 97H40C59.33 97 75 81.33 75 62V27H18.5C11.0442 27 5 20.9558 5 13.5Z"
              fill="#070707"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_153_4603"
              x="-50"
              y="-50"
              width="175"
              height="221"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="25" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_153_4603"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_153_4603"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      )}
    </div>
  );
};

export default AdjustIcon;
