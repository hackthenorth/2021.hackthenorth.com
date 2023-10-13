import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React, { ComponentPropsWithRef, useMemo } from "react";
import { TWText } from "src/styles";
import tw, { styled, theme } from "twin.macro";

export type LinkProps = ComponentPropsWithRef<"a"> &
  NextLinkProps & {
    /**
     *
     */
    newTab?: boolean;
  };

const isRelativeHref = (href: string) => {
  try {
    new URL(href);
    return false;
  } catch (err) {
    return true;
  }
};

const RawLink = styled.a`
  color: inherit;
  width: fit-content;
  text-decoration: none;
`;

const Link: React.FC<LinkProps> = ({
  newTab,
  href = "",
  children,
  shallow,
  ...rest
}) => {
  const isInternal: boolean = useMemo(() => isRelativeHref(href), [href]);
  const target = newTab ? "_blank" : undefined;
  const rel = newTab ? "noopener noreferrer" : "";

  return isInternal ? (
    <NextLink href={href} shallow={shallow}>
      <a target={target} rel={rel} {...rest}>
        {children}
      </a>
    </NextLink>
  ) : (
    <RawLink
      href={href}
      target={target}
      rel={rel}
      {...(rest as ComponentPropsWithRef<"a">)}
    >
      {children}
    </RawLink>
  );
};

interface UnderlinedTextProps {
  underlined?: boolean;
  underlineOnHover?: boolean;
  /**
   * Underline color - must be defined in theme.globalConstants.color
   */
  lineColor?: string;
}

// source: https://codepen.io/mteplitski/pen/NWGQRZV
const UnderlineWrapper = styled.span<UnderlinedTextProps>`
  outline: none;
  width: fit-content;
  // 80 = 0.5 opacity
  background-image: linear-gradient(
    to right,
    transparent 50%,
    ${theme`colors.secondary.mustard`}80 50%
  );
  background-origin: 0;
  background-size: 200% 30%;
  background-repeat: repeat-x;
  background-position: 0 100%;
  transition: background-position 0.5s, opacity 250ms ease-in-out;
  ${({ underlined }) => (underlined ? "background-position: -100% 100%;" : "")}
  &:hover,
  &:focus {
    background-position: ${({ underlineOnHover }) =>
      underlineOnHover ? "-100% 100%" : ""};
    cursor: pointer;
  }
`;

const StyledLink: React.FC<LinkProps & UnderlinedTextProps> = ({
  children,
  underlined,
  underlineOnHover = true,
  lineColor,
  ...rest
}) => (
  <Link {...(rest as any)}>
    <p tw="inline-block outline-none">
      <UnderlineWrapper
        underlined={underlined}
        underlineOnHover={underlineOnHover}
        lineColor={lineColor}
      >
        {children}
      </UnderlineWrapper>
    </p>
  </Link>
);

export { StyledLink as Link, Link as UnstyledLink };
