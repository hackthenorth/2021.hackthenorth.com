import React from "react";
import { TWText } from "src/styles";
import styled from "styled-components";

import "twin.macro";

import { JudgeInfo } from "./types";

const JudgeCard: React.FC<JudgeInfo> = ({ name, title, img }) => (
  <div tw="flex items-center">
    <Avatar tw="flex items-center justify-start">
      <img src={img} alt={`Headshot of ${name}`} />
    </Avatar>
    <div tw="mr-24" />
    <div tw="flex flex-col max-width[220px]">
      <div css={[TWText.bodyBold]}>{name}</div>
      <div tw="mt-4" />
      <div css={[TWText.label]}>{title}</div>
    </div>
  </div>
);

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  & > img {
    width: 100%;
  }
`;

export default JudgeCard;
