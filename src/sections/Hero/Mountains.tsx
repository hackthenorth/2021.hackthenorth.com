import React from "react";
import { MountainImg } from "src/assets/img";
import { styled } from "twin.macro";

const Wrapper = styled.div`
  position: absolute;
  pointer-events: none;
  width: 100%;
  bottom: 39%;
`;

const Mountains: React.FC = () => (
  <Wrapper>
    <MountainImg />
  </Wrapper>
);

export default React.memo(Mountains);
