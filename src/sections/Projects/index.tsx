import React from "react";
import { ContentWrapper, Link, SectionWrapper } from "src/components/base";
import { Section } from "src/constants";
import { ProjectsSectionCopy } from "src/copy/projects";
import { TWGradient, TWText } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import "twin.macro";
import { styled } from "twin.macro";

import RecapVideo from "./RecapVideo";

const ProjectSectionWrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${mediaQueries.tablet} {
    flex-direction: column;
    align-items: center;
    padding-bottom: 140px;
    width: 100%;
  }
`;

const ProjectSectionCopyWrapper = styled.div`
  width: 50%;
  ${mediaQueries.tablet} {
    width: 100%;
    margin-bottom: 48px;
  }
`;

const Projects: React.FC = () => (
  <SectionWrapper id={Section.PROJECTS} css={TWGradient.projects}>
    <div tw="h-196 md:h-128"></div>
    <div tw="flex align-items[center]">
      <ProjectSectionWrapper>
        <ProjectSectionCopyWrapper>
          <h1 css={[TWText.h1]} tw="mb-32">
            {ProjectsSectionCopy.title}
          </h1>
          <div css={[TWText.body]} tw="mb-16">
            {ProjectsSectionCopy.description}
          </div>
          <Link
            tw="flex flex-row"
            href={ProjectsSectionCopy.link}
            newTab
            css={[TWText.bodyLarge, TWText.link]}
          >
            {ProjectsSectionCopy.linkText}
          </Link>
        </ProjectSectionCopyWrapper>
        <RecapVideo />
      </ProjectSectionWrapper>
    </div>
  </SectionWrapper>
);

export default Projects;
