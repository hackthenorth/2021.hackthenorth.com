import React from "react";
import { styled } from "twin.macro";
import { LeftArrow, RightArrow } from "./SideArrow";

//TODO: fix spacing
const PageNavigator = styled.span<{ onClick?: any }>`
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    background-color: #c8d9eb;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const PageBack = ({ handleClick }: any) => (
  <PageNavigator onClick={handleClick}>
    <span tw="ml-10">{"← "}Back</span>
  </PageNavigator>
);

export const PageNext = ({ handleClick }: any) => (
  <PageNavigator onClick={handleClick}>
    <span tw="mr-10">Next {" →"}</span>
  </PageNavigator>
);
