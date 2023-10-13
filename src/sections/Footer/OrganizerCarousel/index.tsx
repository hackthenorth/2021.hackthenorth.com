import React from "react";
import { useInView } from "react-intersection-observer";
import { Avatar, InfiniteCarousel } from "src/components";
import { RotatingGear, GearColors } from "src/components/base";
import { TWShared } from "src/styles";
import { randomize, useDeviceSize } from "src/utils";
import { styled } from "twin.macro";

import { ORGANIZERS, Organizer } from "./organizers";

interface OrganizerCarouselRowProps {
  rowNum: number;
  handleOnHover: (organizer: Organizer) => void;
  handleOnLeave: () => void;
}

const StyledInfiniteCarousel = styled(InfiniteCarousel)`
  width: 100%;
  margin: 0 auto;
  max-width: 1100px;
  height: 75px;
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

const RANDOM_ORGANIZERS = randomize<Organizer>(ORGANIZERS);

const ORGANIZERS_GROUPS = [
  RANDOM_ORGANIZERS.slice(0, RANDOM_ORGANIZERS.length / 2),
  RANDOM_ORGANIZERS.slice(
    RANDOM_ORGANIZERS.length / 2,
    RANDOM_ORGANIZERS.length
  ),
];

const getOrganizersWithGears = (rowNum: number) => {
  const organizers = ORGANIZERS_GROUPS[rowNum];
  let gearNum = 0;
  const len = organizers.length;
  const organizersWithGears: (Organizer | number)[] = [...organizers];
  for (let i = 0; i < len; i++) {
    if (i % 5 === 0) {
      organizersWithGears.splice(i, 0, gearNum);
      gearNum = gearNum === 2 ? 0 : gearNum + 1;
    }
  }
  return organizersWithGears;
};

const ORGANIZERS_WITH_GEARS = [
  getOrganizersWithGears(0),
  getOrganizersWithGears(1),
];

const OrganizerCarouselRow: React.FC<OrganizerCarouselRowProps> = ({
  rowNum,
  handleOnHover,
  handleOnLeave,
}) => {
  const [containerRef, isInView] = useInView();
  const isMediumOrSmaller = useDeviceSize("medium");

  return (
    <div ref={containerRef}>
      {isMediumOrSmaller !== undefined && (
        <StyledInfiniteCarousel
          name={`organizers-${rowNum}`}
          stopOnHover
          spacing={isMediumOrSmaller ? 8 : 16}
          direction={rowNum === 1 ? "left" : "right"}
          aria-label="Organizers Carousel"
          speed={35}
          tw="py-8"
        >
          {ORGANIZERS_WITH_GEARS[rowNum].map((data, i) =>
            typeof data === "number" ? (
              <RotatingGear
                isPaused={!isInView}
                key={`${data}-${i}`}
                color={GearColors.YELLOWBLUE}
                size={isMediumOrSmaller ? 45 : 60}
                isClockwise={rowNum !== 1}
              />
            ) : (
              <Avatar
                key={data.name}
                src={data.img}
                srcSet={data.srcSet}
                isSquare={data.isSquare}
                backgroundNum={data.backgroundNum}
                onMouseEnter={() => handleOnHover(data)}
                onMouseLeave={handleOnLeave}
                size={isMediumOrSmaller ? 48 : 64}
                name={data.name}
                tw="ml-10 mr-10"
                css={[TWShared.avatar]}
              />
            )
          )}
        </StyledInfiniteCarousel>
      )}
    </div>
  );
};

export default React.memo(OrganizerCarouselRow);
