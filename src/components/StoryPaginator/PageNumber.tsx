import React from "react";
import { styled, css } from "twin.macro";

interface PageNumberProps {
  number: number;
  isSelected: boolean;
  setCurrentItem: () => void;
}

type VariantProperties = {
  background: string;
  color: string;
};

const variants: { [unit: string]: VariantProperties } = {
  selected: {
    background: "#093351",
    color: "white",
  },
  "selected.hover": {
    background: "#093351",
    color: "white",
  },
  unselected: {
    background: "none",
    color: "#828282",
  },
  "unselected.hover": {
    background: "#C8D9EB",
    color: "#093351",
  },
};

const StyledPageNumber = styled.span<{ variant: string; onClick?: any }>`
  margin: 0 5px;
  border-radius: 5px;
  padding: 4px 10px;
  cursor: pointer;
  outline: none;

  ${({ variant }) => {
    const computedVariant = variant || "unselected";
    return (
      variants[computedVariant] &&
      css`
        background: ${variants[computedVariant].background};
        color: ${variants[computedVariant].color};

        &:hover {
          background: ${variants[computedVariant + ".hover"].background};
          color: ${variants[computedVariant + ".hover"].color};
        }
      `
    );
  }}
`;

const PageNumber: React.FC<PageNumberProps> = ({
  number,
  isSelected,
  setCurrentItem,
}) => {
  return (
    <StyledPageNumber
      variant={isSelected ? "selected" : "unselected"}
      onClick={setCurrentItem}
    >
      {number}
    </StyledPageNumber>
  );
};

export default PageNumber;
