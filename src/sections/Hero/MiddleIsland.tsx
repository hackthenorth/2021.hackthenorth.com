import React from "react";
import {
  MiddleIslandJSON,
  MiddleIslandReflectionJSON,
  MiddleIslandPlaceholder,
  Texture,
} from "src/assets/img";
import { Animation, MaskVariant } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

import { islandBreakpoints } from "./constants";

const Wrapper = styled.div`
  position: absolute;
  width: ${islandBreakpoints.large.width};
  height: ${islandBreakpoints.large.height};
  margin-left: auto;
  margin-right: auto;
  pointer-events: none;
  left: 0;
  right: 0;
  text-align: center;
  bottom: 0;

  ${mediaQueries.medium} {
    width: ${islandBreakpoints.medium.width};
    height: ${islandBreakpoints.medium.height};
  }

  ${mediaQueries.tablet} {
    width: ${islandBreakpoints.tablet.width};
    height: ${islandBreakpoints.tablet.height};
  }

  ${mediaQueries.largeMobile} {
    width: ${islandBreakpoints.largeMobile.width};
    height: ${islandBreakpoints.largeMobile.height};
  }
`;

const MiddleIsland: React.FC = () => (
  <Wrapper>
    <div tw="relative h-full w-full">
      <div tw="absolute h-full w-full">
        <Animation
          config={{ animationData: MiddleIslandJSON }}
          texture={Texture}
          placeholder={MiddleIslandPlaceholder}
        />
      </div>
      <div tw="absolute h-full w-full">
        <Animation
          config={{ animationData: MiddleIslandReflectionJSON }}
          mask={MaskVariant.MIDDLE_ISLAND}
        />
      </div>
    </div>
  </Wrapper>
);

export default React.memo(MiddleIsland);
