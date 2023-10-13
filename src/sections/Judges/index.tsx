import React from "react";
import styled from "styled-components";
import { TWText } from "src/styles";
import "twin.macro";

import { SectionWrapper, ContentWrapper } from "src/components";
import { Section } from "src/constants";
import { mediaQueries } from "src/utils/responsive";

import { JUDGES_LIST } from "./constants";
import JudgeCard from "./JudgeCard";
import { TWGradient } from "src/styles";

const Judges: React.FC = () => (
  <SectionWrapper id={Section.JUDGES} css={[TWGradient.leaders]}>
    <div tw="height[150px]" />
    <ContentWrapper>
      <div css={[TWText.h1]}>Judges</div>
      <div tw="h-64" />
      <JudgesGrid>
        {JUDGES_LIST.map((judge) => (
          <JudgeCard key={judge.name} {...judge} />
        ))}
      </JudgesGrid>
    </ContentWrapper>
    <div tw="height[150px]" />
  </SectionWrapper>
);

const JudgesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  row-gap: 30px;

  ${mediaQueries.large} {
    grid-template-columns: repeat(auto-fit, 400px);
  }
`;

export default Judges;
