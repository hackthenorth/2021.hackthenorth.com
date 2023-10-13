import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

type Props = ComponentPropsWithoutRef<"div"> & {
  gradient: string; // css string
};

/* stylelint-disable */
const StyledText = styled.div<Props>`
  display: inline-block;
  background: ${({ gradient }) => gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const GradientText: React.FC<Props> = ({ children, gradient, ...rest }) => (
  <StyledText gradient={gradient} {...rest}>
    {children}
  </StyledText>
);

export default GradientText;
