import React, { useState, useEffect } from "react";
import { HouseRockImg, HouseImg } from "src/assets/img";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const Wrapper = styled.div`
  width: 100%;
`;

const HouseWrapper = styled.div`
  width: 20%;
  max-width: 200px;
  position: absolute;
  left: 70%;
  margin-top: max(-12.5vw, -200px);

  ${mediaQueries.medium} {
    margin-top: max(-12.5vw, -150px);
  }

  ${mediaQueries.largeMobile} {
    width: 30%;
    margin-top: -80px;
  }
`;

const RockWrapper = styled.div`
  z-index: 0;
  width: 40%;
  position: absolute;
  left: 60%;
  margin-top: -7vw;

  ${mediaQueries.largeMobile} {
    margin-top: -5vw;
    right: 0;
    left: auto;
    width: 80%;
  }

  ${mediaQueries.mobile} {
    margin-top: -50px;
  }
`;

const HouseIsland: React.FC = () => {
  const cutoff = 0.98;
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    function scrollListener() {
      const scrollpercent =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      setScrollPercentage(scrollpercent);
    }
  }, []);

  return (
    <Wrapper>
      <RockWrapper>
        <HouseRockImg />
      </RockWrapper>
      <HouseWrapper>
        <HouseImg lit={scrollPercentage >= cutoff} />
      </HouseWrapper>
    </Wrapper>
  );
};

export default React.memo(HouseIsland);
