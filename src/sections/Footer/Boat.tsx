import React from "react";
import { BoatImg } from "src/assets/img";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 30;
  max-width: 130px;
  margin: auto;
  margin-bottom: -20px;

  ${mediaQueries.largeMobile} {
    max-width: 80px;
  }
`;

const Boat: React.FC<{ hovering: boolean; organizer: string }> = ({
  hovering,
  organizer,
}) => {
  return (
    <Wrapper>
      {(hovering && organizer == "Steven Xu" && <BoatImg expression="sad" />) ||
        (hovering && organizer == "Jessica Zhang" && (
          <BoatImg expression="suave" />
        )) || <BoatImg expression="happy" />}
    </Wrapper>
  );
};

export default React.memo(Boat);
