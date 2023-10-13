import React, { ComponentPropsWithoutRef } from "react";
import { TWTransition, TWShared } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import { DefaultTheme, ThemeProps } from "styled-components";
import tw, { styled, TwStyle } from "twin.macro";

type Variant = "primary" | "secondary" | "none";

type Props = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
};

export const TWButton: Record<Variant, TwStyle> = {
  primary: tw`bg-primary-blue1 text-white border-none`,
  secondary: tw`bg-primary-blue1 bg-opacity-10 text-primary-blue1 border border-primary-blue1 px-24 py-8`,
  none: tw`bg-transparent border-none`,
};

const Button: React.FC<Props> = ({ children, ...props }) => (
  <StyledButton css={[TWShared.hover]} {...props}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button<Props & ThemeProps<DefaultTheme>>`
  ${tw`flex justify-center align-items[center] rounded-16 py-16 px-64 cursor-pointer outline-none`}
  ${({ variant }: Props) => TWButton[variant || "primary"]};
  /* ${TWShared.focus}
  ${TWShared.hover}
  ${TWShared.disabled} */

  &:focus {
    outline: none;
  }

  ${mediaQueries.tablet} {
    ${tw`py-8 px-48`}
  }

  ${mediaQueries.largeMobile} {
    ${tw`py-8 px-32`}
  }

  ${mediaQueries.smallMobile} {
    ${tw`py-4 px-16`}
  }
`;

export default Button;
