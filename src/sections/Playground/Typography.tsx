import React from "react";
import { TWText } from "src/styles";
import "twin.macro";

const Typography: React.FC = (props) => (
  <div {...props}>
    <h1 css={[TWText.title]} tw="mb-8">
      Typography
    </h1>
    <h2 css={[TWText.h1]} tw="mb-8">
      Heading1
    </h2>
    <h3 css={[TWText.h2]} tw="mb-8">
      Heading2
    </h3>
    <h4 css={[TWText.h3]} tw="mb-8">
      Heading3
    </h4>
    <h5 css={[TWText.h4]} tw="mb-8">
      Heading4
    </h5>
    <p css={[TWText.body]} tw="mb-8">
      body1
    </p>
    <p css={[TWText.bodyBold]} tw="mb-8">
      body bold
    </p>
    <p css={[TWText.body]} tw="mb-8">
      body
    </p>
    <p css={[TWText.cta]} tw="mb-8">
      CTA Label
    </p>
    <p css={[TWText.label]} tw="mb-8">
      label
    </p>
  </div>
);

export default Typography;
