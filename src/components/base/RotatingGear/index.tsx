import React, { useState, useMemo } from "react";
import { WhiteGear, YellowBlueGear } from "src/assets/img";
import styled, { keyframes } from "styled-components";

export enum GearColors {
  WHITE = "White",
  YELLOWBLUE = "YellowBlue",
}

interface RotatingGearProps {
  color: GearColors;
  size?: number;
  isClockwise?: boolean;
  isPaused?: boolean;
}

const rotateClockwise = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rotateCounterClockwise = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const GearWrapper = styled.div<{
  isClockwise?: boolean;
  size: number;
  show: boolean;
  isPaused: boolean;
}>`
  width: ${({ size }) => size}px;
  height: auto;
  animation: ${({ isClockwise }) =>
      isClockwise ? rotateClockwise : rotateCounterClockwise}
    5s infinite linear;

  @media (prefers-reduced-motion) {
    animation: none;
  }

  transition: opacity 250ms;
  opacity: ${({ show }) => (show ? 1 : 0)};
  animation-play-state: ${({ isPaused }) => (isPaused ? "paused" : "running")};
`;

const RotatingGear: React.FC<RotatingGearProps> = ({
  color,
  size = 80,
  isClockwise = false,
  isPaused = false,
}) => {
  const Gear = useMemo(() => {
    switch (color) {
      case GearColors.WHITE:
        return WhiteGear;
      case GearColors.YELLOWBLUE:
        return YellowBlueGear;
      default:
        return WhiteGear;
    }
  }, [color]);

  return (
    <GearWrapper
      size={size}
      isClockwise={isClockwise}
      isPaused={isPaused}
      show={true}
    >
      <Gear />
    </GearWrapper>
  );
};

export default React.memo(RotatingGear);
