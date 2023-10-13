import dynamic from "next/dynamic";
import React, { useState } from "react";
import { config } from "react-spring";
import { ContentWrapper, Link, SectionWrapper } from "src/components/base";
import { SponsorCTA } from "src/copy/sponsorShowcase";
import { slides } from "src/copy/sponsorShowcase";
import { TWGradient, TWText, TWShared } from "src/styles";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import "twin.macro";
import { styled } from "twin.macro";

import AnimatedArm from "./AnimatedArm";

const Carousel = dynamic(
  () => import("src/components/SponsorshipCarousel/SponsorshipCarousel"),
  {
    ssr: false,
  }
);

const ButtonLink = styled(Link).attrs({ removeSharedStyles: true })`
  font-weight: 500;
  border-radius: 88px;
  padding: 15px 35px;
  transition: 250ms;
  z-index: 1;
  width: fit-content;

  outline: none;
  display: flex;
  align-items: center;
`;

const SponsorCTAWrapper = styled.div`
  /* margin: 8% 0 20% 0; */
  margin: 8% 0 4% 0;
  padding: 0px;
`;

const SponsorCTATextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50%;
  margin-top: 5%;
  z-index: 10;

  ${mediaQueries.large} {
    margin-right: 45%;
  }

  ${mediaQueries.tablet} {
    margin-right: 0;
  }
`;

const SponsorShowcase: React.FC = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const mappedSlides = [...slides].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });
  const isMobile = useDeviceSize("largeMobile");

  return (
    <SectionWrapper css={[TWGradient.sponsorShowcase]}>
      <ContentWrapper>
        <SponsorCTAWrapper tw="flex-1 flex-col">
          <AnimatedArm />
          <SponsorCTATextWrapper>
            <h1 css={[TWText.h1]} tw="mb-32">
              Sponsor a Special Weekend
            </h1>
            <p css={[TWText.body]}>{SponsorCTA}</p>
            <p css={[TWText.body]} tw="mt-16">
              Interested in sponsoring? Email us at{" "}
              <Link href="mailto:sponsor@hackthenorth.com">
                <b>sponsor@hackthenorth.com</b>
              </Link>
              .
            </p>
            <ButtonLink
              underlineOnHover={false}
              href="mailto:sponsor@hackthenorth.com"
              css={[TWText.cta, TWShared.hover]}
              tw="bg-primary-blue1 text-white rounded-16 mt-32"
            >
              Become a sponsor
            </ButtonLink>
          </SponsorCTATextWrapper>
        </SponsorCTAWrapper>
        <h2 css={[TWText.h2]} tw="mb-48">
          Sponsor showcase
        </h2>
        <div tw="flex flex-col w-4/5 py-32 lm:h-auto lm:py-0 tb:h-auto tb:mt-0 mx-auto">
          <Carousel
            slides={mappedSlides}
            goToSlide={goToSlide}
            goToSlideDelay={200}
            offsetRadius={isMobile ? 0 : 2}
            animationConfig={config.gentle}
          />
          <div tw="h-80 tb:h-32 lm:h-16"></div>
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default SponsorShowcase;
