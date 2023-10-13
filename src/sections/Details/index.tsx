import React, { useState, useEffect, useCallback } from "react";
import {
  DiscoverGrowImg,
  ExcitingOpportunitiesImg,
  HaveFunImg,
  GlobalCommunityImg,
} from "src/assets/img";
import { Cloud4 } from "src/assets/img";
import { CardStack } from "src/components/";
import { ContentWrapper, SectionWrapper, Flex } from "src/components/base";
import { TWGradient, TWText } from "src/styles";
import { mediaQueries, useDeviceSize } from "src/utils";
import { styled } from "twin.macro";

import { useReducedMotion } from "../../utils/hooks/useReducedMotion";

import DetailsColumn from "./DetailsColumn";

export type DetailType = {
  header: string;
  body: string;
  image: string;
  alt: string;
};

const DETAIL_COPY: DetailType[] = [
  {
    header: "Join a global community",
    body: "Connect and collaborate with 3,000+ students from across the globe.",
    image: GlobalCommunityImg,
    alt: "16 video call participants each posing with an object of their choosing, such as water bottles, succulents, and a plushie Shiba Inu",
  },
  {
    header: "Get inspired",
    body: "Chat with industry leaders, sponsors, and mentors and open your mind to endless possibilities.",
    image: DiscoverGrowImg,
    alt: "Our keynote speakers, Vinod Khosla and Chamath Palihapitiya, engaging in a video conversation with Hack the North founders Kartik Talwar, Kevin Lau, and Liam Horne.",
  },
  {
    header: "Expand your skill set",
    body: "Join a variety of workshops, tech talks, and career sessions to learn something new.",
    image: ExcitingOpportunitiesImg,
    alt: "The Intro to Android workshop lead screen-sharing a slide with a popup on top of it that says ‘configure your project’",
  },
  {
    header: "Make memories",
    body: "Take a break and enjoy all the fun activities we’ve prepared for you!",
    image: HaveFunImg,
    alt: "A grid of Hack the North participants posing in front of backdrops with decorations that say ‘take pride in code’ and ‘you belong in tech’",
  },
];

const HeaderWrapper = styled.h1`
  ${TWText.h1}
  max-width: 500px;
  margin-bottom: 50px;
  ${mediaQueries.medium} {
    align-self: center;
  }
  ${mediaQueries.tablet} {
    margin-bottom: 20px;
  }
  ${mediaQueries.largeMobile} {
    text-align: center;
    margin-bottom: 40px;
  }
  ${mediaQueries.mobile} {
    text-align: center;
    margin-bottom: 75px;
  }
`;

const Title = () => (
  <HeaderWrapper>Where will your journey take you?</HeaderWrapper>
);

const Details: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cards, setCards] = useState(DETAIL_COPY);
  const prefersReducedMotion = useReducedMotion();
  const isMediumOrSmaller = useDeviceSize("medium");

  const moveToEnd = useCallback(() => {
    const shiftedCards = [...cards.slice(1, 4), cards[0]];
    const cardIndex = DETAIL_COPY.findIndex(
      (element) => element.header == shiftedCards[0].header
    );
    setSelectedIndex(cardIndex);
    setCards(shiftedCards);
  }, [cards]);

  useEffect(() => {
    let interval: any = null;
    if (!prefersReducedMotion) {
      interval = setInterval(async () => {
        moveToEnd();
      }, 6000);
    }
    if (!prefersReducedMotion) {
      return () => clearInterval(interval);
    }
  }, [prefersReducedMotion, moveToEnd]);

  const headerClicked = (header: string, index: number) => {
    setSelectedIndex(index);
    const cardIndex = cards.findIndex((element) => element.header == header);
    const shiftedCards = [
      cards[cardIndex],
      ...cards.slice(cardIndex + 1),
      ...cards.slice(0, cardIndex),
    ];
    setCards(shiftedCards);
  };

  return (
    <SectionWrapper css={[TWGradient.details]} tw="overflow-visible">
      <FloatingCloud>
        <Cloud4 />
      </FloatingCloud>

      <ContentWrapper>
        <div tw="h-196 md:h-88"></div>
        {!isMediumOrSmaller ? (
          <Flex>
            <div tw="flex flex-col mt-8 flex-1">
              <Title />
              <DetailsColumn
                selectedIndex={selectedIndex}
                copy={DETAIL_COPY}
                onClick={headerClicked}
              />
            </div>
            <div tw="flex justify-end items-center mt-64">
              <CardStack moveToEnd={moveToEnd} cards={cards} />
            </div>
          </Flex>
        ) : (
          <Flex column justify-evenly items-center>
            <Title />
            <div tw="flex flex-col justify-evenly items-center">
              <CardStack moveToEnd={moveToEnd} cards={cards} />
              <DetailsColumn
                selectedIndex={selectedIndex}
                copy={DETAIL_COPY}
                onClick={headerClicked}
              />
            </div>
          </Flex>
        )}
      </ContentWrapper>
    </SectionWrapper>
  );
};

const FloatingCloud = styled.div`
  position: absolute;
  width: 1200px;
  height: auto;
  top: 20px;
  right: -220px;

  ${mediaQueries.medium} {
    width: 800px;
    top: -620px;
    right: -200px;
  }
  ${mediaQueries.largeMobile} {
    width: 800px;
    top: -540px;
    right: -360px;
  }
`;

export default Details;
