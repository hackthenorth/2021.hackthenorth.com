import React from "react";

const Boat: React.FC<{ expression: string }> = ({ expression }) => {
  const happyFace = (
    <>
      <path
        d="M71.2866 83.7129C71.2866 85.1577 70.0422 86.3289 68.5071 86.3289C66.972 86.3289 65.7275 85.1577 65.7275 83.7129"
        stroke="black"
        strokeWidth="2"
      />
      <circle
        r="1.63503"
        transform="matrix(-1 0 0 1 52.6482 79.135)"
        fill="black"
      />
      <circle
        r="1.63503"
        transform="matrix(-1 0 0 1 84.3669 79.135)"
        fill="black"
      />
    </>
  );
  const sadFace = (
    <>
      <path
        d="M65.727 86.3291C65.727 84.8843 66.9715 83.7131 68.5066 83.7131C70.0417 83.7131 71.2861 84.8843 71.2861 86.3291"
        stroke="black"
        strokeWidth="2"
      />
      <circle
        r="1.63503"
        transform="matrix(-1 0 0 1 52.6472 79.135)"
        fill="black"
      />
      <circle
        r="1.63503"
        transform="matrix(-1 0 0 1 84.3664 79.135)"
        fill="black"
      />
    </>
  );
  const suaveFace = (
    <>
      <path
        d="M74 84C74 85.1046 72.433 86 70.5 86C68.567 86 67 85.1046 67 84"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M49 79.5C49 78.0552 51.9649 77.5 53.5 77.5C55.0351 77.5 56.5591 78.1714 56.5591 79.6162"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M81 79C81 77.5552 83.9649 77 85.5 77C87.0351 77 88.5591 77.6714 88.5591 79.1162"
        stroke="black"
        strokeWidth="2"
      />
      <circle
        r="1.63503"
        transform="matrix(-1 0 0 1 55.6472 79.135)"
        fill="black"
      />
      <circle
        r="1.63503"
        transform="matrix(-1 0 0 1 87.3664 79.135)"
        fill="black"
      />
    </>
  );

  return (
    <svg viewBox="0 0 138 109" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36.7891 77.3706L0 59.7118L46.5995 58.2402L36.7891 77.3706Z"
        fill="url(#boatpaint0_linear)"
      />
      <path
        d="M105.462 76.8805L89.7656 57.7502L137.346 55.7881L105.462 76.8805Z"
        fill="url(#boatpaint1_linear)"
      />
      <path
        d="M68.6261 85.6925L68.7969 18.3125L106.982 72.8486L76.1565 90.1967L68.6261 85.6925Z"
        fill="url(#boatpaint2_linear)"
      />
      <path
        d="M68.8221 17.6582L19.293 75.1729L68.8221 92.1001V17.6582Z"
        fill="url(#boatpaint3_linear)"
      />
      <path
        d="M68.1824 18.1357L18.6533 75.6504L68.1824 92.5776V18.1357Z"
        fill="url(#boatpaint4_linear)"
      />
      <path
        d="M16.1988 100.269L0.654297 60.4964L64.9049 69.6986L138 56.5723L123.456 96.6424L67.4957 108.042L16.1988 100.269Z"
        fill="url(#boatpaint5_linear)"
      />
      <path
        d="M15.5445 99.6152L0 59.8421L64.2506 69.0443L137.346 55.918L122.802 95.9881L66.8414 107.387L15.5445 99.6152Z"
        fill="url(#boatpaint6_linear)"
      />
      <path
        d="M68.0154 1.60466L68.1762 18.8351C82.9789 10.5195 100.173 7.83048 106.919 7.52545C88.2551 0.689601 75.4265 1.18638 68.0154 1.60466Z"
        fill="url(#boatpaint7_linear)"
      />
      <path
        d="M68.0154 0.950365L68.1762 18.1808C82.9789 9.86516 100.173 7.17619 106.919 6.87115C88.2551 0.0353038 75.4265 0.532086 68.0154 0.950365Z"
        fill="url(#boatpaint8_linear)"
      />
      {(expression == "happy" && happyFace) ||
        (expression == "sad" && sadFace) ||
        (expression == "suave" && suaveFace)}
      <defs>
        <linearGradient
          id="boatpaint0_linear"
          x1="23.2998"
          y1="58.2402"
          x2="23.2998"
          y2="77.3706"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CF425C" />
          <stop offset="1" stopColor="#3D789F" />
        </linearGradient>
        <linearGradient
          id="boatpaint1_linear"
          x1="113.556"
          y1="55.7881"
          x2="113.556"
          y2="76.8805"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CF425C" />
          <stop offset="1" stopColor="#3D789F" />
        </linearGradient>
        <linearGradient
          id="boatpaint2_linear"
          x1="91.1226"
          y1="2.74951"
          x2="80.0258"
          y2="149.647"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7EFE0" />
          <stop offset="0.0001" stopColor="#EC8387" />
          <stop offset="1" stopColor="#CF425C" />
        </linearGradient>
        <linearGradient
          id="boatpaint3_linear"
          x1="58.3701"
          y1="-3.92413"
          x2="59.3511"
          y2="153.202"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC8387" />
          <stop offset="0.557327" stopColor="#CF425C" />
        </linearGradient>
        <linearGradient
          id="boatpaint4_linear"
          x1="68.3437"
          y1="61.6408"
          x2="4.41423"
          y2="-4.41419"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC8387" />
          <stop offset="1" stopColor="#F7EFE0" />
        </linearGradient>
        <linearGradient
          id="boatpaint5_linear"
          x1="69.3254"
          y1="26.2904"
          x2="69.3254"
          y2="94.6345"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7EFE0" />
          <stop offset="1" stopColor="#EC8387" />
        </linearGradient>
        <linearGradient
          id="boatpaint6_linear"
          x1="-84.2038"
          y1="76.3558"
          x2="194.405"
          y2="76.0288"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7EFE0" />
          <stop offset="0.743124" stopColor="#EC8387" />
          <stop offset="1" stopColor="#CF425C" />
        </linearGradient>
        <linearGradient
          id="boatpaint7_linear"
          x1="58.6973"
          y1="18.4761"
          x2="122.627"
          y2="17.8221"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D789F" />
        </linearGradient>
        <linearGradient
          id="boatpaint8_linear"
          x1="58.6973"
          y1="17.8218"
          x2="122.627"
          y2="17.1678"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43AFDE" />
          <stop offset="1" stopColor="#3D789F" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Boat;
