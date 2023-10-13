import React from "react";

import { GarryTanHeadshotImg, SuhailDoshiHeadshotImg } from "src/assets/img";
import {
  ContentWrapper,
  Link,
  SectionWrapper,
  Flex,
  TexturedAsset,
} from "src/components/base";
import { Section } from "src/constants";
import { TWGradient, TWText } from "src/styles";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const ImgContainer = styled.div`
  flex: 1;
  width: 300px;
  margin: auto;

  ${mediaQueries.tablet} {
    width: 200px;
  }

  > img {
    margin: auto;
  }
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Keynote: React.FC = () => {
  const isMediumOrSmaller = useDeviceSize("medium");

  return (
    <SectionWrapper id={Section.KEYNOTE_SPEAKERS} css={[TWGradient.keynote]}>
      <ContentWrapper>
        <div tw="h-196 md:h-88"></div>
        <h1 css={[TWText.h1]} tw="block">
          Keynote Speakers
        </h1>
        <div tw="h-32"></div>

        <Flex column>
          <Flex column={isMediumOrSmaller}>
            <ImgContainer>
              <img src={GarryTanHeadshotImg} alt={"Headshot of Garry Tan"} />
            </ImgContainer>

            <TextContainer>
              {isMediumOrSmaller ? (
                <div tw="h-16"></div>
              ) : (
                <div tw="h-48"></div>
              )}
              <h2 css={[TWText.h2]} tw="block">
                Garry Tan
              </h2>
              <div tw="h-16"></div>
              <h3 css={[TWText.body]} tw="block text-24">
                Initialized Capital
              </h3>
              <div tw="h-24"></div>
              <p css={[TWText.body]} tw="block">
                Garry is a designer, engineer, and founder turned early stage
                investor, co-founding Initialized Capital in 2013. The firm has
                invested at the earliest stages of companies like Coinbase,
                Flexport, Instacart, Rippling, and Cruise. Prior to Initialized,
                Garry spent nearly 5 years as a partner at Y Combinator,
                advising and funding more than 1,000 companies and founders. He
                was co-founder of YC-backed blog platform Posterous (acquired by
                Twitter in 2012) and previously worked at Palantir as a founding
                member of the engineering team. He also designed Palantir’s
                logo. Garry holds a BS in Computer Systems Engineering from
                Stanford University.
              </p>
            </TextContainer>
          </Flex>

          <div tw="h-32"></div>

          <Flex column={isMediumOrSmaller}>
            <ImgContainer>
              <img
                src={SuhailDoshiHeadshotImg}
                alt={"Headshot of Suhail Doshi"}
              />
            </ImgContainer>

            <TextContainer>
              {isMediumOrSmaller ? (
                <div tw="h-16"></div>
              ) : (
                <div tw="h-48"></div>
              )}
              <h2 css={[TWText.h2]} tw="block">
                Suhail Doshi
              </h2>
              <div tw="h-24"></div>
              <h3 css={[TWText.body]} tw="block text-24">
                Mighty
              </h3>
              <div tw="h-32"></div>
              <p css={[TWText.body]} tw="block">
                Suhail is a computer programmer and product builder. In 2009, he
                started Mixpanel, a product analytics software company that
                helped app developers understand how their users were using
                their mobile and web apps. Mixpanel grew to nearly $100M in
                revenue and 30K customers. In 2018, he started Mighty which is a
                faster browser that is entirely streamed from a powerful
                computer in the cloud.
              </p>
            </TextContainer>
          </Flex>
        </Flex>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default Keynote;
