import React from "react";
import { Icon } from "src/components/base";
import { TWText, TWGradient } from "src/styles";
import "twin.macro";
import { styled } from "twin.macro";

const Grid = styled.div`
  /* Grid Fallback */
  display: flex;
  flex-wrap: wrap;

  /* Supports Grid */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 1em;
`;

const Card = styled.div`
  width: 350px;
  height: 200px;
`;

const Colors: React.FC = (props) => (
  <div {...props}>
    <h1 css={[TWText.h1]} tw="mb-24">
      Color Palette
    </h1>
    <h2 css={[TWText.h2]} tw="mb-24">
      Primary
    </h2>
    <Grid tw="mb-32">
      <Card tw="rounded-4 bg-primary-blue1 flex justify-center align-items[center]">
        <p css={[TWText.h3]} tw="text-white">
          Primary Blue1
        </p>
      </Card>

      <Card tw="rounded-4 bg-primary-blue2 flex justify-center align-items[center]">
        <p css={[TWText.h3]} tw="text-white">
          Primary Blue2
        </p>
      </Card>

      <Card tw="rounded-4 bg-primary-blue3 flex justify-center align-items[center]">
        <p css={[TWText.h3]} tw="text-white">
          Primary Blue3
        </p>
      </Card>
    </Grid>
    <h2 css={[TWText.h2]} tw="mb-24">
      Secondary
    </h2>
    <Grid tw="mb-32">
      <Card tw="rounded-4 bg-secondary-mustard flex justify-center align-items[center]">
        <p css={[TWText.h3]} tw="text-white">
          Secondary Mustard
        </p>
      </Card>

      <Card tw="rounded-4 bg-secondary-brown flex justify-center align-items[center]">
        <p css={[TWText.h3]} tw="text-white">
          Secondary Brown
        </p>
      </Card>

      <Card tw="rounded-4 bg-secondary-blush flex justify-center align-items[center]">
        <p css={[TWText.h3]} tw="text-white">
          Secondary Blush
        </p>
      </Card>

      <Card tw="rounded-4 bg-secondary-green flex justify-center align-items[center]">
        <p css={[TWText.h3]} tw="text-white">
          Secondary Green
        </p>
      </Card>

      <Card tw="rounded-4 bg-secondary-red flex justify-center align-items[center]">
        <p css={[TWText.h3]} tw="text-white">
          Secondary Red
        </p>
      </Card>
      <Card tw="rounded-4 bg-secondary-pink flex justify-center align-items[center]">
        <p css={[TWText.h3]} tw="text-white">
          Secondary Pink
        </p>
      </Card>
      <Card tw="rounded-4 bg-secondary-white flex justify-center align-items[center]">
        <p css={[TWText.h3]}>Secondary White</p>
      </Card>
      <Card tw="rounded-4 bg-secondary-blue flex justify-center align-items[center]">
        <p css={[TWText.h3]}>Secondary Blue</p>
      </Card>
      <Card tw="rounded-4 bg-secondary-light-blue flex justify-center align-items[center]">
        <p css={[TWText.h3]}>Secondary Light Blue</p>
      </Card>
    </Grid>
    <h2 css={[TWText.h2]} tw="mb-24">
      Gradients
    </h2>
    <Grid tw="mb-32">
      <Card
        tw="rounded-4 flex justify-center align-items[center]"
        css={[TWGradient.hero]}
      >
        <p css={[TWText.h3]}>Hero Gradient</p>
      </Card>
      <Card
        tw="rounded-4 flex justify-center align-items[center]"
        css={[TWGradient.about]}
      >
        <p css={[TWText.h3]}>About Gradient</p>
      </Card>

      <Card
        tw="rounded-4 flex justify-center align-items[center]"
        css={[TWGradient.details]}
      >
        <p css={[TWText.h3]}>Details Gradient</p>
      </Card>

      <Card
        tw="rounded-4 flex justify-center align-items[center]"
        css={[TWGradient.stories]}
      >
        <p css={[TWText.h3]}>Stories Gradient</p>
      </Card>
      <Card
        tw="rounded-4 flex justify-center align-items[center]"
        css={[TWGradient.projects]}
      >
        <p css={[TWText.h3]}>Projects Gradient</p>
      </Card>
      <Card
        tw="rounded-4 flex justify-center align-items[center]"
        css={[TWGradient.leaders]}
      >
        <p css={[TWText.h3]}>Leaders Gradient</p>
      </Card>
      <Card
        tw="rounded-4 flex justify-center align-items[center]"
        css={[TWGradient.sponsorShowcase]}
      >
        <p css={[TWText.h3]} tw="text-center">
          Sponsor Showcase Gradient
        </p>
      </Card>
      <Card
        tw="rounded-4 flex justify-center align-items[center]"
        css={[TWGradient.sponsorLogos]}
      >
        <p css={[TWText.h3]}>Sponsor Logos Gradient</p>
      </Card>
      <Card
        tw="rounded-4 flex justify-center align-items[center]"
        css={[TWGradient.faq]}
      >
        <p css={[TWText.h3]}>FAQ Gradient</p>
      </Card>
      <Card
        tw="rounded-4 flex justify-center align-items[center]"
        css={[TWGradient.footer]}
      >
        <p css={[TWText.h3]}>Footer Gradient</p>
      </Card>
    </Grid>
  </div>
);

export default Colors;
