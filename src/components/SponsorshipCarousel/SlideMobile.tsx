import React from "react";
import { animated, Spring, useSpring } from "react-spring";
import { TWText } from "src/styles";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import styled from "styled-components";
import tw, { theme } from "twin.macro";

import { Link } from "../base";

import { SlideProps } from "./types";

const SlideContainer = styled(animated.div)`
  display: flex;
  justify-content: center;
  background: #f5fcff;
  flex-direction: column;
  box-shadow: -8px 8px 0px rgba(67, 175, 222, 0.6);
  border-radius: 20px;
`;

export default function SlideMobile({
  imgSrc,
  description,
  link,
  linkText,
  offsetRadius,
  index,
  onClick,
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
      <div tw="text-center">
        <img
          src={imgSrc}
          alt="Placeholder SponsorLogo"
          tw="mb-32 height[150px] object-contain width[100%] display[block] margin-left[auto] margin-right[auto]"
        />
      </div>
      <SlideContainer onClick={onClick} tw="px-24 py-32">
        {offsetFromCenter === 0 ? (
          <div
            style={{
              transition: "1s ease-in",
            }}
          >
            <div css={[TWText.body]} tw="mb-16">
              {description}
            </div>
            <Link tw="flex flex-row self-start" css={[TWText.cta]} href={link}>
              {linkText} {"→"}
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </SlideContainer>
    </div>
  );
}
