import React, { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import { useHoverEvents, useDeviceSize } from "src/utils";
import { useReducedMotion } from "src/utils/hooks/useReducedMotion";
import { styled } from "twin.macro";

import { TextureProps, maskVariants, MaskVariant } from "./constants";

export type AnimationProps = React.ComponentPropsWithoutRef<"div"> &
  TextureProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    config: any;
    placeholder?: string;
    useCanvas?: boolean;
    height?: string | number;
    width?: string | number;
    isPaused?: boolean;
    loop?: boolean;
    speed?: number;
  };

const convert = (n: string | number | undefined) =>
  typeof n === "string" || n === undefined ? n : `${n}px`;

const Container = styled.span`
  position: relative;
  display: inline-block;
`;

const Animation: React.FC<AnimationProps> = ({
  config,
  height,
  width,
  speed,
  isPaused,
  placeholder,
  useCanvas = true,
  loop = true,
  texture,
  mask,
  ...rest
}) => {
  const [isPlaying, setIsPlaying] = useState(!isPaused);
  const [animationData, setAnimationData] = useState();
  const { onHoverStart, toggleHover } = useHoverEvents(setIsPlaying);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setAnimationData(config.animationData);
  }, [config.animationData]);

  return (
    <Container
      aria-hidden
      tw="h-full w-full"
      onMouseEnter={!isPlaying ? onHoverStart : undefined}
      onClick={toggleHover}
      {...rest}
    >
      {!animationData && placeholder ? (
        <img src={placeholder} alt="placeholder" />
      ) : (
        <TexturedAsset
          play={!isPaused && !prefersReducedMotion}
          speed={speed}
          texture={texture}
          mask={mask}
          animationData={config.animationData}
          tw="h-full w-full"
        />
      )}
    </Container>
  );
};

// only render texture mask if specified
const TexturedAsset = styled(Lottie)<TextureProps>`
  ${({ texture }) =>
    texture &&
    `
      -webkit-mask-image: url(${texture});
      -o-mask-image: url(${texture});
      -moz-mask-image: url(${texture});
      mask-image: url(${texture});
    `}
  ${({ mask }) =>
    mask &&
    `
      mask-image: ${maskVariants[mask as MaskVariant].maskImage};
      filter: ${maskVariants[mask as MaskVariant].filter};
    `}
`;

export default React.memo(Animation);
