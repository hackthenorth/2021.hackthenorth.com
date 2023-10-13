import React, { useMemo } from "react";
import {
  BackIcon,
  CheckmarkIcon,
  CopyrightIcon,
  ExpandIcon,
  FacebookIcon,
  ForwardIcon,
  InstagramIcon,
  LinkedinIcon,
  MediumIcon,
  PlayIcon,
  SendIcon,
  TwitterIcon,
  LogoIconDarkIcon,
  CrossIcon,
  ForwardWhiteIcon,
} from "src/assets/icons";

export type IconName =
  | "back"
  | "checkmark"
  | "copyright"
  | "expand"
  | "facebook"
  | "forward"
  | "instagram"
  | "linkedin"
  | "medium"
  | "play"
  | "send"
  | "twitter"
  | "logo"
  | "cross"
  | "forward-white";

export interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
  name: IconName;
  color?: string;
  /**
   * Pass in the name of a globalConstant fontSize value or a css value. Defaults to `bodyBig` size.
   */
  size?: string;
}

const NAME_TO_ICON_MAP: Record<IconName, string> = {
  back: BackIcon,
  checkmark: CheckmarkIcon,
  copyright: CopyrightIcon,
  expand: ExpandIcon,
  facebook: FacebookIcon,
  forward: ForwardIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  medium: MediumIcon,
  play: PlayIcon,
  send: SendIcon,
  twitter: TwitterIcon,
  logo: LogoIconDarkIcon,
  cross: CrossIcon,
  "forward-white": ForwardWhiteIcon,
};

const Icon: React.FC<IconProps> = ({ name, color, ...rest }) => {
  const IconSVG = useMemo(() => NAME_TO_ICON_MAP[name], [name]);

  if (!IconSVG) console.warn(`Invalid icon name: ${name}`);

  return IconSVG ? <IconSVG fill={color} {...rest} /> : null;
};

export default Icon;
