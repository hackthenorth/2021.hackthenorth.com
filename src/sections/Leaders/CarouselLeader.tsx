import React from "react";
import { LeaderInfo } from "src/copy/leaders";
import { TWText, TWShared } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

export interface CarouselLeaderProps extends LeaderInfo {
  className?: string;
}

const Avatar = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  overflow: hidden;
  justify-content: start;
  align-items: center;

  ${mediaQueries.tablet} {
    width: 104px;
    height: 104px;
  }

  & > img {
    width: 100%;
  }
`;

const CarouselLeader: React.FC<CarouselLeaderProps> = ({
  name,
  title,
  src,
  srcSet,
  className,
}) => (
  <div
    tw="py-10 flex flex-col align-items[center] text-center h-256 w-160 tb:(w-128)"
    className={className}
  >
    <Avatar css={[TWShared.avatar]}>
      <img src={src} srcSet={srcSet} alt={`Headshot of ${name}`} />
    </Avatar>
    <p css={[TWText.label]} tw="font-bold mt-16">
      {name}
    </p>
    <p css={[TWText.label]} tw="leading-loose">
      {title}
    </p>
  </div>
);

export default CarouselLeader;
