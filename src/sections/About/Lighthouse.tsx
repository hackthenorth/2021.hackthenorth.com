import React from "react";
import {
  LighthouseJSON,
  LighthouseReflectionJSON,
  LighthousePlaceholder,
  Texture,
} from "src/assets/img";
import { Animation, MaskVariant } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import tw, { styled } from "twin.macro";

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  position: relative;
  margin-left: -250px;
  margin-top: -50px;
  transform: scale(1.2);

  ${mediaQueries.medium} {
    margin-left: 0;
    transform: scale(1);
  }
`;

const Lighthouse: React.FC = () => (
  <Wrapper>
    <Ghost /> {/* This sets the height for the absolute-positioned siblings */}
    <StyledAnimation
      config={{ animationData: LighthouseJSON }}
      texture={Texture}
      placeholder={LighthousePlaceholder}
    />
    <StyledAnimation
      config={{ animationData: LighthouseReflectionJSON }}
      mask={MaskVariant.LIGHTHOUSE}
    />
  </Wrapper>
);

const StyledAnimation = styled(Animation)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
`;

const Ghost = styled.div`
  height: 600px;
`;

export default Lighthouse;
