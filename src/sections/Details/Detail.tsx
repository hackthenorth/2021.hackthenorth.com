import debounce from "lodash.debounce";
import React, { useState, useEffect } from "react";
import { Collapsible } from "src/components";
import { Flex } from "src/components/base";
import { TWText } from "src/styles";
import { useMounted, useDeviceSize } from "src/utils";
import tw, { styled, theme } from "twin.macro";

interface DetailHeaderProps {
  clicked: boolean;
}

const DetailHeaderText = styled.h2<DetailHeaderProps>`
  ${TWText.h3}
  ${tw`z-50`}
  color: ${({ clicked }) =>
    clicked
      ? theme`colors.primary.blue1`
      : theme`colors.secondary[detail-blue]`};
  cursor: pointer;
`;

interface DetailProps {
  onClick: (header: string, index: number) => void;
  header: string;
  body: string;
  clicked: boolean;
  index: number;
}

const getHeight = (id: string) => {
  const el = document.getElementById(id);
  return el ? el.scrollHeight : 100;
};

const Detail: React.FC<DetailProps> = ({
  onClick,
  header,
  body,
  clicked,
  index,
}) => {
  const [height, setHeight] = useState(0);
  const mounted = useMounted();
  const debouncedSetHeight = debounce(() => setHeight(getHeight(body)), 250);
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  useEffect(() => {
    if (mounted) {
      setHeight(getHeight(body));
      window.addEventListener("resize", debouncedSetHeight);
    }

    return () => {
      window.removeEventListener("resize", debouncedSetHeight);
    };
  }, [mounted, body, debouncedSetHeight]);

  return (
    <Flex
      column={true}
      justify="center"
      align={isLargeMobileOrSmaller ? "center" : "start"}
    >
      <DetailHeaderText
        onClick={() => onClick(header, index)}
        clicked={clicked}
      >
        {header}
      </DetailHeaderText>
      <Collapsible
        id={body}
        isOpen={clicked}
        height={height}
        tw="mt-10 max-w-screen-md lm:mr-16 lm:ml-16 lm:mt-4"
      >
        <div css={[TWText.body, tw`lm:text-align[center]`]}>{body}</div>
      </Collapsible>
    </Flex>
  );
};

export default Detail;
