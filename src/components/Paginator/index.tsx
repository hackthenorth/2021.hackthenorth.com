import React, { useState } from "react";
import { useDeviceSize } from "src/utils";
import tw, { theme } from "twin.macro";

import MobilePageNumber from "./MobilePageNumber";
import { PageBack, PageNext } from "./PageNavigator";
import PageNumber from "./PageNumber";

export interface PaginatorProps {
  items: any[];
  currentItem: number;
  setCurrentItem: (currentItem: number) => void;
  moveSlide: (direction: -1 | 1) => void;
  setGearDirection: (number: -0.75 | 0.75) => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  items,
  currentItem,
  setCurrentItem,
  setGearDirection,
  moveSlide,
  ...rest
}) => {
  const getIsSelected = (index: number): boolean => {
    return index === currentItem;
  };

  const isMobile = useDeviceSize("largeMobile");

  const handleBackClick = () => {
    moveSlide(-1);
    setGearDirection(-0.75);
  };

  const handleForwardClick = () => {
    moveSlide(1);
    setGearDirection(0.75);
  };

  return (
    <div tw="flex flex-col items-center">
      {isMobile ? (
        <div tw="flex flex-row items-center mt-28">
          <PageBack handleClick={() => moveSlide(-1)} />
          <MobilePageNumber
            key={currentItem}
            number={currentItem + 1}
            length={items.length}
          />
          <PageNext handleClick={() => moveSlide(1)} />
        </div>
      ) : (
        <div tw="flex flex-row">
          <PageBack handleClick={handleBackClick} />
          <div tw="inline-block">
            {items.map((item, index) => (
              <PageNumber
                key={index}
                number={index + 1}
                isSelected={getIsSelected(index)}
                setCurrentItem={() => setCurrentItem(index)}
              />
            ))}
          </div>
          <PageNext handleClick={handleForwardClick} />
        </div>
      )}
    </div>
  );
};
export default Paginator;
