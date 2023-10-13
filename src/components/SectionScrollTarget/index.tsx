import { styled } from "twin.macro";

const SCROLL_OFFSET = -80;

const SectionScrollTarget = styled.div<{ offset?: number }>`
  position: relative;
  top: ${({ offset }) => offset || SCROLL_OFFSET}px;
`;

export default SectionScrollTarget;
