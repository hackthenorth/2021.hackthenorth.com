import React, { ComponentPropsWithRef } from "react";
import styled from "styled-components";
import { Icon } from "src/components/base";
import tw from "twin.macro";

export interface BannerProps extends ComponentPropsWithRef<"div"> {
  show?: boolean;
  toggleShow?: () => void;
}

const Container = styled.div<BannerProps>`
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  ${tw`bg-secondary-light-blue`}
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  z-index: 100;
  & > .contents {
    margin: auto;
  }
`;

const CloseButton = styled.button`
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  cursor: pointer;
`;

const Banner: React.FC<BannerProps> = ({
  show,
  toggleShow,
  children,
  ...rest
}) => (
  <Container show={show} {...rest}>
    <div className="contents">{children}</div>
    <CloseButton
      tabIndex={show ? 0 : -1}
      aria-hidden={show ? undefined : "true"}
    >
      <Icon name="cross" width={24} height={24} onClick={toggleShow} />
    </CloseButton>
  </Container>
);

export default Banner;
