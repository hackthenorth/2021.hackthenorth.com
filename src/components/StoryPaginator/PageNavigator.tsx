import React from "react";
import { styled } from "twin.macro";
import { LeftArrow, RightArrow } from "./SideArrow";

interface PageNavProps {
  update: () => void;
}

const PageNavigator = styled.span<{ onClick?: () => void }>`
  margin: 0 10px;
  padding: 6px;
  &:hover {
    background-color: #c8d9eb;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const PageBack: React.FC<PageNavProps> = ({ update }) => (
  <PageNavigator onClick={update}>
    <span tw="ml-4">{"← "}Back</span>
  </PageNavigator>
);

export const PageNext: React.FC<PageNavProps> = ({ update }) => (
  <PageNavigator onClick={update}>
    <span tw="mr-4">Next {" →"}</span>
  </PageNavigator>
);
