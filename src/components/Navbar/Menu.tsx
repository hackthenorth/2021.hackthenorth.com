import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Button, Icon, Link } from "src/components/base";
import { Section } from "src/constants/section";
import { SOCIALS, SocialPlatforms } from "src/constants/social";
import { TWText, TWShared, TWAnimation, TWTransition } from "src/styles";
import tw, { styled, theme } from "twin.macro";

import {
  SECTIONS,
  NOT_MAIN_LINKS,
  LAST_YEAR,
  APPLY,
  NavBarProps,
} from "./constants";

export interface MenuProps extends NavBarProps {
  isHidden: boolean;
}

/**
 * The non-mobile menu portion of the navbar.
 */
const Menu: React.FC<MenuProps> = ({ isHidden, notMainPage }) => {
  const [curSection, setCurSection] = useState<string>();

  const onScrollSpyUpdate = (el: HTMLElement) =>
    setCurSection((el as HTMLElement)?.id);

  return (
    <JustifyEndFlex>
      <Scrollspy
        items={Object.values(Section)}
        currentClassName=""
        componentTag={JustifyEndFlex}
        onUpdate={onScrollSpyUpdate}
        tw="mt-8"
      >
        {Object.entries(notMainPage ? NOT_MAIN_LINKS : SECTIONS).map(
          ([id, name]) => {
            if (id === APPLY) return;
            const isCurSection = curSection === id;
            const linkHref =
              id === LAST_YEAR ? "http://2020.hackthenorth.com/" : `/#${id}`;

            return (
              <Link
                tw="ml-20"
                key={id}
                href={linkHref}
                tabIndex={isHidden ? -1 : 0}
                aria-hidden={isHidden ? "true" : undefined}
                underlineOnHover={!isCurSection}
                underlined={isCurSection}
                className="navbar-text"
              >
                <span tw="outline-none" css={[TWText.body]}>
                  {name}
                </span>
              </Link>
            );
          }
        )}
      </Scrollspy>

      <div tw="flex ml-8 mt-8">
        {Object.values(SocialPlatforms).map((platform, id) => (
          <Link
            tw="ml-20"
            css={[TWShared.hover]}
            underlineOnHover={false}
            key={id}
            href={SOCIALS[platform].link}
            newTab
            tabIndex={isHidden ? -1 : 0}
            aria-hidden={isHidden ? "true" : undefined}
            aria-label={`${platform} Icon`}
            shallow
          >
            <Icon name={SOCIALS[platform].icon} width={24} height={24} />
          </Link>
        ))}
      </div>

      {/* <Link href="https://apply.hackthenorth.com/">
        <Button tw="ml-16 -mr-64" variant="secondary">
          Apply now!
        </Button>
      </Link> */}
    </JustifyEndFlex>
  );
};

const JustifyEndFlex = tw.div`flex align-content[center] justify-end`;

export default Menu;
