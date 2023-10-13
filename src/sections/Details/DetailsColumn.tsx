import React from "react";
import { mediaQueries } from "src/utils";
import tw, { styled } from "twin.macro";

import Detail from "./Detail";

import { DetailType } from "./index";

interface DetailColumnProps {
  copy: DetailType[];
  selectedIndex: number;
  onClick: (header: string, index: number) => void;
}

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${tw`flex flex-col items-start`}
  ${mediaQueries.medium} {
    align-items: flex-center;
    margin-top: -60px;
  }
  ${mediaQueries.medium} {
    margin-top: -40px;
  }
  ${mediaQueries.mobile} {
    margin-top: -20px;
  }
`;

const DetailsColumn: React.FC<DetailColumnProps> = ({
  selectedIndex,
  copy,
  onClick,
}) => {
  return (
    <DetailsContainer>
      {copy.map(({ header, body }, i) => (
        <div tw="mt-10 mb-10 md:mt-16 md:mb-16 lm:mb-8 lm:mt-8" key={header}>
          <Detail
            onClick={onClick}
            index={i}
            header={header}
            body={body}
            clicked={selectedIndex == i}
          />
        </div>
      ))}
    </DetailsContainer>
  );
};

export default DetailsColumn;
