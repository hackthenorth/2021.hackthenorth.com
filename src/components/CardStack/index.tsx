import { motion } from "framer-motion";
import React from "react";
import { DetailType } from "src/sections/Details";
import { styled } from "twin.macro";

interface Props {
  scale_factor?: number;
  card_offset?: number;
  moveToEnd: () => void;
  cards: DetailType[];
}

const OVERLAYS = [
  "linear-gradient(180deg, #304159 -28.82%, rgba(255, 255, 255, 0) 100%)",
  "linear-gradient(180deg, #1E5983 0%, rgba(255, 255, 255, 0) 100%)",
  "linear-gradient(180deg, #43AFDE 0%, rgba(255, 255, 255, 0) 100%)",
  "linear-gradient(180deg, #C8D9EB 0%, rgba(255, 255, 255, 0) 100%)",
];

const CardImage = styled.div<{ image: string; overlay: string }>`
  background: ${({ image, overlay }) =>
    `${overlay}, url(${image}) no-repeat center center`};
  background-size: contain;
  border-radius: 10px;
  /* hack to hardcode the aspect ratio lol */
  padding-bottom: ${(373 / 638) * 100}%;
  width: 100%;
`;

const CardStack: React.FC<Props> = ({
  scale_factor = 0.06,
  card_offset = 10,
  cards,
  moveToEnd,
}) => {
  return (
    <div tw="relative w-480 h-480 lm:(w-360 h-360) mb:(w-240 h-240)">
      {cards.map(({ header, image, alt }, index) => {
        const drag = index === 0; // can only drag front-most card
        return (
          <motion.div
            key={header}
            tw="absolute w-full h-full origin-center md:(w-480 h-480) lm:(w-360 h-360) mb:(w-240 h-240)"
            style={{
              cursor: drag ? "grab" : "auto",
            }}
            animate={{
              top: index * -card_offset * 3,
              scale: 1 - index * scale_factor, // makes cards look increasingly smaller
              zIndex: cards.length - index, // cards in front have higher zIndex (lower index)
            }}
            drag={drag ? "y" : false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            onDragEnd={() => moveToEnd()}
          >
            <div tw="flex justify-center items-center h-full w-full">
              <CardImage
                image={image}
                overlay={OVERLAYS[index]}
                role="img"
                aria-label={alt}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CardStack;
