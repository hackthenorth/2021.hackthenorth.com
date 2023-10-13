import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Button, Link, Icon } from "src/components/base";
import { SOCIALS } from "src/constants/social";
import { TWText } from "src/styles";
import { useWindowSize } from "src/utils";
import tw, { styled } from "twin.macro";

import {
  SECTIONS,
  LAST_YEAR,
  APPLY,
  NOT_MAIN_LINKS,
  NAVBAR_HEIGHT_PX,
  NavBarProps,
  mobileBackgroundVariants,
  mobileListVariants,
  mobileItemVariants,
} from "./constants";

export interface MobileMenuProps extends NavBarProps {
  isHidden: boolean;
  isOpen: boolean;
  toggleIsOpen: () => void;
}

// Credits: https://codesandbox.io/s/framer-motion-side-menu-mx2rw?fontsize=14&module=/src/Example.tsx&file=/src/Example.tsx
const MobileMenu: React.FC<MobileMenuProps> = ({
  isHidden,
  isOpen,
  toggleIsOpen,
  notMainPage,
}) => {
  const containerRef = useRef(null);
  const { windowHeight } = useWindowSize();

  // disable scrolling when navbar open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <Container
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={windowHeight}
      ref={containerRef}
      css={[isOpen ? tw`pointer-events-auto` : tw`pointer-events-none`]}
    >
      <Background variants={mobileBackgroundVariants}>
        <List variants={mobileListVariants}>
          {Object.entries(notMainPage ? NOT_MAIN_LINKS : SECTIONS).map(
            ([id, name], i) => {
              const linkHref =
                id === LAST_YEAR
                  ? "http://2020.hackthenorth.com/"
                  : id === APPLY
                  ? "https://apply.hackthenorth.com/"
                  : `/#${id}`;

              return (
                <ListItem
                  key={i}
                  variants={mobileItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  css={[
                    isOpen
                      ? tw`pointer-events-auto`
                      : tw`pointer-events-none select-none`,
                  ]}
                >
                  <Link
                    key={id}
                    href={linkHref}
                    onClick={() => toggleIsOpen()} // menu should close after section is clicked
                    tabIndex={isHidden ? -1 : 0}
                    aria-hidden={isHidden ? "true" : undefined}
                    shallow
                  >
                    <span tw="mb-24" css={[TWText.body]}>
                      {name}
                    </span>
                  </Link>
                </ListItem>
              );
            }
          )}
          <div tw="flex">
            {Object.entries(SOCIALS).map(([id, { icon, link }]) => (
              <ListItem
                variants={mobileItemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={id}
                css={[
                  isOpen
                    ? tw`pointer-events-auto`
                    : tw`pointer-events-none select-none`,
                ]}
              >
                <Link
                  href={link}
                  newTab
                  tabIndex={isHidden ? -1 : 0}
                  aria-hidden={isHidden ? "true" : undefined}
                  underlineOnHover={false}
                  css={[
                    isOpen
                      ? tw`pointer-events-auto`
                      : tw`pointer-events-none select-none`,
                  ]}
                  tw="mr-16"
                >
                  <Icon name={icon} width={24} height={24} />
                </Link>
              </ListItem>
            ))}
          </div>
        </List>
      </Background>
    </Container>
  );
};

const List = styled(motion.ul)`
  top: 25vh;
  left: 0;
  padding: 0px 25%;
  position: absolute;
`;

const ListItem = styled(motion.li)`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
`;

const Background = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: calc(100vh + ${NAVBAR_HEIGHT_PX}px); // TODO: Cleanup constant
  background: #fff;
`;

export default MobileMenu;
