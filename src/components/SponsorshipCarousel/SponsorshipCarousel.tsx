import React, { Component, useEffect, useState, useContext } from "react";
import { SponsorShowcaseGearJSON, Texture } from "src/assets/img";
import { SponsorShowcaseContext } from "src/sections/Sponsors/context";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import styled from "styled-components";

import { Animation } from "../base";
import Paginator from "../Paginator";

import Slide from "./Slide";
import SlideMobile from "./SlideMobile";
import {
  getShortestDirection,
  SlideProps,
  SponsorshipCarouselProps,
} from "./types";
import {
  clampOffsetRadius,
  getPresentableSlides,
  mod,
  modBySlidesLength,
} from "./utils";
import "twin.macro";

const Wrapper = styled.div`
  width: 100%;
  height: 620px;
  /* margin-bottom: 620px; */

  ${mediaQueries.tablet} {
    height: 640px;
  }
  ${mediaQueries.largeMobile} {
    height: auto;
  }
`;

const GearAnimation = styled(Animation)`
  position: absolute;
  height: 320px;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);

  ${mediaQueries.large} {
    top: 55%;
  }

  ${mediaQueries.medium} {
    height: 280px;
    top: 55%;
  }
  ${mediaQueries.tablet} {
    height: 240px;
    top: 60%;
  }
`;

const DEFAULT_GO_TO_SLIDE_DELAY = 200;
type ContextType = {
  currentIndex: any;
  contextGearDirection: any;
};

const SponsorshipCarousel = (props: SponsorshipCarouselProps) => {
  const [prevPropsGoToSlide, setPrevPropsGoToSlide] = useState<number>(0);
  const [newSlide, setNewSlide] = useState<boolean>(false);
  const [goToIn, setGoToIn] = useState<number>(DEFAULT_GO_TO_SLIDE_DELAY);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const { goToSlide } = props;
  const { currentIndex, contextGearDirection } = React.useContext(
    SponsorShowcaseContext
  ) as ContextType;
  const [index, setIndex] = currentIndex;
  const [gearDirection, setGearDirection] = contextGearDirection;
  const slidesLength: number = props.slides.length;
  console.log("mappedslideslenght", slidesLength);

  useEffect(() => {
    if (goToSlide !== prevPropsGoToSlide) {
      setPrevPropsGoToSlide(goToSlide);
      setNewSlide(true);
    }
  }, [goToSlide]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPaused(true);
    }, 600);

    return () => setIsPaused(false);
  }, [goToSlide, index]);

  useEffect(() => {
    const { goToSlideDelay } = props;
    if (typeof goToSlide === "number") {
      if (newSlide) {
        handleGoToSlide();
      } else if (index !== goToSlide && typeof window !== "undefined") {
        window.clearTimeout(goToIn);
        setGoToIn(window.setTimeout(handleGoToSlide, goToSlideDelay));
      } else if (typeof window !== "undefined") {
        window.clearTimeout(goToIn);
      }
    }
  }, [goToSlide]);

  const handleGoToSlide = () => {
    if (typeof goToSlide !== "number") {
      return;
    }
    const currentGoToSlide = mod(goToSlide, slidesLength);

    if (currentGoToSlide != index) {
      const direction = getShortestDirection(
        index,
        currentGoToSlide,
        slidesLength
      );
      const isFinished =
        modBySlidesLength(index + direction, slidesLength) === currentGoToSlide;
      setGearDirection(direction == -1 ? -0.75 : 0.75);
      setIndex(modBySlidesLength(index + direction, slidesLength));
      setNewSlide(isFinished);
    }
  };

  const { animationConfig, offsetRadius } = props;
  const isMobile = useDeviceSize("largeMobile");

  return (
    <div>
      {isMobile ? (
        <></>
      ) : (
        <GearAnimation
          config={{ animationData: SponsorShowcaseGearJSON }}
          texture={Texture}
          useCanvas={false}
          isPaused={isPaused}
          speed={gearDirection}
        />
      )}
      <Wrapper>
        {isMobile ? (
          <>
            {getPresentableSlides(props, index).map(
              (slide: SlideProps, presentableIndex: number) => (
                <SlideMobile
                  key={slide.key}
                  imgSrc={slide.imgSrc}
                  description={slide.description}
                  onClick={slide.onClick}
                  link={slide.link}
                  linkText={slide.linkText}
                  offsetRadius={clampOffsetRadius(offsetRadius, slidesLength)}
                  index={presentableIndex}
                  animationConfig={animationConfig}
                />
              )
            )}
          </>
        ) : (
          <>
            {getPresentableSlides(props, index).map(
              (slide: SlideProps, presentableIndex: number) => (
                <Slide
                  key={slide.key}
                  imgSrc={slide.imgSrc}
                  description={slide.description}
                  onClick={slide.onClick}
                  link={slide.link}
                  linkText={slide.linkText}
                  offsetRadius={clampOffsetRadius(offsetRadius, slidesLength)}
                  index={presentableIndex}
                  animationConfig={animationConfig}
                />
              )
            )}
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default SponsorshipCarousel;
