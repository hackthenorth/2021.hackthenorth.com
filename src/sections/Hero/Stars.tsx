import React, { useEffect, useState, useMemo } from "react";
import {
  Star1,
  Star2,
  Star3,
  Star4,
  Star5,
  Star6,
  Star7,
  Star8,
  Star9,
  Star10,
  Star11,
} from "src/assets/img";
import { deviceBreakpoints, DeviceType } from "src/constants/deviceBreakpoints";
import { useWindowSize } from "src/utils";

type StarProps = {
  src: string;
  top: number;
  left: number;
};

const numStars: Record<DeviceType, number> = {
  large: 15,
  medium: 10,
  tablet: 7,
  largeMobile: 5,
  mobile: 5,
  smallMobile: 3,
};

const randomTo = (to: number) => Math.floor(Math.random() * to);
// calculate Euclidian distance
const distance = (from: [number, number], to: [number, number]) =>
  Math.hypot(to[0] - from[0], to[1] - from[1]);

// stars must be > 3% apart
const MIN_STAR_DIST = 3;

const stars = [
  Star1,
  Star2,
  Star3,
  Star4,
  Star5,
  Star6,
  Star7,
  Star8,
  Star9,
  Star10,
  Star11,
];
const generateStars = (numberOfStars: number): StarProps[] => {
  const generated: StarProps[] = [];
  const startStarIdx = randomTo(stars.length);
  for (let i = 0; i < numberOfStars; i++) {
    let x = randomTo(100);
    let y = randomTo(20);

    const isTooClose = (x: number, y: number) =>
      generated.find(
        (pt) => distance([pt.left, pt.top], [x, y]) < MIN_STAR_DIST
      );

    while (isTooClose(x, y)) {
      x = randomTo(100);
      y = randomTo(20);
    }

    generated.push({
      src: stars[(startStarIdx + i) % stars.length],
      top: y,
      left: x,
    });
  }
  return generated;
};

const Stars: React.FC = () => {
  const { windowWidth } = useWindowSize();
  const deviceType: DeviceType = (Object.entries(deviceBreakpoints).find(
    ([, width]) => width <= (windowWidth ?? 0)
  )?.[0] ?? "medium") as DeviceType;

  // re-render stars every time `deviceType` changes
  const starsToRender: StarProps[] = useMemo(
    () => generateStars(numStars[deviceType]),
    [deviceType]
  );

  return windowWidth !== undefined ? (
    <div>
      {starsToRender.map((star, i) => {
        const Star = star.src;
        return (
          <div
            key={`star_${i}`}
            style={{
              position: "absolute",
              top: `${star.top}%`,
              left: `${star.left}%`,
            }}
          >
            <Star />
          </div>
        );
      })}
    </div>
  ) : null;
};

export default React.memo(Stars);
