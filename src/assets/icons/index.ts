/**
 * Export all images as modules so that webpack can deal with them appropriately
 * and in one file so that we have a centralized reference to all the images.
 * This means we only have to change one path and not all files that are using
 * that image if we change the src of the image.
 */

/* Base icons */
export { default as BackIcon } from "./base/back.svg";
export { default as CheckmarkIcon } from "./base/checkmark.svg";
export { default as CopyrightIcon } from "./base/copyright.svg";
export { default as ExpandIcon } from "./base/expand.svg";
export { default as ForwardIcon } from "./base/forward.svg";
export { default as PlayIcon } from "./base/play.svg";
export { default as SendIcon } from "./base/send.svg";
export { default as CrossIcon } from "./base/x.svg";
export { default as ForwardWhiteIcon } from "./base/forward-white.svg";

/* Social icons */
export { default as FacebookIcon } from "./social/facebook.svg";
export { default as InstagramIcon } from "./social/instagram.svg";
export { default as LinkedinIcon } from "./social/linkedin.svg";
export { default as MediumIcon } from "./social/medium.svg";
export { default as TwitterIcon } from "./social/twitter.svg";

export { default as LogoIconDarkIcon } from "./logos/icon-dark.svg";
