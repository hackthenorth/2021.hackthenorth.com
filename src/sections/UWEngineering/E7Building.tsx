import React from "react";
import {
  E7BuildingImg,
  E7BuildingReflectionJSON,
  Texture,
} from "src/assets/img";
import {
  Animation,
  Spacer,
  MaskVariant,
  TexturedAsset,
} from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import tw, { styled } from "twin.macro";

const Wrapper = styled.div`
  position: absolute;
  right: 60%;
  width: 828px;
  height: 550px;

  ${mediaQueries.tablet} {
    // temp fix
    display: none;
    position: relative;
    right: initial;
    top: 0;
  }
`;

const E7Building: React.FC = () => (
  <Wrapper>
    <div tw="relative h-full w-full">
      <Spacer height="600px" />
      <AdjustedE7BuildingWrapper>
        <TexturedAsset texture={Texture}>
          <E7BuildingImg />
        </TexturedAsset>
      </AdjustedE7BuildingWrapper>
      <div tw="absolute h-full w-full top-0">
        <Animation
          config={{ animationData: E7BuildingReflectionJSON }}
          mask={MaskVariant.MIDDLE_ISLAND}
        />
      </div>
    </div>
  </Wrapper>
);

const AdjustedE7BuildingWrapper = styled.div`
  ${tw`absolute h-full top-0`}
  width: calc(100% - 12px);

  ${mediaQueries.tablet} {
    margin-left: 20px;
  }
`;

export default E7Building;
