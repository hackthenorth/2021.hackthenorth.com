import React from "react";
import { animated, Spring, useSpring } from "react-spring";
import { TWText } from "src/styles";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import styled from "styled-components";
import tw, { theme } from "twin.macro";

import { Link } from "../base";

import SlideMobile from "./SlideMobile";
import { SlideProps } from "./types";

const SlideContainer = styled(animated.div)`
  position: absolute;
  width: 800px;
  top: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
  background: #f5fcff;
  display: flex;
  flex-direction: column;
  box-shadow: -8px 8px 0px rgba(67, 175, 222, 0.6);
  border-radius: 20px;
  align-items: left;

  img {
    max-height: 150px;
  }

  ${mediaQueries.tablet} {
    ${tw`text-16`};
    width: 600px;
  }

  ${mediaQueries.largeMobile} {
    height: fit-content;
    width: 360px;
  }
`;

export default function Slide({
  key,
  imgSrc,
  description,
  link,
  linkText,
  offsetRadius,
  index,
  onClick,
  animationConfig,
}: SlideProps) {
  const offsetFromCenter = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromCenter / (offsetRadius + 1));
  const translateXoffset =
    50 * (Math.abs(offsetFromCenter) / (offsetRadius + 1));

  let translateX = -50;
  const isMobile = useDeviceSize("largeMobile");

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateX = 0;
    } else if (index === totalPresentables - 1) {
      translateX = -100;
    }
  }

  if (offsetFromCenter > 0) {
    translateX += translateXoffset;
  } else if (offsetFromCenter < 0) {
    translateX -= translateXoffset;
  }

  const spingStyles = useSpring({
    transform: `translateY(-50%) translateX(${translateX}%) scale(${distanceFactor})`,
    left: `${
      offsetRadius === 0 ? 50 : 50 + (offsetFromCenter * 50) / offsetRadius
    }%`,
    opacity: distanceFactor * distanceFactor,
  });

  return (
    <div>
      <SlideContainer
        style={{
          ...spingStyles,
          zIndex: Math.abs(Math.abs(offsetFromCenter) - 1),
        }}
        onClick={onClick}
        tw="px-72 py-64 height[600px]"
      >
        <img src={imgSrc} alt="Placeholder SponsorLogo" tw="mb-32" />
        {offsetFromCenter === 0 ? (
          <div
            style={{
              transition: "1s ease-in",
            }}
          >
            <div css={[TWText.body]} tw="mb-16">
              {description}
            </div>
            <Link css={[TWText.cta]} href={link}>
              {`${linkText} →`}
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </SlideContainer>
    </div>
  );
}
