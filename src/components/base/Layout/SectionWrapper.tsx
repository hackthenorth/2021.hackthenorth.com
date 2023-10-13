import React, { ComponentPropsWithoutRef } from "react";
import SectionScrollTarget from "src/components/SectionScrollTarget";
import { Section } from "src/constants/section";
import { styled } from "twin.macro";

/**
 * A component to hold all styles common between sections.
 */
const StyledSection = styled.section`
  margin: 0 auto;
  // Fixes an off by one rounding error for section boundaries
  margin-top: -1px;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

type Props = ComponentPropsWithoutRef<"section"> & {
  id?: Section;
};

const SectionWrapper: React.FC<Props> = ({ id, children, ...props }) => (
  <StyledSection id={id} {...props}>
    {/* {id && <SectionScrollTarget id={id} />} */}
    {children}
  </StyledSection>
);

export default SectionWrapper;
