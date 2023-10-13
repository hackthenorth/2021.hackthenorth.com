import React from "react";
import { Icon } from "src/components/base";
import { styled } from "twin.macro";

interface SideArrowProps {
  pointsLeft: boolean;
}

const StyledIcon = styled(Icon)<SideArrowProps>`
  top: 7px;
  position: relative;
  transform: rotate(${({ pointsLeft }) => (pointsLeft ? 180 : 0)}deg);
`;

export const LeftArrow = () => (
  <span tw="inline-block">
    <StyledIcon name="forward" pointsLeft={true} />
  </span>
);

export const RightArrow = () => (
  <span tw="inline-block">
    <StyledIcon name="forward" pointsLeft={false} />
  </span>
);
