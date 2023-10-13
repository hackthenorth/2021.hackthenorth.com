import { GradientText } from "src/components/base";
import tw, { styled } from "twin.macro";

export const Title = styled(GradientText)`
  ${tw`font-heading`}
  ${tw`text-68`}
  text-align: center;
  line-height: 1;
  margin-bottom: 10px;
`;

export const Subtitle = styled.div`
  ${tw`font-heading`}
  ${tw`text-24`}
  ${tw`text-blue`}
  text-align: center;
`;

export const BoatWrapper = styled.div`
  width: 200px;
  position: absolute;
  bottom: 20%;
`;

export const BobbleAnimation = styled.div`
  animation: boat 3s linear infinite;
  width: 100%;
  height: 100%;
`;

export const MoveAnimation = styled.div`
  animation: boatmove 80s linear infinite;
  animation-delay: -30s;
  width: 100%;
  height: 100%;
`;
