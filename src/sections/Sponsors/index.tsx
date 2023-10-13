import dynamic from "next/dynamic";
import React, { useState } from "react";
import { SectionWrapper } from "src/components/base";
import Paginator from "src/components/Paginator";
import { modBySlidesLength } from "src/components/SponsorshipCarousel/utils";
import { Section } from "src/constants";
import { slides } from "src/copy/sponsorShowcase";
import { TWGradient } from "src/styles";

import { SponsorShowcaseContext } from "./context";

const SponsorShowcase = dynamic(() => import("./SponsorShowcase"));
const SponsorLogos = dynamic(() => import("./SponsorLogos"));

const Sponsors = () => {
  const [index, setIndex] = useState<number>(0);
  const [gearDirection, setGearDirection] = useState<number>(-0.75 | 0.75);
  const handleNumberClick = (newIndex: number): void => {
    setGearDirection(newIndex < index ? -0.75 : 0.75);
    setIndex(newIndex);
  };
  const moveSlide = (direction: -1 | 1): void => {
    setIndex(modBySlidesLength(index + direction, slides.length));
  };
  return (
    <SectionWrapper id={Section.SPONSORS}>
      <SectionWrapper css={[TWGradient.sponsorShowcase]}>
        <SponsorShowcaseContext.Provider
          value={{
            currentIndex: [index, setIndex],
            contextGearDirection: [gearDirection, setGearDirection],
          }}
        >
          <SponsorShowcase />
          <Paginator
            tw="text-center"
            items={slides}
            currentItem={index}
            setCurrentItem={handleNumberClick}
            setGearDirection={setGearDirection}
            moveSlide={moveSlide}
          />
        </SponsorShowcaseContext.Provider>
      </SectionWrapper>
      <SponsorLogos />
    </SectionWrapper>
  );
};

export default Sponsors;
