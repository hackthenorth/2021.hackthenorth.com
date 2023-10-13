import React from "react";
import { Cloud4, Cloud5, Cloud6 } from "src/assets/img";
import {
  ContentWrapper,
  UnstyledLink,
  PageWrapper,
  SectionWrapper,
} from "src/components/base";
import { SHOW_PAST_SPONSORS } from "src/copy/sponsors";
import { TWGradient, TWText } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";
import "twin.macro";

import {
  SPONSOR_TIER_LIST,
  PARTNERS,
  PARTNERS_SECTION,
  PAST_SPONSORS,
  MOBILE_SCALE,
} from "./constants";

const SponsorContainer = styled.div<{ containerMargin?: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;

  margin: ${({ containerMargin }) => containerMargin || "65px 0"};
`;

interface SponsorItemProps {
  height: number;
  heightMobile: number;
  margin: string;
  marginMobile: string;
}

const SponsorItem = styled(UnstyledLink)<SponsorItemProps>`
  height: ${({ height }) => height}px;
  margin: ${({ margin }) => margin};
  cursor: pointer;
  box-sizing: border-box;

  transition: transform 250ms;
  &:hover {
    transform: scale(1.04);
  }

  ${mediaQueries.tablet} {
    height: ${({ heightMobile }) => heightMobile}px;
    margin: ${({ marginMobile }) => marginMobile};
  }
`;

const SponsorImg = styled.img<{ padding: string | undefined }>`
  height: 100%;
  padding: ${({ padding }) => padding || "10px 0"};
  box-sizing: border-box;
  object-fit: contain;
`;

const FloatingCloud1 = styled.div`
  position: absolute;
  opacity: 0.8;
  pointer-events: none;
  width: 560px;
  height: auto;
  top: 400px;
  right: 280px;

  ${mediaQueries.large} {
    top: 360px;
    right: 40px;
  }

  ${mediaQueries.tablet} {
    top: 400px;
    right: -40px;
  }

  ${mediaQueries.largeMobile} {
    right: -280px;
  }
`;

const FloatingCloud2 = styled.div`
  position: absolute;
  opacity: 0.6;
  pointer-events: none;
  width: 560px;
  height: auto;
  top: 600px;
  left: 20px;

  ${mediaQueries.large} {
    width: 360px;
    left: 40px;
  }

  ${mediaQueries.tablet} {
    display: none;
  }
`;

const FloatingCloud3 = styled.div`
  position: absolute;
  opacity: 0.5;
  pointer-events: none;
  width: 360px;
  height: auto;
  top: 860px;
  margin: 0 40%;

  ${mediaQueries.tablet} {
    display: none;
  }
`;

const FloatingCloud4 = styled.div`
  position: absolute;
  opacity: 0.4;
  pointer-events: none;
  width: 840px;
  height: auto;
  top: 920px;
  left: -420px;

  ${mediaQueries.largeMobile} {
    width: 420px;
    left: -210px;
  }
`;

const FloatingCloud5 = styled.div`
  position: absolute;
  opacity: 0.5;
  pointer-events: none;
  width: 1200px;
  height: auto;
  top: 1200px;
  right: -300px;
  transform: scaleX(-1);

  ${mediaQueries.large} {
    right: -800px;
  }

  ${mediaQueries.largeMobile} {
    right: -900px;
  }
`;

const FloatingCloud6 = styled.div`
  position: absolute;
  opacity: 0.4;
  pointer-events: none;
  width: 1200px;
  height: auto;
  top: 1400px;
  right: -300px;
  z-index: 21;

  ${mediaQueries.large} {
    width: 900px;
    right: -400px;
  }

  ${mediaQueries.medium} {
    right: -600px;
  }

  ${mediaQueries.tablet} {
    display: none;
  }
`;

const SponsorLogos: React.FC = () => (
  <SectionWrapper css={[TWGradient.sponsorLogos]}>
    <FloatingCloud1>
      <Cloud5 />
    </FloatingCloud1>
    <FloatingCloud2>
      <Cloud6 />
    </FloatingCloud2>
    <FloatingCloud3>
      <Cloud4 />
    </FloatingCloud3>
    <FloatingCloud4>
      <Cloud4 />
    </FloatingCloud4>
    <FloatingCloud5>
      <Cloud6 />
    </FloatingCloud5>
    <FloatingCloud6>
      <Cloud4 />
    </FloatingCloud6>
    <ContentWrapper>
      {/* <div tw="h-88"></div> */}
      <h2 css={[TWText.h2]}>Our sponsors</h2>
      {SPONSOR_TIER_LIST.map(
        (
          {
            sponsors,
            height,
            heightMobile,
            margin,
            marginMobile,
            containerMargin,
          },
          i
        ) => (
          <SponsorContainer containerMargin={containerMargin} key={i}>
            {sponsors.map((sponsor) => (
              <SponsorItem
                key={sponsor.name}
                href={sponsor.link}
                newTab
                height={height}
                heightMobile={heightMobile}
                margin={margin}
                marginMobile={marginMobile}
              >
                <SponsorImg
                  src={sponsor.imgSrc}
                  alt={sponsor.name}
                  title={sponsor.name}
                  padding={`${sponsor.padding * MOBILE_SCALE}px 0`}
                />
              </SponsorItem>
            ))}
          </SponsorContainer>
        )
      )}

      <div tw="h-48" />
      <div css={[TWText.h4]} tw="text-center">
        Stay tuned for more!
      </div>

      <div tw="h-48" />
      <div css={[TWText.h3]}>Our partners</div>
      <SponsorContainer containerMargin={PARTNERS_SECTION.containerMargin}>
        {PARTNERS.map((partner) => (
          <SponsorItem
            key={partner.name}
            href={partner.link}
            newTab
            height={PARTNERS_SECTION.height}
            heightMobile={PARTNERS_SECTION.heightMobile}
            margin={PARTNERS_SECTION.margin}
            marginMobile={PARTNERS_SECTION.marginMobile}
          >
            <SponsorImg
              src={partner.imgSrc}
              alt={partner.name}
              title={partner.name}
              padding={`${partner.padding * MOBILE_SCALE}px 0`}
            />
          </SponsorItem>
        ))}
      </SponsorContainer>
      {SHOW_PAST_SPONSORS ? (
        <>
          <div css={[TWText.h3]}>Past Sponsors</div>
          <SponsorContainer>
            {PAST_SPONSORS.map((sponsor) => (
              <SponsorItem
                key={sponsor.name}
                href={sponsor.link}
                newTab
                height={PARTNERS_SECTION.height}
                heightMobile={PARTNERS_SECTION.heightMobile}
                margin={PARTNERS_SECTION.margin}
                marginMobile={PARTNERS_SECTION.marginMobile}
              >
                <SponsorImg
                  src={sponsor.imgSrc}
                  alt={sponsor.name}
                  title={sponsor.name}
                  padding={`${sponsor.padding * MOBILE_SCALE}px 0`}
                />
              </SponsorItem>
            ))}
          </SponsorContainer>
        </>
      ) : (
        <div tw="h-16" />
      )}
    </ContentWrapper>
  </SectionWrapper>
);

export default SponsorLogos;
