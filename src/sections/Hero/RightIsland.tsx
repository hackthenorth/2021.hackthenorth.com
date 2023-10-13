import React from "react";
import {
  RightIslandJSON,
  RightIslandReflectionJSON,
  RightIslandPlaceholder,
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
  right: ${islandBreakpoints.large.hOffset};
  text-align: center;
  bottom: ${islandBreakpoints.large.vOffset};

  ${mediaQueries.medium} {
    width: ${islandBreakpoints.medium.width};
    height: ${islandBreakpoints.medium.height};
    right: ${islandBreakpoints.medium.hOffset};
    bottom: ${islandBreakpoints.medium.vOffset};
  }

  ${mediaQueries.tablet} {
    width: ${islandBreakpoints.tablet.width};
    height: ${islandBreakpoints.tablet.height};
    right: ${islandBreakpoints.tablet.hOffset};
    bottom: ${islandBreakpoints.tablet.vOffset};
  }

  ${mediaQueries.largeMobile} {
    width: ${islandBreakpoints.largeMobile.width};
    height: ${islandBreakpoints.largeMobile.height};
    right: ${islandBreakpoints.largeMobile.hOffset};
    bottom: ${islandBreakpoints.largeMobile.vOffset};
  }
`;

const RightIsland: React.FC = () => (
  <Wrapper>
    <div tw="relative h-full w-full">
      <div tw="absolute h-full w-full">
        <Animation
          config={{ animationData: RightIslandJSON }}
          texture={Texture}
          placeholder={RightIslandPlaceholder}
        />
      </div>
      <div tw="absolute h-full w-full">
        <Animation
          config={{ animationData: RightIslandReflectionJSON }}
          mask={MaskVariant.RIGHT_ISLAND}
        />
      </div>
    </div>
  </Wrapper>
);

export default React.memo(RightIsland);
