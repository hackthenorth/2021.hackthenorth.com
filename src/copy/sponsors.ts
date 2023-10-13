import {
  CitadelLogo,
  RBCLogo,
  ContraryLogo,
  DropbaseBlackLogo,
  IMCLogo,
  LoyaltyOneLogo,
  LunchclubLogo,
  OTPPLogo,
  TechyonLogo,
  UbisoftLogo,
  ValidereLogo,
  CANSOFCOMLogo,
  WaterlooEngineeringLogo,
  WaterfrontLogo,
  DRWLogo,
  NEXTLogo,
  ACVLogo,
  FaireLogo,
  GoogleLogo,
  FirebaseLogo,
  HootsuiteLogo,
  GenesysLogo,
  HOTGLogo,
  WaterlooMathLogo,
  CiscoLogo,
  D2LLogo,
  CashFlowLogo,
  CockroachLabsLogo,
  LoblawDigitalLogo,
  ProfoundImpactLogo,
  IBMLogo,
  FacebookLogo,
  CodaLogo,
  WaterlooLogo,
  AlgorandLogo,
  HypotenuseLabsLogo,
  VoiceflowLogo,
  FigmaLogo,
  CommunitechLogo,
  PGLogo,
  DeloitteLogo,
  MicrosoftLogo,
  TunedLogo,
  CGILogo,
  CashAppLogo,
} from "src/assets/img";

export const SHOW_SPONSORS = true;

export const SHOW_PAST_SPONSORS = false;

export interface Sponsor {
  name: string;
  tier: SponsorType;
  imgSrc: string;
  link: string;
  padding: number;
  feature?: {
    text: string;
    link: string;
    linkLabel: string;
  };
}

export enum SponsorType {
  GOLD = "gold",
  SILVER = "silver",
  BRONZE = "bronze",
  STARTUP = "startup",
  PARTNER = "partner",
  PAST = "past",
}

