import { DeviceType } from "src/constants/deviceBreakpoints";

export type LayoutProps = {
  height: string;
  width: string;
  hOffset: string;
  vOffset: string;
};

export const islandBreakpoints: Record<DeviceType, LayoutProps> = {
  large: {
    height: "615px",
    width: "615px",
    hOffset: "-1100px",
    vOffset: "150px",
  },
  medium: {
    height: "512px",
    width: "512px",
    hOffset: "-750px",
    vOffset: "250px",
  },
  tablet: {
    height: "425px",
    width: "425px",
    hOffset: "-500px",
    vOffset: "150px",
  },
  largeMobile: {
    height: "440px",
    width: "400px",
    hOffset: "-200px",
    vOffset: "0px",
  },
  mobile: {
    height: "277px",
    width: "277px",
    hOffset: "-400px",
    vOffset: "0px",
  },
  smallMobile: {
    height: "277px",
    width: "277px",
    hOffset: "-400px",
    vOffset: "200px",
  },
};
