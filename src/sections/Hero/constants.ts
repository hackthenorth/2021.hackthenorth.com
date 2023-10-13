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
    hOffset: "-1050px",
    vOffset: "200px",
  },
  medium: {
    height: "512px",
    width: "512px",
    hOffset: "-700px",
    vOffset: "200px",
  },
  tablet: {
    height: "425px",
    width: "425px",
    hOffset: "-500px",
    vOffset: "150px",
  },
  largeMobile: {
    height: "277px",
    width: "277px",
    hOffset: "-300px",
    vOffset: "100px",
  },
  mobile: {
    height: "277px",
    width: "277px",
    hOffset: "-400px",
    vOffset: "100px",
  },
  smallMobile: {
    height: "277px",
    width: "277px",
    hOffset: "-400px",
    vOffset: "100px",
  },
};