export const SPONSORS_LIST: Sponsor[] = [
  {
    name: "Hootsuite",
    tier: SponsorType.GOLD,
    imgSrc: HootsuiteLogo,
    link: "https://careers.hootsuite.com/global/en",
    padding: 0,
  },
  {
    name: "Loblaw Digital",
    tier: SponsorType.GOLD,
    imgSrc: LoblawDigitalLogo,
    link: "https://www.loblawdigital.co/",
    padding: 0,
  },
  {
    name: "Cockroach Labs",
    tier: SponsorType.SILVER,
    imgSrc: CockroachLabsLogo,
    link: "https://www.cockroachlabs.com/",
    padding: 0,
  },
  {
    name: "RBC",
    tier: SponsorType.SILVER,
    imgSrc: RBCLogo,
    link: "https://www.rbc.com/",
    padding: 0,
  },
  {
    name: "Lunchclub",
    tier: SponsorType.SILVER,
    imgSrc: LunchclubLogo,
    link: "https://lunchclub.com/?invite_code=htn2021",
    padding: 0,
  },
  {
    name: "CANSOFCOM",
    tier: SponsorType.SILVER,
    imgSrc: CANSOFCOMLogo,
    link: "https://www.canada.ca/en/special-operations-forces-command.html",
    padding: 0,
  },
  {
    name: "Cisco",
    tier: SponsorType.SILVER,
    imgSrc: CiscoLogo,
    link: "https://www.cisco.com/c/en/us/about/careers.html",
    padding: 35,
  },
  {
    name: "Facebook",
    tier: SponsorType.SILVER,
    imgSrc: FacebookLogo,
    link: "https://www.facebook.com/careers/students-and-grads/?p[teams][0]=Internship%20-%20Engineering%2C%20Tech%20%26%20Design&p[teams][1]=Internship%20-%20Business&p[teams][2]=Internship%20-%20PhD&p[teams][3]=University%20Grad%20-%20PhD%20%26%20Postdoc&p[teams][4]=University%20Grad%20-%20Engineering%2C%20Tech%20%26%20Design&p[teams][5]=University%20Grad%20-%20Business&teams[0]=Internship%20-%20Engineering%2C%20Tech%20%26%20Design&teams[1]=Internship%20-%20Business&teams[2]=Internship%20-%20PhD&teams[3]=University%20Grad%20-%20PhD%20%26%20Postdoc&teams[4]=University%20Grad%20-%20Engineering%2C%20Tech%20%26%20Design&teams[5]=University%20Grad%20-%20Business",
    padding: 25,
  },
  {
    name: "Deloitte",
    tier: SponsorType.SILVER,
    imgSrc: DeloitteLogo,
    link: "https://www2.deloitte.com/ca/en.html",
    padding: 55,
  },
  {
    name: "Citadel",
    tier: SponsorType.BRONZE,
    imgSrc: CitadelLogo,
    link: "https://www.citadel.com/",
    padding: 32,
  },
  {
    name: "IMC Trading",
    tier: SponsorType.BRONZE,
    imgSrc: IMCLogo,
    link: "https://www.imc.com/",
    padding: 28,
  },
  {
    name: "Loyalty One",
    tier: SponsorType.BRONZE,
    imgSrc: LoyaltyOneLogo,
    link: "https://www.loyalty.com/",
    padding: 0,
  },
  {
    name: "Ubisoft",
    tier: SponsorType.BRONZE,
    imgSrc: UbisoftLogo,
    link: "https://www.ubisoft.com/",
    padding: 10,
  },
  {
    name: "Validere",
    tier: SponsorType.BRONZE,
    imgSrc: ValidereLogo,
    link: "https://validere.com/",
    padding: 16,
  },
  {
    name: "OTPP",
    tier: SponsorType.BRONZE,
    imgSrc: OTPPLogo,
    link: "https://www.otpp.com/careers/career-opportunities",
    padding: 10,
  },
  {
    name: "Waterfront",
    tier: SponsorType.BRONZE,
    imgSrc: WaterfrontLogo,
    link: "https://www.wil.com/",
    padding: 0,
  },
  {
    name: "DRW",
    tier: SponsorType.BRONZE,
    imgSrc: DRWLogo,
    link: "https://drw.com/",
    padding: 24,
  },
  {
    name: "Faire",
    tier: SponsorType.BRONZE,
    imgSrc: FaireLogo,
    link: "https://www.faire.com/careers",
    padding: 0,
  },
  {
    name: "Google",
    tier: SponsorType.BRONZE,
    imgSrc: GoogleLogo,
    link: "https://events.withgoogle.com/google-cloud-qwiklabs-speaker-series/",
    padding: 24,
  },
  {
    name: "Firebase",
    tier: SponsorType.BRONZE,
    imgSrc: FirebaseLogo,
    link: "https://firebase.google.com/",
    padding: 10,
  },
  {
    name: "ACV",
    tier: SponsorType.BRONZE,
    imgSrc: ACVLogo,
    link: "https://www.acvauctions.com",
    padding: 10,
  },
  {
    name: "Genesys",
    tier: SponsorType.BRONZE,
    imgSrc: GenesysLogo,
    link: "https://www.genesys.com/",
    padding: 5,
  },
  {
    name: "D2L",
    tier: SponsorType.BRONZE,
    imgSrc: D2LLogo,
    link: "https://www.d2l.com/",
    padding: 5,
  },
  {
    name: "Cash Flow Portal",
    tier: SponsorType.BRONZE,
    imgSrc: CashFlowLogo,
    link: "https://www.cashflowportal.com/about",
    padding: 15,
  },
  {
    name: "HOT-G",
    tier: SponsorType.BRONZE,
    imgSrc: HOTGLogo,
    link: "https://hotg.dev/",
    padding: 0,
  },
  {
    name: "IBM",
    tier: SponsorType.BRONZE,
    imgSrc: IBMLogo,
    link: "https://www.ibm.com/ca-en/employment/entrylevel/",
    padding: 5,
  },
  {
    name: "Coda",
    tier: SponsorType.BRONZE,
    imgSrc: CodaLogo,
    link: "https://coda.io/welcome",
    padding: 5,
  },
  {
    name: "Algorand",
    tier: SponsorType.BRONZE,
    imgSrc: AlgorandLogo,
    link: "https://www.algorand.com/",
    padding: 5,
  },
  {
    name: "Figma",
    tier: SponsorType.BRONZE,
    imgSrc: FigmaLogo,
    link: "https://www.figma.com/",
    padding: 5,
  },
  {
    name: "P&G",
    tier: SponsorType.BRONZE,
    imgSrc: PGLogo,
    link: "https://us.pg.com/",
    padding: 5,
  },
  {
    name: "Microsoft",
    tier: SponsorType.BRONZE,
    imgSrc: MicrosoftLogo,
    link: "https://azure.microsoft.com/en-us/free/students/",
    padding: 15,
  },
  {
    name: "CGI",
    tier: SponsorType.BRONZE,
    imgSrc: CGILogo,
    link: "https://www.cgi.com/en",
    padding: 12,
  },
  {
    name: "CashApp",
    tier: SponsorType.BRONZE,
    imgSrc: CashAppLogo,
    link: "https://cash.app/careers",
    padding: 8,
  },
  {
    name: "Contrary",
    tier: SponsorType.STARTUP,
    imgSrc: ContraryLogo,
    link: "https://contrarycap.com/",
    padding: 20,
  },
  {
    name: "Dropbase",
    tier: SponsorType.STARTUP,
    imgSrc: DropbaseBlackLogo,
    link: "https://www.dropbase.io/",
    padding: 0,
  },
  {
    name: "NEXT",
    tier: SponsorType.STARTUP,
    imgSrc: NEXTLogo,
    link: "https://www.nextcanada.com/",
    padding: 24,
  },
  {
    name: "Profound Impact",
    tier: SponsorType.STARTUP,
    imgSrc: ProfoundImpactLogo,
    link: "https://profoundimpact.com/",
    padding: 24,
  },
  {
    name: "Hypotenuse Labs",
    tier: SponsorType.STARTUP,
    imgSrc: HypotenuseLabsLogo,
    link: "https://hypotenuse.ca/",
    padding: 15,
  },
  {
    name: "Voiceflow",
    tier: SponsorType.STARTUP,
    imgSrc: VoiceflowLogo,
    link: "https://www.voiceflow.com/",
    padding: 18,
  },
  {
    name: "Tuned",
    tier: SponsorType.STARTUP,
    imgSrc: TunedLogo,
    link: "https://tuned.com/",
    padding: 22,
  },
  {
    name: "Techyon",
    tier: SponsorType.PARTNER,
    imgSrc: TechyonLogo,
    link: "https://techyon.org/",
    padding: 16,
  },
  {
    name: "Waterloo Engineering",
    tier: SponsorType.PARTNER,
    imgSrc: WaterlooEngineeringLogo,
    link: "https://uwaterloo.ca/engineering/",
    padding: 10,
  },
  {
    name: "Waterloo Math",
    tier: SponsorType.PARTNER,
    imgSrc: WaterlooMathLogo,
    link: "https://uwaterloo.ca/math/",
    padding: 0,
  },
  {
    name: "University of Waterloo",
    tier: SponsorType.PARTNER,
    imgSrc: WaterlooLogo,
    link: "https://uwaterloo.ca/",
    padding: 10,
  },
  {
    name: "Communitech",
    tier: SponsorType.PARTNER,
    imgSrc: CommunitechLogo,
    link: "https://www.communitech.ca/",
    padding: 10,
  },
];
