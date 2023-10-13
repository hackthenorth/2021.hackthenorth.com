import debounce from "lodash.debounce";
import React, { useState, useEffect } from "react";
import { TWText } from "src/styles";
import { useMounted } from "src/utils/hooks/useMounted";
import { styled } from "twin.macro";

import Arrow from "./Arrow";
export interface QuestionAnswer {
  question: string;
  /* since an answer can be a link, text or something
   * else, we can use React.ReactNode to handle all
   * the different types of answers
   */
  answer: React.ReactNode;
}

export interface AccordionProps
  extends QuestionAnswer,
    React.ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
  handleOnClick: () => void;
}

export interface CollapsibleProps {
  isOpen: boolean;
  height: number; // height of the collapsible
}

export const Collapsible = styled.div<CollapsibleProps>`
  overflow: hidden;
  transition: height 0.3s ease-out;
  height: ${(props: CollapsibleProps) => (props.isOpen ? props.height : "0")}px;
`;

const getHeight = (id: string) => {
  const el = document.getElementById(id);
  return el ? el.scrollHeight : 100;
};

export const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  isOpen,
  handleOnClick,
  ...rest
}) => {
  const [height, setHeight] = useState(0);
  const mounted = useMounted();

  // delays setting height by 250 miliseconds
  const debouncedSetHeight = debounce(
    () => setHeight(getHeight(question)),
    250
  );

  useEffect(() => {
    if (mounted) {
      setHeight(getHeight(question));
      window.addEventListener("resize", debouncedSetHeight);

      return () => {
        window.removeEventListener("resize", debouncedSetHeight);
      };
    }
  }, [question, debouncedSetHeight, mounted]);

  const questionAsArray = question.split(" ");
  const questionLastWord = questionAsArray.slice(-1)[0];
  const questionMinusLastWord = questionAsArray.slice(0, -1).join(" ");

  return (
    <div tw="mb-40" {...rest}>
      {/* eslint-disable */}
      <p
        css={[TWText.bodyBold]}
        tw="mb-8 cursor-pointer"
        onClick={handleOnClick}
        tabIndex={0}
        onKeyPress={(e: React.KeyboardEvent) => {
          if (e.charCode === 13) {
            handleOnClick();
          }
        }}
      >
        {questionMinusLastWord}{" "}
        <span tw="whitespace-nowrap">
          {questionLastWord}
          <Arrow isOpen={isOpen} />
        </span>
      </p>
      <Collapsible isOpen={isOpen} height={height}>
        <p id={question} css={[TWText.body]}>
          {answer}
        </p>
      </Collapsible>
    </div>
  );
};
export default Accordion;
