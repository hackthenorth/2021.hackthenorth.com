# FAQ

## Tech Stack

### [NextJS](https://nextjs.org/)

// WIP

### [TailwindCSS](https://tailwindcss.com/)

- Our primary styling library and a reflection of our design system
- Tailwind defines a set of granular styles via the config which you're able to reuse. So if you want to add a new font, color, spacing etc... Add it to the config!
- If you have any questions [read the docs](https://tailwindcss.com/) first

#### Caveats

- If your tailwind styles aren't working and your config is correct, try deleting your NextJS cache

**Examples**

```
// BIG WIP

/* Basics */

/* Responsiveness */


```

### [Emotion](https://emotion.sh/docs/introduction)

- Secondary styling library
- Only use when using Tailwind will be too convoluted
- Checkout a comprehensive list of [Emotion features here](https://emotion.sh/docs/object-styles#examples)!

**Examples**

```typescript
import styled from "@emotion/styled";
import { css } from "@emotion/react";

/* Using styled */
const ButtonA = styled.button`
  color: turquoise;
`;
const ButtonB = styled(ButtonA)`
  color: pink;
`;
const ButtonC = () => <ButtonB />; // ❌
const ButtonC = ({ className }) => <ButtonB className={className} />; // ✔️ Reasoning: https://emotion.sh/docs/styled#styling-any-component

const ButtonD = styled(ButtonC)`
  color: white;
`;

/* Using css */
const staticStyle = css`
  color: ${props.color};
`;
const dynamicStyle = (props) =>
  css`
    color: ${props.color};
  `;

/* Passing props */
const Button = styled.button<{ primary: string }>`
  color: ${(props) => (props.primary ? "hotpink" : "turquoise")};
`;
```

### [twin.macro](https://github.com/ben-rogerson/twin.macro)

- Our all-in-one tool that combines TailwindCSS + Emotion. Instead of the Tailwind syntax above, we can use the `tw` prop!
- `tw` replaces `css` and `styled` is also exported from `twin.macro`
- Check out twin's [special features here](https://github.com/ben-rogerson/twin.macro#features)!

**Examples**

```typescript
import tw, { styled, TwStyle } from "twin.macro";

/* Basic Styling */
const Column = <div tw="w-1/2"></div>;
const Column = tw.div`w-1/2`;
const Column = styled.div`
  ${tw`w-1/2`}
`; // pls don't do this

/* Conditional Styling */
const Component = ({ hasBg }) => (
  <div css={[hasBg ? tw`bg-black` : tw`bg-white`]} />
);
const Component = styled.div(({ hasBg }) => [
  hasBg ? tw`bg-black` : tw`bg-white`,
]);

/* Typed Styling in Objects*/
export type THeading = "h1" | "h2" | "h3";

export const TW: Record<THeading, TwStyle> = {
  h1: tw`font-heading font-weight[700] text-blue tablet:(text-3xl) text-2xl`,
  h2: tw`font-heading font-weight[700] text-blue tablet:(text-2xl) text-xl`,
  h3: tw`font-heading font-weight[700] text-blue tablet:(text-xl) text-sm`,
};

const Component = () => <h1 css={[TW.h1]}>{title}</h1>;
```

**Resources**

- [🔥 The prop styling guide](https://github.com/ben-rogerson/twin.macro/blob/master/docs/prop-styling-guide.md) - A must-read guide to level up on prop styling
- [🔥 The styled component guide](https://github.com/ben-rogerson/twin.macro/blob/master/docs/styled-component-guide.md) - A must-read guide on getting productive with styled-components
