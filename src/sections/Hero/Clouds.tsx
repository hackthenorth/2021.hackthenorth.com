import React from "react";
import { Cloud1, Cloud2, Cloud3 } from "src/assets/img";

type CloudProps = {
  src: string;
  animationTime: number; // in seconds
  top: number; // left offset for abs positioning
  left: number; // top offset for abs positioning
};

const clouds: CloudProps[] = [
  {
    src: Cloud1,
    animationTime: 36,
    top: 70,
    left: 50,
  },
  {
    src: Cloud1,
    animationTime: 60,
    top: 90,
    left: 0,
  },
  {
    src: Cloud2,
    animationTime: 40,
    top: 140,
    left: -1000,
  },
  {
    src: Cloud3,
    animationTime: 30,
    top: 180,
    left: 500,
  },
];

const Clouds: React.FC = () => {
  return (
    <div tw="pointer-events-none">
      {clouds.map((cloud, i) => {
        const Cloud = cloud.src;
        return (
          <div
            key={`cloud_${i}`}
            style={{
              position: "absolute",
              animation: `moveclouds ${cloud.animationTime}s linear infinite`,
              top: cloud.top,
              left: cloud.left,
            }}
          >
            <Cloud />
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Clouds);
