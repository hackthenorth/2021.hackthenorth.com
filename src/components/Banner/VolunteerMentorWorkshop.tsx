import React, { useState } from "react";
import { Link } from "src/components/base/Link";
import { TWText } from "src/styles";
import { useDeviceSize } from "src/utils/hooks/useDeviceSize";
import { mediaQueries } from "src/utils/responsive";
import styled from "styled-components";

import Banner from "./index";

const StyledFlex = styled.div`
  ${mediaQueries.largeMobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const VolunteerMentorWorkshopBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  return (
    <Banner show={showBanner} toggleShow={() => setShowBanner(false)}>
      <StyledFlex>
        <span css={[TWText.body]}>
          Organizer Applications for Hack the North 2022 are now{" "}
          <Link css={[TWText.bodyBold, TWText.link]} href="/join">
            open
          </Link>
          !
        </span>
      </StyledFlex>
    </Banner>
  );
};

export default VolunteerMentorWorkshopBanner;
