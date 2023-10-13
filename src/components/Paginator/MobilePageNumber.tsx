import React from "react";
import tw, { styled, theme, css } from "twin.macro";

interface MobilePageNumberProps {
  number: number;
  length: number;
}

const Wrapper = styled.div`
  width: 60px;
  background: #ffffff;
  text-align: center;
  border: 1px solid #0e3460;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 5px;
`;

const MobilePageNumber: React.FC<MobilePageNumberProps> = ({
  number,
  length,
}) => {
  return (
    <Wrapper>
      {number}
      {" / "}
      {length}
    </Wrapper>
  );
};

export default MobilePageNumber;
