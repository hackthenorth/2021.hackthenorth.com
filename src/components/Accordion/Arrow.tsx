import React from "react";
import { Icon } from "src/components/base";
import { styled } from "twin.macro";

interface ArrowProps {
  isOpen: boolean;
}

const StyledIcon = styled(Icon)<ArrowProps>`
    top: 6px;
    position: relative;
    transform: rotate(${({ isOpen }) => (isOpen ? 180 : 0)}deg);
    transition: transform 0.3s ease;
}`;

const Arrow: React.FC<ArrowProps> = ({ isOpen }) => (
  <span tw="inline-block ml-10">
    <StyledIcon name="expand" isOpen={isOpen} width={24} height={24} />
  </span>
);

export default Arrow;
