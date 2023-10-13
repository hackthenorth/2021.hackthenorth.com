export type SlideProps = {
  imgSrc: string;
  key: any;
  description: string;
  onClick?: () => void;
  link: string;
  linkText: string;
  offsetRadius: number;
  animationConfig?: {
    tension?: number;
    friction?: number;
  };
  index: number;
};

export interface SponsorshipCarouselProps {
  slides: any;
  goToSlide: number;
  goToSlideDelay: number;
  offsetRadius: number;
  animationConfig: {
    tension?: number;
    friction?: number;
  };
}

export function getShortestDirection(
  from: number,
  to: number,
  slidesLength: number
): -1 | 0 | 1 {
  if (from > to) {
    if (from - to > slidesLength - 1 - from + to) {
      return 1;
    } else return -1;
  } else if (to > from) {
    if (to - from > from + slidesLength - 1 - to) {
      return -1;
    } else return 1;
  }
  return 0;
}
