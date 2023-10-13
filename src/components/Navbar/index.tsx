import { motion, useCycle } from "framer-motion";
import debounce from "lodash.debounce";
import React, { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";
import { ContentWrapper } from "src/components";
import { Button, Icon } from "src/components/base";
import MobileMenuHamburger from "src/components/Navbar/MobileMenuHamburger";
import { Section } from "src/constants/section";
import { TWShared } from "src/styles";
import { useScrollDirection, useDeviceSize } from "src/utils";
import { ScrollDirection } from "src/utils/hooks/useScrollDirection";
import { styled } from "twin.macro";

import { NAVBAR_HEIGHT_PX, NavBarProps, SectionColors } from "./constants";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

export interface ContainerProps {
  isScrolledDown: boolean;
  isHidden: boolean;
  background: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const scrollDirection = useScrollDirection({
    initialDirection: ScrollDirection.DOWN,
    thresholdPixels: 10,
  });
  const isMediumOrSmaller = useDeviceSize("medium");

  const [isScrolledDown, setScrolledDown] = useState(false);
  const [curSection, setCurSection] = useState<Section>(Section.LANDING);
  const sectionBGColor = props.notMainPage
    ? "#DFE4F0"
    : SectionColors[curSection];
  const [mobileMenuOpen, toggleMobileMenuOpen] = useCycle(false, true);

  /**
   * Change the appearance of the nav bar when a user
   * scrolls down the page.
   */
  const checkScrolledDown = () => {
    const hasScrolledDown = window.scrollY > 0;
    setScrolledDown(hasScrolledDown);
  };

  const debouncedCheckScrollDown = debounce(checkScrolledDown, 250);

  useEffect(() => {
    window.addEventListener("scroll", debouncedCheckScrollDown);
    checkScrolledDown();
    return () => window.removeEventListener("scroll", debouncedCheckScrollDown);
  }, [debouncedCheckScrollDown]);

  const isHidden = isScrolledDown && scrollDirection === ScrollDirection.DOWN;

  const onScrollSpyUpdate = (el: HTMLElement) => {
    const section = (el as HTMLElement)?.id;

    if (section) {
      setCurSection(section as Section);
    }
  };

  return isMediumOrSmaller !== undefined ? (
    <Container
      isHidden={isHidden && !mobileMenuOpen}
      isScrolledDown={isScrolledDown}
      background={sectionBGColor}
    >
      <Scrollspy
        items={Object.values(Section)}
        currentClassName=""
        componentTag={InternalWrapper}
        aria-hidden={isHidden ? "true" : undefined}
        onUpdate={onScrollSpyUpdate}
      >
        <Button
          variant="none"
          tw="md:px-8"
          css={[TWShared.hover]}
          onClick={() => {
            props.notMainPage
              ? (window.location.href = window.location.origin)
              : window.scrollTo(0, 0);
          }}
          tabIndex={isHidden ? -1 : 0}
          aria-label="Hack The North Logo"
        >
          <Icon name="logo" width={36} height={36} />
        </Button>

        {isMediumOrSmaller ? (
          <motion.div animate={mobileMenuOpen ? "open" : "closed"}>
            <MobileMenuHamburger toggle={() => toggleMobileMenuOpen()} />
          </motion.div>
        ) : (
          <Menu {...props} isHidden={isHidden} />
        )}
      </Scrollspy>
      {isMediumOrSmaller && (
        <MobileMenu
          {...props}
          isHidden={isHidden}
          isOpen={mobileMenuOpen}
          toggleIsOpen={toggleMobileMenuOpen}
        />
      )}
    </Container>
  ) : null;
};

const Container = styled.nav.attrs<ContainerProps>(
  ({ isScrolledDown, background, isHidden }) => ({
    style: {
      backgroundColor: isScrolledDown ? background : "transparent",
      transform: isHidden
        ? `translateY(-${NAVBAR_HEIGHT_PX}px)`
        : "translateY(0)",
    },
  })
)<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 99;
  padding: 0;

  transition: background-color 250ms, transform 250ms;
`;

const InternalWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default NavBar;
