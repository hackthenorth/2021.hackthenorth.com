import React from "react";
import "twin.macro";
import { Flex } from "src/components/base";
import { TWText } from "src/styles";
import { useDeviceSize } from "src/utils";
import tw, { styled } from "twin.macro";

import StoryTeller from "./StoryTeller";

export interface StoryProps extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
  title: string;
  story: string;
  imgSrc: string;
}

const QuoteText = styled.div`
  ${tw`font-heading`}
  ${tw`text-48`}
  color: #8DA8BA;
`;

const QuoteContainer = styled.div`
  ${tw`italic`}
  ${TWText.body}
  position: relative;
  margin: 16px 32px;
`;

const LeftQuote = styled(QuoteText)`
  position: absolute;
  top: -0.8em;
  left: -0.8em;
`;

const RightQuote = styled(QuoteText)`
  position: absolute;
  bottom: -0.8em;
  right: -0em;
`;

const Story: React.FC<StoryProps> = ({
  name,
  title,
  story,
  imgSrc,
  ...rest
}) => {
  const isMediumOrSmaller = useDeviceSize("medium");

  return isMediumOrSmaller !== undefined ? (
    <Flex {...rest} tw="my-48 lg:(my-0)" column={isMediumOrSmaller}>
      <StoryTeller imgSrc={imgSrc} />
      <StoryContainer>
        <QuoteContainer>
          <LeftQuote>&#8220;</LeftQuote>
          <RightQuote>&#8221;</RightQuote>
          {story}
        </QuoteContainer>
        <div css={[TWText.bodyBold]} tw="ml-32">
          <span>{name}, </span>
          <span>{title}</span>
        </div>
      </StoryContainer>
    </Flex>
  ) : null;
};

const StoryContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: center;
`;

export default Story;
