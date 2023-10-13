import debounce from "lodash.debounce";
import React, { useState, useEffect } from "react";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

import { useDeviceSize } from "../../utils";

import { d, viewBoxX } from "./constants";

const LineSvg = styled.svg`
  margin: auto;
  position: absolute;
  pointer-events: none;
  opacity: 30%;
  top: 940px;
  right: -38vw;

  ${mediaQueries.large} {
    top: 940px;
    right: -52vw;
  }

  ${mediaQueries.medium} {
    top: 955px;
    right: -54vw;
    opacity: 20%;
  }

  ${mediaQueries.tablet} {
    top: 980px;
    right: -53vw;
  }
`;

const StyledPath = styled.path`
  transition: stroke-dashoffset 0.5s linear;
`;

// adapted from https://www.tutorialspoint.com/how-to-draw-on-scroll-using-javascript-and-svg
// https://stackoverflow.com/questions/64567563/how-to-get-dashed-line-svg-animation-on-accordingly-scroll
const LineOnScroll: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const deviceSize = useDeviceSize()?.[0];
  const intervalCount = 0;

  let svgD = d.desktop;
  let svgX = viewBoxX.desktop;

  if (deviceSize == "large") {
    svgD = d.ultrawide;
    svgX = viewBoxX.ultrawide;
  } else if (deviceSize == "medium") {
    svgD = d.desktop;
    svgX = viewBoxX.desktop;
  } else if (deviceSize == "tablet") {
    svgD = d.tablet;
    svgX = viewBoxX.tablet;
  }

  useEffect(() => {
    let speed = 1;
    if (!deviceSize) {
      speed = 0.875;
    }

    const line = document.getElementById("line");
    const length = (line as any)?.getTotalLength();
    line!.style.strokeDasharray = length;
    line!.style.strokeDashoffset = length;

    const scrollInterval = setInterval(() => {
      setScrollY(
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      );
    }, 1000);

    const debouncedDrawPoly = debounce(drawPoly, 60);
    window.addEventListener("scroll", debouncedDrawPoly);

    function drawPoly() {
      const scrollpercent =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      const draw = length * scrollpercent * speed;
      line!.style.strokeDashoffset = (length - draw).toString();
    }

    if (intervalCount >= 3) {
      clearInterval(scrollInterval);
    }
  }, []);

  const body = (
    <LineSvg
      width={svgX + "px"}
      height={scrollY + "px"}
      viewBox={"0 0 " + svgX + " " + scrollY}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="theMask" maskUnits="userSpaceOnUse">
        <path
          d={svgD}
          stroke="#fff"
          strokeWidth="6"
          strokeDasharray="50"
          strokeDashoffset="1050"
          id="mask"
        />
      </mask>
      <g mask="url(#theMask)">
        <StyledPath
          d={svgD}
          stroke="#7EC2E4"
          strokeWidth="6"
          strokeDasharray="32 32"
          id="line"
        />
      </g>
    </LineSvg>
  );

  return <div tw="relative lm:hidden z-10">{body}</div>;
};

export default LineOnScroll;
