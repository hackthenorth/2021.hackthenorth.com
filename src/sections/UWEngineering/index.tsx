import React from "react";
import { UWEngImg } from "src/assets/img";
import { SectionWrapper } from "src/components/base";
import { Flex } from "src/components/base";
import { Section } from "src/constants";
import { UWEngP1, UWEngP2 } from "src/copy/leaders";
import { TWGradient, TWText } from "src/styles";
import "twin.macro";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

import E7Building from "./E7Building";

const UWEngineeringWrapper = styled(Flex)`
  margin: 8% 0 25% 0;
  padding: 0px;
`;

const UWEngineeringTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50%;
  margin-top: 5%;
  z-index: 10;

  ${mediaQueries.large} {
    margin-left: 45%;
  }

  ${mediaQueries.tablet} {
    margin-left: 0;
  }
`;

const UWEngineering: React.FC = () => {
  const isTabletOrSmaller = useDeviceSize("tablet");

  return (
    <SectionWrapper id={Section.UW_ENGINEERING} css={TWGradient.uwEngineering}>
      <UWEngineeringWrapper
        column={isTabletOrSmaller}
        reverse={isTabletOrSmaller}
      >
        <E7Building />
        <UWEngineeringTextWrapper>
          <img src={UWEngImg} alt="University of Waterloo Engineering Logo" />
          <div tw="h-32"></div>
          <p css={[TWText.body]}>{UWEngP1}</p>
          <div tw="h-16"></div>
          <p css={[TWText.body]}>{UWEngP2}</p>
        </UWEngineeringTextWrapper>
      </UWEngineeringWrapper>
    </SectionWrapper>
  );
};

export default UWEngineering;
