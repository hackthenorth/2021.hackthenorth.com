import React from "react";
import {
  LeftIslandJSON,
  LeftIslandReflectionJSON,
  LeftIslandPlaceholder,
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
  left: ${islandBreakpoints.large.hOffset};
  right: 0;
  text-align: center;
  bottom: ${islandBreakpoints.large.vOffset};

  ${mediaQueries.medium} {
    width: ${islandBreakpoints.medium.width};
    height: ${islandBreakpoints.medium.height};
    left: ${islandBreakpoints.medium.hOffset};
    bottom: ${islandBreakpoints.medium.vOffset};
  }

  ${mediaQueries.tablet} {
    width: ${islandBreakpoints.tablet.width};
    height: ${islandBreakpoints.tablet.height};
    left: ${islandBreakpoints.tablet.hOffset};
    bottom: ${islandBreakpoints.tablet.vOffset};
  }

  ${mediaQueries.largeMobile} {
    width: ${islandBreakpoints.largeMobile.width};
    height: ${islandBreakpoints.largeMobile.height};
    left: ${islandBreakpoints.largeMobile.hOffset};
    bottom: ${islandBreakpoints.largeMobile.vOffset};
  }
`;

const LeftIsland: React.FC = () => (
  <Wrapper>
    <div tw="relative h-full w-full">
      <div tw="absolute h-full w-full">
        <Animation
          config={{ animationData: LeftIslandJSON }}
          texture={Texture}
          placeholder={LeftIslandPlaceholder}
        />
      </div>
      <div tw="absolute h-full w-full">
        <Animation
          config={{ animationData: LeftIslandReflectionJSON }}
          mask={MaskVariant.LEFT_ISLAND}
        />
      </div>
    </div>
  </Wrapper>
);

export default React.memo(LeftIsland);
