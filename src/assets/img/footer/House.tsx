import React from "react";

const House: React.FC<{ lit: boolean }> = ({ lit }) => {
  const style = { "mix-blend-mode": "hard-light" } as React.CSSProperties;

  return (
    <svg viewBox="0 0 245 222" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.6739 222H234.196L236.26 157.431H244.78L215.684 90.3718H180.771V59.0787L164.477 62.3998V90.3718H101.434V53.2132C114.194 54.0433 128.062 50.157 133.611 48.0121L123.332 45.3174L130.929 37.2333C124.628 40.4829 109.636 40.892 101.434 40.6653V27.9942C108.914 26.4257 121.808 25.032 137.338 30.0789C138.403 5.47943 137.338 4.14911 137.338 4.14911C133.639 3.74567 130.541 3.38334 127.902 3.07469C119.675 2.11241 115.908 1.6718 112.255 2.13313C109.324 2.50334 106.465 3.45437 101.434 5.18275V5.04241H96.9655V92.3598L83.8274 114.625L50.3501 113.239L50.3522 113.242L50.3488 113.241L1.94727 165.101H6.08162C9.54479 165.101 12.8952 164.087 15.7434 162.235L19.6739 222Z"
        fill="#8F7E78"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.6739 222H234.196L236.26 157.431H244.78L215.684 90.3718H180.771V59.0787L164.477 62.3998V90.3718H101.434V53.2132C114.194 54.0433 128.062 50.157 133.611 48.0121L123.332 45.3174L130.929 37.2333C124.628 40.4829 109.636 40.892 101.434 40.6653V27.9942C108.914 26.4257 121.808 25.032 137.338 30.0789C138.403 5.47943 137.338 4.14911 137.338 4.14911C133.639 3.74567 130.541 3.38334 127.902 3.07469C119.675 2.11241 115.908 1.6718 112.255 2.13313C109.324 2.50334 106.465 3.45437 101.434 5.18275V5.04241H96.9655V92.3598L83.8274 114.625L50.3501 113.239L50.3522 113.242L50.3488 113.241L1.94727 165.101H6.08162C9.54479 165.101 12.8952 164.087 15.7434 162.235L19.6739 222Z"
        fill="url(#paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M110.995 1.04424C115.82 0.434984 120.844 1.39902 136.078 3.06025C136.078 3.06025 137.143 4.39056 136.078 28.9901C119.228 23.5142 105.481 25.6203 98.3863 27.3052L99.2801 4.40133C104.875 2.47732 107.894 1.43582 110.995 1.04424ZM98.3857 39.5117C105.983 39.8485 122.876 39.6464 129.669 36.1433L122.071 44.2274L132.35 46.922C126.54 49.1676 111.614 53.3219 98.3857 51.9745V39.5117Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M95.7041 92.9199V3.9541H100.173V92.9199H95.7041Z"
        fill="#8A7771"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M79.4174 222H232.899L234.998 156.345H243.518L214.422 89.2852H179.509V57.9922L163.215 61.3132V89.2852H96.8766L57.3066 156.345H79.4174V222Z"
        fill="url(#paint2_linear)"
      />
      <path
        d="M184.551 202.84H156.881V185.067V172.439H185.714L184.551 202.84Z"
        fill="#8A7771"
      />
      <path
        d="M196.577 202.84L195.413 172.439H224.121V200.604L196.577 202.84Z"
        fill="#8A7771"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4832 221.999H150.912L149.639 160.881H87.0733L49.0868 120.198L14.2285 157.305L18.4832 221.999Z"
        fill="url(#paint3_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86.9121 222H147.116L149.478 160.919H86.9121V222Z"
        fill="#E1D6C4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.0871 112.152L0.685547 164.012H5.56583C10.1379 164.012 14.4931 162.062 17.5387 158.652L49.0871 123.329L79.6991 157.733C83.253 161.727 88.3444 164.012 93.6907 164.012H95.5647L49.0871 112.152Z"
        fill="#EC8387"
      />
      <path
        d="M103.916 200.41L102.575 176.716L139.668 177.61L138.774 200.41H103.916Z"
        fill="url(#paint4_linear)"
      />
      <path
        d="M103.916 200.41L102.575 176.716L139.668 177.61L138.774 200.41H103.916Z"
        fill="#8F7E78"
      />
      <path
        d="M113.888 114.834L49.0879 112.151L95.5655 164.011H158.132L113.888 114.834Z"
        fill="url(#paint5_linear)"
      />
      <path
        d="M45.4773 149.853C40.5613 150.943 36.8469 155.229 36.625 160.42H45.4773V149.853Z"
        fill="#8F7E78"
      />
      <path
        d="M36.8829 163.375C37.8312 167.655 41.1993 171.024 45.4773 171.972V163.375H36.8829Z"
        fill="#8F7E78"
      />
      <path
        d="M48.4313 172.23C53.6195 172.007 57.9033 168.292 58.993 163.375H48.4313V172.23Z"
        fill="#8F7E78"
      />
      <path
        d="M59.2509 160.42L48.4313 160.42V149.596C54.293 149.847 59.0002 154.556 59.2509 160.42Z"
        fill="#8F7E78"
      />
      <g style={style}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.643 222H234.196L236.26 157.431H244.781L215.685 90.3718H215.06L214.581 89.2673H180.771V59.0787L179.667 59.3038V57.9742L163.374 61.2953V89.2673H101.435V53.2132C114.195 54.0433 128.062 50.157 133.611 48.012L131.216 47.384C131.685 47.218 132.117 47.0585 132.507 46.9076L123.947 44.6634L130.93 37.2333C129.994 37.7161 128.866 38.1362 127.597 38.5008L129.826 36.1289C123.798 39.2375 109.816 39.7467 101.435 39.5865V27.9942C108.915 26.4257 121.808 25.032 137.339 30.0789C138.403 5.47941 137.339 4.1491 137.339 4.1491C137.036 4.11609 136.738 4.08336 136.443 4.05091C136.335 3.16956 136.235 3.04462 136.235 3.04462C132.535 2.64118 129.437 2.27885 126.799 1.97019C118.572 1.00792 114.805 0.567308 111.152 1.02864C108.22 1.39885 105.362 2.34988 100.331 4.07826V3.93792H95.862V91.2553L82.7239 113.521L49.2466 112.135L49.2487 112.137L49.2453 112.137L0.84375 163.996H2.97865L1.94782 165.101H6.08218C9.15098 165.101 12.1313 164.305 14.752 162.835L18.643 222Z"
          fill="#304159"
        />
      </g>
      {lit && (
        <>
          <path
            d="M184.344 202.699H156.674V184.927V172.299H185.507L184.344 202.699Z"
            fill="white"
          />
          <path
            d="M196.37 202.699L195.206 172.299H223.914V200.464L196.37 202.699Z"
            fill="white"
          />
          <path
            d="M103.915 200.411L102.574 176.717L139.667 177.611L138.773 200.411H103.915Z"
            fill="url(#paint6_linear)"
          />
          <path
            d="M103.915 200.411L102.574 176.717L139.667 177.611L138.773 200.411H103.915Z"
            fill="white"
          />
        </>
      )}
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="123.336"
          y1="1.94922"
          x2="123.336"
          y2="241.129"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC8387" />
          <stop offset="1" stopColor="#1E5983" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="115.257"
          y1="0.522931"
          x2="115.368"
          y2="52.2377"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC8387" />
          <stop offset="1" stopColor="#CF425C" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="225.681"
          y1="266.814"
          x2="230.608"
          y2="-14.4065"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.049905" stopColor="#8A7771" />
          <stop offset="1" stopColor="#F8F0E1" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="75.0266"
          y1="91.9731"
          x2="53.8412"
          y2="401.264"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.268597" stopColor="#F7EFE0" />
          <stop offset="1" stopColor="#8A7771" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="120.606"
          y1="166.041"
          x2="120.606"
          y2="261.236"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8D9EB" />
          <stop offset="1" stopColor="#1E5983" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="103.828"
          y1="88.993"
          x2="103.828"
          y2="163.739"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC8387" />
          <stop offset="1" stopColor="#CF425C" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="120.605"
          y1="166.042"
          x2="120.605"
          y2="261.237"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8D9EB" />
          <stop offset="1" stopColor="#1E5983" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default House;
