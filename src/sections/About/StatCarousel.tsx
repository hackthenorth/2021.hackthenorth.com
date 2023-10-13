import React, { useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { InfiniteCarousel } from "src/components";
import { RotatingGear, GearColors } from "src/components/base";
import { deviceBreakpoints, DeviceType } from "src/constants/deviceBreakpoints";
import { upperStats, lowerStats } from "src/copy/stats";
import { TWText } from "src/styles";
import { useWindowSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import tw, { styled } from "twin.macro";

const gearSizes: Record<DeviceType, number> = {
  large: 80,
  medium: 80,
  tablet: 60,
  largeMobile: 30,
  mobile: 30,
  smallMobile: 30,
};

const spacingSizes: Record<DeviceType, number> = {
  large: 50,
  medium: 50,
  tablet: 50,
  largeMobile: 20,
  mobile: 20,
  smallMobile: 20,
};

// insert empty strings as delimiters, where each empty string is a gear
const addGears = (arr: string[]) =>
  arr.reduce((r, a) => r.concat(a, ""), [] as string[]);

const StatCarousel: React.FC = () => {
  const { windowWidth } = useWindowSize();
  const [containerRef, isInView] = useInView();

  const deviceType: DeviceType = (Object.entries(deviceBreakpoints).find(
    ([, width]) => width <= (windowWidth ?? 0)
  )?.[0] ?? "medium") as DeviceType;
  const gearSize = useMemo(() => gearSizes[deviceType], [deviceType]);
  const spacing = useMemo(() => spacingSizes[deviceType], [deviceType]);

  const topStatArray = useMemo(
    () => addGears([...upperStats, ...upperStats]),
    []
  );

  const botStatArray = useMemo(
    () => addGears([...lowerStats, ...lowerStats]),
    []
  );

  return windowWidth !== undefined ? (
    <div ref={containerRef}>
      <StyledCarousel
        name="top-stat-carousel"
        spacing={spacing}
        direction="left"
        speed={44}
        aria-label="Top Stat Carousel"
        tw="mt-96"
      >
        {topStatArray.map((stat, i) =>
          stat ? (
            <Statistic key={stat}>{stat}</Statistic>
          ) : (
            <RotatingGear
              key={i}
              isPaused={!isInView}
              color={GearColors.WHITE}
              size={gearSize}
              isClockwise={false}
            />
          )
        )}
      </StyledCarousel>
      <StyledCarousel
        name="bot-stat-carousel"
        spacing={spacing}
        direction="right"
        speed={44}
        aria-label="Bottom Stat Carousel"
        tw="mt-24"
      >
        {botStatArray.map((stat, i) =>
          stat ? (
            <Statistic key={stat}>{stat}</Statistic>
          ) : (
            <RotatingGear
              key={i}
              color={GearColors.WHITE}
              size={gearSize}
              isClockwise={true}
            />
          )
        )}
      </StyledCarousel>
    </div>
  ) : null;
};

const Statistic = styled.span`
  ${TWText.h2}

  ${mediaQueries.largeMobile} {
    ${tw`text-24!`}
  }
`;

const StyledCarousel = styled(InfiniteCarousel)`
  width: 160%;
  margin: 0 auto;
  margin-left: -30%;
  mask-image: linear-gradient(
    to right,
    transparent,
    black,
    black,
    black,
    black,
    transparent
  );
`;

export default StatCarousel;
