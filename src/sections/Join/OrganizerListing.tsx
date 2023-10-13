import React from "react";
import { Flex, Link, Spacer } from "src/components/base";
import ButtonLink from "src/components/base/ButtonLink";
import { TOrganizerListing } from "src/sections/Join/types";
import { TWText } from "src/styles";
import { useDeviceSize } from "src/utils";
import { styled } from "twin.macro";

const StyledButtonLink = styled(ButtonLink)`
  height: 48px;
  background-color: "#0A446D";
  width: fit-content;
`;

const ContentContainer = styled.div`
  flex: 1 1;
`;

const OrganizerListing: React.FC<TOrganizerListing> = ({
  title,
  description,
  descriptionExtra,
  responsibilities,
  skills,
  link,
}) => {
  const isTabletOrSmaller = useDeviceSize("tablet");
  return (
    <div>
      <Flex justify="space-between" column={isTabletOrSmaller}>
        <h3 css={[TWText.h2]} tw="mb-8 lm:(text-24!)">
          {title}
        </h3>
        {isTabletOrSmaller && <Spacer height={16} />}
        <div tw="lm:m-auto">
          <StyledButtonLink newTab href={link}>
            Apply for this role
          </StyledButtonLink>
        </div>
        {isTabletOrSmaller && <Spacer height={24} />}
      </Flex>
      <Spacer height={isTabletOrSmaller ? 16 : 36} />
      <h3 css={[TWText.body]} tw="mb-8">
        {description}
      </h3>
      {descriptionExtra && (
        <>
          <Spacer height={12} />
          {descriptionExtra}
        </>
      )}
      <Spacer height={24} />
      <Flex column={isTabletOrSmaller}>
        <ContentContainer>
          <h3 css={[TWText.bodyBold]} tw="mb-8 font-size[22px]">
            Opportunities
          </h3>
          <Spacer height={12} />
          {responsibilities}
        </ContentContainer>
        {isTabletOrSmaller ? <Spacer height={12} /> : <Spacer width="5%" />}
        <ContentContainer>
          <h3 css={[TWText.bodyBold]} tw="mb-8 font-size[22px]">
            Desired Skills
          </h3>
          <Spacer height={12} />
          {skills}
        </ContentContainer>
      </Flex>
    </div>
  );
};

export default OrganizerListing;
