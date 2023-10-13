import React, { useState } from "react";
import {
  Button,
  ContentWrapper,
  SectionWrapper,
  Spacer,
} from "src/components/base";
import RadioButton from "src/components/base/RadioButton";
import RadioButtonGroup from "src/components/base/RadioButtonGroup";
import Navbar from "src/components/Navbar";
import { ORGANIZER_LISTINGS } from "src/sections/Join/copy";
import { ListingType } from "src/sections/Join/types";
import { TWText } from "src/styles";
import tw, { theme, styled } from "twin.macro";

import JoinHeroSection from "./JoinHero";
import OrganizerListing from "./OrganizerListing";
const LISTING_TYPES = Object.values(ListingType);

const JoinSection: React.FC = () => {
  const [listingType, setListingType] = useState(ListingType.GENERAL);

  return (
    <SectionWrapper
      css={{
        background: "#F1F4F9",
      }}
    >
      <Navbar notMainPage />
      <JoinHeroSection />
      <RadioButtonGroup
        name={"Team Options"}
        onSelect={(value) => setListingType(value as ListingType)}
      >
        {LISTING_TYPES.map((type, i) => (
          <>
            <StyledRadioButton
              key={i}
              value={type}
              checked={type == listingType}
            >
              <StyledButton variant="secondary" selected={type === listingType}>
                {type}
              </StyledButton>
            </StyledRadioButton>
            <Spacer width={8} />
          </>
        ))}
      </RadioButtonGroup>

      <ContentWrapper>
        <p tw="py-40 lm:py-16" css={[TWText.body]}>
          Don&apos;t worry if you don&apos;t tick all the boxes! We&apos;re
          looking for individuals who are eager to learn and contribute to the
          team.
        </p>
        {ORGANIZER_LISTINGS.filter(
          (listing) =>
            listingType === ListingType.GENERAL || listing.type === listingType
        ).map((listing, i) => (
          <>
            <OrganizerListing key={i} {...listing} />
            <Spacer height="4em" />
          </>
        ))}
      </ContentWrapper>
    </SectionWrapper>
  );
};

const StyledButton = styled(Button).attrs({ variant: "secondary" })<{
  selected: boolean;
}>`
  background-color: transparent;
  border-radius: 27px;
  border-width: 3px;
  border-color: ${({ selected }) =>
    selected ? theme`colors.primary.blue1` : "transparent"};
`;

const StyledRadioButton = styled(RadioButton)`
  border-radius: 27px;
  input {
    border-radius: 27px;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
  }
`;

export default JoinSection;
