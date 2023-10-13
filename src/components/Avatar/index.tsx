import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface AvatarProps extends ComponentPropsWithoutRef<"img"> {
  name: string;
  size?: number;
  isSquare?: boolean;
  backgroundNum?: number;
}

interface AvatarWrapperProps {
  size: number;
}

interface AvatarImageProps {
  isSquare: boolean;
  backgroundColour: string;
}

const BACKGROUND_COLOURS = [
  "#1DC1CC",
  "#F4AC9E",
  "#0E3460",
  "#FFB45C",
  "#5ABCAA",
];

const AvatarWrapper = styled.div<AvatarWrapperProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const AvatarImage = styled.img<AvatarImageProps>`
  width: 100%;
  height: 100%;
  border-radius: ${({ isSquare }) => (isSquare ? "5px" : "50%")};
  background-color: ${({ backgroundColour }) => backgroundColour};
`;

const Avatar: React.FC<AvatarProps> = ({
  src,
  className,
  name,
  srcSet,
  size = 100,
  isSquare = false,
  backgroundNum = 0,
  ...rest
}) => (
  <>
    <AvatarWrapper className={className} size={size} {...rest}>
      <AvatarImage
        src={src}
        srcSet={srcSet}
        isSquare={isSquare}
        backgroundColour={BACKGROUND_COLOURS[backgroundNum]}
        alt={`Headshot of ${name}`}
      />
    </AvatarWrapper>
  </>
);

export default Avatar;
