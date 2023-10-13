import React from "react";
import { LightBulbImg, Texture } from "src/assets/img";
import { TexturedAsset } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  ${mediaQueries.tablet} {
    width: 100%;
  }
`;

const Lightbulb: React.FC = () => (
  <Wrapper>
    <TexturedAsset texture={Texture}>
      <LightBulbImg />
    </TexturedAsset>
  </Wrapper>
);

export default Lightbulb;
