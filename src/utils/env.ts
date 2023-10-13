export type TEnvironment = "production" | "staging" | "latest" | "development";
export const APP_ENV = (process.env.NEXT_PUBLIC_APP_ENV ??
  "development") as TEnvironment;
export const IS_PRODUCTION = APP_ENV === "production";
console.log(APP_ENV);
