import React from "react";
import {
  SponsorCTAArmJSON,
  SponsorCTAArmReflectionJSON,
  SponsorCTAArmPlaceholder,
  Texture,
} from "src/assets/img";
import { Animation, MaskVariant } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const Wrapper = styled.div`
  position: absolute;
  pointer-events: none;
  width: 1000px;
  height: 440px;
  margin-left: auto;
  margin-right: auto;
  right: 160px;
  top: -50px;
  text-align: center;
  pointer-events: none;

  ${mediaQueries.tablet} {
    position: relative;
    width: 150%;
    right: 90%;
  }
`;

const AnimatedArm: React.FC = () => (
  <Wrapper>
    <StyledAnimation
      config={{ animationData: SponsorCTAArmJSON }}
      texture={Texture}
      placeholder={SponsorCTAArmPlaceholder}
    />
    <StyledAnimation
      style={{ marginTop: -2 }} // this asset is off by 2px, but this is better than re-exporting
      config={{ animationData: SponsorCTAArmReflectionJSON }}
      mask={MaskVariant.SPONSOR_ARM}
    />
  </Wrapper>
);

const StyledAnimation = styled(Animation)`
  position: absolute;
  height: 120%;
  width: 120%;
`;

export default React.memo(AnimatedArm);
