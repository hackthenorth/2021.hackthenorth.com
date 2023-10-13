import React from "react";
import { StoriesBg, StoriesGear, Texture } from "src/assets/img";
import { TexturedAsset } from "src/components/base";
import { styled } from "twin.macro";

interface StoryTellerProps {
  imgSrc: string;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Headshot = styled.img`
  position: absolute;
  width: 200px;
  min-width: 200px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

const StoryBGWrapper = styled.div`
  position: absolute;
  width: 300px;
`;

const GearWrapper = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  margin-top: 165px;
  margin-left: 150px;
`;

const StoryTeller: React.FC<StoryTellerProps> = ({ imgSrc }) => {
  return (
    <Wrapper tw="m-64">
      <Ghost />
      <StoryBGWrapper>
        <TexturedAsset texture={Texture}>
          <StoriesBg />
        </TexturedAsset>
      </StoryBGWrapper>

      <Headshot src={imgSrc} alt={"Speaker headshot"} />
      <GearWrapper>
        <StoriesGear />
      </GearWrapper>
    </Wrapper>
  );
};

const Ghost = styled.div`
  height: 200px;
`;

export default StoryTeller;
