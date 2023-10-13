import React from "react";
import { AccordionGroup } from "src/components";
import { ContentWrapper, SectionWrapper } from "src/components/base";
import { Section } from "src/constants/section";
import { TWGradient, TWText } from "src/styles";
import { styled } from "twin.macro";

import { useDeviceSize } from "src/utils";

import { LEFT_QUESTION_SET, RIGHT_QUESTION_SET } from "src/copy/FAQ";

const StyledAccordionGroup = styled(AccordionGroup)`
  flex: 1;
`;

const FAQ: React.FC = () => {
  const isMediumOrSmaller = useDeviceSize("medium");
  const screenSize = useDeviceSize();
  if (screenSize && screenSize.length == 0) {
    return <div></div>;
  }

  return isMediumOrSmaller !== undefined ? (
    <SectionWrapper id={Section.FAQ} css={[TWGradient.faq]} tw="h-full">
      <div tw="h-196 md:h-88"></div>
      <ContentWrapper>
        <h1 css={[TWText.h1]} tw="mb-32">
          Frequently asked questions
        </h1>
        <div tw="w-full flex justify-between gap-x-48 md:(block)">
          <StyledAccordionGroup
            questionSet={LEFT_QUESTION_SET.map((cur) => ({
              question: cur.question,
              answer: <p>{cur.answer}</p>,
            }))}
          />
          <StyledAccordionGroup
            questionSet={RIGHT_QUESTION_SET.map((cur) => ({
              question: cur.question,
              answer: <p>{cur.answer}</p>,
            }))}
            shouldOpenFirst={!isMediumOrSmaller}
          />
        </div>
      </ContentWrapper>
    </SectionWrapper>
  ) : null;
};

export default FAQ;
