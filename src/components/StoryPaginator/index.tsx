import React, { useState } from "react";
import { StoryInfo } from "src/copy/stories";

import Story from "../Story/Story";

import { PageBack, PageNext } from "./PageNavigator";
import PageNumber from "./PageNumber";

import "twin.macro";
import { useDeviceSize } from "src/utils";

import MobilePageNumber from "../Paginator/MobilePageNumber";

export interface PaginatorProps {
  items: StoryInfo[];
}

const Paginator: React.FC<PaginatorProps> = ({ items, ...rest }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const isMobile = useDeviceSize("largeMobile");

  const getIsSelected = (index: number): boolean => {
    return index === currentItem;
  };

  const pageBack = () => {
    currentItem === 0
      ? setCurrentItem(items.length - 1)
      : setCurrentItem(currentItem - 1);
  };

  const pageNext = () => {
    currentItem === items.length - 1
      ? setCurrentItem(0)
      : setCurrentItem(currentItem + 1);
  };

  return (
    <div tw="flex flex-col items-center mb-24">
      <Story
        name={items[currentItem].name}
        title={items[currentItem].title}
        story={items[currentItem].story}
        imgSrc={items[currentItem].imgSrc}
      />
      <div tw="mt-48 lm:(mt-24) text-center">
        {isMobile ? (
          <div tw="flex flex-row items-center mt-28">
            <PageBack update={pageBack} />
            <MobilePageNumber
              key={currentItem}
              number={currentItem + 1}
              length={items.length}
            />
            <PageNext update={pageNext} />
          </div>
        ) : (
          <div tw="flex flex-row">
            <div tw="inline-block select-none">
              <PageBack update={pageBack} />
              {items.map((_, index) => (
                <PageNumber
                  key={index}
                  number={index + 1}
                  isSelected={getIsSelected(index)}
                  setCurrentItem={() => setCurrentItem(index)}
                />
              ))}
              <PageNext update={pageNext} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Paginator;
