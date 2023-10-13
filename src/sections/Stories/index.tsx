import React from "react";
import { ContentWrapper, SectionWrapper } from "src/components/base";
import Paginator from "src/components/StoryPaginator";
import { Section } from "src/constants";
import { STORIES_LIST } from "src/copy/stories";
import { TWGradient, TWText } from "src/styles";
import { randomize } from "src/utils/functions/randomize";
import "twin.macro";

const Stories: React.FC = () => (
  <SectionWrapper id={Section.STORIES} css={[TWGradient.stories]}>
    <ContentWrapper>
      <div tw="h-196 md:h-88"></div>

      <h1 css={[TWText.h1]} tw="block">
        My #HackTheNorth Story
      </h1>
      <div tw="h-32"></div>
      <p css={[TWText.body]} tw="block">
        For 7 years, Hack the North has been crafting new connections and
        unforgettable experiences for our hackers. Whether you’re a first-timer
        or an experienced hacker, Hack the North has empowered students of all
        levels to take their ideas to the next step by fostering a community of
        learning, mentorship, and fun.
      </p>
      <Paginator items={randomize(STORIES_LIST)} />
    </ContentWrapper>
  </SectionWrapper>
);

export default Stories;
