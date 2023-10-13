import debounce from "lodash.debounce";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Scrollspy from "react-scrollspy";
import { DidWeMissAnything } from "src/components";
import { Navbar } from "src/components";
import {
  ContentWrapper,
  PageWrapper,
  Link,
  Flex,
  Spacer,
} from "src/components/base";
import { NAVBAR_HEIGHT_PX } from "src/components/Navbar/constants";
import { TWGradient, TWText } from "src/styles";
import { useScrollDirection } from "src/utils";
import { ScrollDirection } from "src/utils/hooks/useScrollDirection";
import { mediaQueries } from "src/utils/responsive";
import tw, { styled, theme, css } from "twin.macro";

interface InfoPageProps {
  sections: { id: string; title: string }[];
  content: string;
  title: string;
}

const Heading: React.FC<{
  level: number;
  children: React.ReactElement<{ value: string }>[];
}> = (props) => {
  return React.createElement(
    `h${props.level}`,
    {
      id: props.children[0].props.value
        .split(" ")
        .map((s: string) => s.toLowerCase())
        .join("-"),
    },
    props.children
  );
};

const Sidebar = styled(Flex).attrs({ column: true })<{ shiftUp: boolean }>`
  width: 150px;
  top: 100px;
  position: sticky;
  align-self: flex-start;
  margin-right: 75px;

  transition: transform 250ms;
  transform: translateY(
    ${({ shiftUp }) => (shiftUp ? -NAVBAR_HEIGHT_PX : 0)}px
  );

  ${mediaQueries.tablet} {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  ${tw`text-blue`};
  font-weight: 500;
  margin-bottom: 1em;
`;

const Content = styled.div<{ children: React.ReactNode }>`
  ${TWText.body}

  h1,
  h2,
  h3,
  h4 {
    ${tw`font-heading`}
  }

  h1 {
    ${TWText.h1}
  }

  h2 {
    ${TWText.h2}
    padding-top: 50px;
    padding-bottom: 20px;
  }

  h3 {
    ${TWText.h4}
    padding-top: 20px;
  }

  p {
    padding: 10px 0;
  }

  hr {
    border-style: none;
    height: 1px;
    margin-top: 3rem;
  }

  a {
    ${tw`text-blue`};

    :hover {
      text-decoration: none;
    }
  }

  ol,
  ul {
    list-style: initial;
    margin: initial;
    padding: revert;
  }

  ${mediaQueries.tablet} {
    margin-left: 0;
  }
`;

const FlexColumn = styled(Flex).attrs({ column: true })``;

const FlexWithMargins = styled(FlexColumn)`
  width: 100%;

  ${mediaQueries.tablet} {
    padding: 0 25px;
  }
`;

const InfoPage: React.FC<InfoPageProps> = ({ title, content, sections }) => {
  const scrollDirection = useScrollDirection();
  const [isScrolledDown, setScrolledDown] = useState(false);

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

  const [curSection, setCurSection] = useState<string>();
  const onScrollSpyUpdate = (el: HTMLElement) =>
    setCurSection((el as HTMLElement)?.id); // types for react-scrollspy are incorrect

  return (
    <PageWrapper
      css={[
        TWGradient.default,
        // needed for position: sticky to work
        css`
          overflow: unset;
        `,
      ]}
    >
      <Navbar notMainPage />
      <ContentWrapper>
        <Spacer height="6em" />
        <Flex justify="space-between">
          <FlexColumn>
            <Spacer height="100px" />
            <Sidebar
              shiftUp={
                isScrolledDown && scrollDirection === ScrollDirection.DOWN
              }
            >
              <Scrollspy
                offset={-80}
                items={sections.map(({ id }) => id)}
                onUpdate={onScrollSpyUpdate}
                componentTag={FlexColumn}
                currentClassName="active"
              >
                {sections.map(({ id, title }) => (
                  <StyledLink
                    underlineOnHover
                    key={id}
                    href={`#${id}`}
                    underlined={curSection === id}
                  >
                    {title}
                  </StyledLink>
                ))}
              </Scrollspy>
            </Sidebar>
          </FlexColumn>
          <FlexWithMargins>
            <h1 css={[TWText.h1]}>{title}</h1>
            <Spacer height="2em" />
            <Content>
              <ReactMarkdown
                source={content}
                renderers={{ heading: Heading }}
              />
            </Content>
          </FlexWithMargins>
        </Flex>
        <Spacer height="6em" />
        <DidWeMissAnything />
        <Spacer height="6em" />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default InfoPage;
