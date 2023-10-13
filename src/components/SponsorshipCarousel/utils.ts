import { SlideProps } from "./types";

export function mod(a: number, b: number): number {
  return ((a % b) + b) % b;
}

export const modBySlidesLength = (
  index: number,
  slidesLength: number
): number => {
  return mod(index, slidesLength);
};

export function getPresentableSlides(props: any, index: number): SlideProps[] {
  const { slides } = props;
  let { offsetRadius } = props;
  offsetRadius = clampOffsetRadius(offsetRadius, slides.length);
  const presentableSlides: SlideProps[] = [];

  for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
    presentableSlides.push(
      slides[modBySlidesLength(index + i, props.slides.length)]
    );
  }

  return presentableSlides;
}

export function clampOffsetRadius(
  offsetRadius: number,
  slidesLength: number
): number {
  const upperBound = Math.floor((slidesLength - 1) / 2);

  if (slidesLength === 2) {
    return 1;
  }

  if (offsetRadius < 0) {
    return 0;
  }
  if (offsetRadius > upperBound) {
    return upperBound;
  }

  return offsetRadius;
}
