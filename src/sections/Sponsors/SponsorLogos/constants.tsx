import { Sponsor, SponsorType, SPONSORS_LIST } from "src/copy/sponsors";

const sponsorsFilteredByTier = (tier: Sponsor["tier"]) =>
  SPONSORS_LIST.filter((s) => s.tier === tier);

export const SPONSORS = Object.values(SponsorType).reduce(
  (acc, curTier: SponsorType) => {
    acc[curTier] = sponsorsFilteredByTier(curTier);
    return acc;
  },
  {} as Record<SponsorType, Sponsor[]>
);

export const PARTNERS = sponsorsFilteredByTier(SponsorType.PARTNER);

export const PAST_SPONSORS = sponsorsFilteredByTier(SponsorType.PAST);

export const MOBILE_SCALE = 0.8;

const BASE_MARGIN = "8px 32px";

export const SPONSOR_TIER_LIST = [
  {
    sponsors: SPONSORS[SponsorType.GOLD],
    height: 300,
    heightMobile: 300 * MOBILE_SCALE,
    margin: "32px 20%",
    marginMobile: "5% 10%",
    // containerMargin: "64px 0 0",
    containerMargin: "0", // TEMP since we currently have no gold sponsors
  },
  {
    sponsors: SPONSORS[SponsorType.SILVER],
    height: 176,
    heightMobile: 176 * MOBILE_SCALE,
    margin: BASE_MARGIN,
    marginMobile: BASE_MARGIN,
    containerMargin: "64px 0 0",
  },
  {
    sponsors: SPONSORS[SponsorType.BRONZE],
    height: 96,
    heightMobile: 96 * MOBILE_SCALE,
    margin: BASE_MARGIN,
    marginMobile: BASE_MARGIN,
    containerMargin: "48px 0 0",
  },
  {
    sponsors: SPONSORS[SponsorType.STARTUP],
    height: 64,
    heightMobile: 64 * MOBILE_SCALE,
    margin: BASE_MARGIN,
    marginMobile: BASE_MARGIN,
    containerMargin: "48px 0 0",
  },
];

export const PARTNERS_SECTION = {
  height: 80,
  heightMobile: 80 * MOBILE_SCALE,
  margin: BASE_MARGIN,
  marginMobile: BASE_MARGIN,
  containerMargin: "64px 0 0",
};
