import { useState, useEffect } from "react";
import { useMounted } from "src/utils/hooks/useMounted";

export enum ScrollDirection {
  UP = "up",
  DOWN = "down",
}

/**
 * A hook that provides the last direction
 * that the page has been scrolled in.
 */
export const useScrollDirection = ({
  initialDirection = ScrollDirection.UP,
  thresholdPixels = 50,
  off = false,
} = {}): ScrollDirection => {
  const [scrollDir, setScrollDir] = useState(initialDirection);
  const mounted = useMounted();

  useEffect(() => {
    if (mounted) {
      const threshold = thresholdPixels || 0;
      let lastScrollY = window.pageYOffset;
      let ticking = false;

      const updateScrollDir = () => {
        const scrollY = window.pageYOffset;

        if (Math.abs(scrollY - lastScrollY) < threshold) {
          // We haven't exceeded the threshold
          ticking = false;
          return;
        }

        const hasScrolledDown = scrollY > lastScrollY;
        setScrollDir(
          hasScrolledDown ? ScrollDirection.DOWN : ScrollDirection.UP
        );

        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      };

      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDir);
          ticking = true;
        }
      };

      /**
       * Bind the scroll handler if `off` is set to false.
       * If `off` is set to true reset the scroll direction.
       */
      !off
        ? window.addEventListener("scroll", onScroll)
        : setScrollDir(initialDirection);

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [initialDirection, thresholdPixels, off, mounted]);

  return scrollDir;
};
