import React from "react";
import { Icon } from "src/components/base";
import { TWText } from "src/styles";
import "twin.macro";
import { styled } from "twin.macro";

const Grid = styled.div`
  /* Grid Fallback */
  display: flex;
  flex-wrap: wrap;

  /* Supports Grid */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  grid-auto-rows: minmax(30px, auto);
  grid-gap: 1em;
`;

const IconLibrary: React.FC = (props) => (
  <div {...props}>
    <h1 css={[TWText.title]} tw="mb-8">
      Icon Library
    </h1>
    <Grid>
      <Icon name="back" width={24} height={24} />
      <Icon name="checkmark" width={24} height={24} />
      <Icon name="copyright" width={24} height={24} />
      <Icon name="expand" width={24} height={24} />
      <Icon name="facebook" width={24} height={24} />
      <Icon name="forward" width={24} height={24} />
      <Icon name="instagram" width={24} height={24} />
      <Icon name="linkedin" width={24} height={24} />
      <Icon name="medium" width={24} height={24} />
      <Icon name="play" width={24} height={24} />
      <Icon name="send" width={24} height={24} />
      <Icon name="twitter" width={24} height={24} />
    </Grid>
  </div>
);

export default IconLibrary;
