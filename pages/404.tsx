import React from "react";
import { SadBoat } from "src/assets/img";
import { Navbar } from "src/components";
import {
  Title,
  Subtitle,
  BoatWrapper,
  MoveAnimation,
  BobbleAnimation,
} from "src/components";
import { SectionWrapper, gradientColors, Link } from "src/components/base";
import Clouds from "src/sections/Hero/Clouds";
import Mountains from "src/sections/Hero/Mountains";
import Stars from "src/sections/Hero/Stars";
import { TWText, TWGradient } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import tw, { styled } from "twin.macro";

const NotFoundPage: React.FC = () => {
  return (
    <SectionWrapper css={[TWGradient.hero]} tw="overflow-hidden z-0">
      <Navbar notMainPage />
      <Mountains />

      <Stars />
      <Clouds />

      <BoatWrapper>
        <MoveAnimation>
          <BobbleAnimation>
            <SadBoat />
          </BobbleAnimation>
        </MoveAnimation>
      </BoatWrapper>

      <div tw="flex justify-center items-center h-screen">
        <MessageContainer>
          <Title gradient={gradientColors.blueGreen}>Whoops!</Title>
          <Subtitle>It looks like this page doesn&apos;t exist</Subtitle>
          <p tw="text-blue text-18 my-32">Did you mean these pages?</p>
          <Link href="/" css={[TWText.cta]}>
            Back to home page →
          </Link>
        </MessageContainer>
      </div>
    </SectionWrapper>
  );
};

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 24px;
  max-width: 800px;
  padding: 67px 150px;
  margin: 0 50px;
  margin-bottom: 20%;
  z-index: 1;
  ${mediaQueries.largeMobile} {
    padding: 67px 10px;
    margin-bottom: 0;
  }
`;

export default NotFoundPage;
