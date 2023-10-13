import { AppProps } from "next/app";
import Head from "next/head";
import React, { StrictMode, useEffect } from "react";
import { hotjar } from "react-hotjar";
import { QA } from "src/components";
import { createGlobalStyle, css } from "styled-components";
import { GlobalStyles } from "twin.macro";
import "src/assets/img/clouds/animation.css";

const fonts = css`
  @font-face {
    font-family: "Castledown";
    src: url("/fonts/castledown-heavy.eot");
    src: url("/fonts/castledown-heavy.eot#iefix") format("embedded-opentype"),
      url("/fonts/castledown-heavy.woff2") format("woff2"),
      url("/fonts/castledown-heavy.woff") format("woff"),
      url("/fonts/castledown-heavy.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: url("/fonts/Inter-Regular.woff2") format("woff2"),
      url("/fonts/Inter-Regular.woff") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-display: fallback;
    src: url("/fonts/Inter-Medium.woff2") format("woff2"),
      url("/fonts/Inter-Medium.woff") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-display: fallback;
    src: url("/fonts/Inter-Bold.woff2") format("woff2"),
      url("/fonts/Inter-Bold.woff") format("woff");
  }
`;

const resetStyles = css`
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body > div:first-of-type,
  div#__next,
  div#__next > div {
    height: 100%;
  }
`;

const CustomStyles = createGlobalStyle`
  ${fonts}
  ${resetStyles}
`;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    hotjar.initialize(1292469, 6);
  }, []);

  return (
    <div>
      <StrictMode>
        <CustomStyles />
        <GlobalStyles />
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <meta
            name="description"
            content="Hack the North is Canada’s biggest hackathon, happening September 17-19, 2021. With 36 hours of mentorship, resources, and unique experiences, we want to make it easy for anyone to dream big. Applications are open now!"
          />

          <meta name="msapplication-TileColor" content="#f3675a" />
          <meta name="theme-color" content="#fceee1" />

          {/* apple */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#0E3460"
          />
          <meta name="apple-mobile-web-app-title" content="Hack the North" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />

          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#43afde" />

          {/* og */}
          <meta property="og:title" content="Hack the North" />
          <meta property="og:type" content="website" />

          {/* twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@hackthenorth" />
          <meta name="twitter:creator" content="@hackthenorth" />

          <meta property="og:url" content="https://hackthenorth.com" />

          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="851" />
          <meta property="og:image:height" content="315" />
          <meta property="og:image:alt" content="Hack the North logo" />

          <meta
            property="og:description"
            content="Hack the North is Canada’s biggest hackathon, happening September 17-19, 2021. With 36 hours of mentorship, resources, and unique experiences, we want to make it easy for anyone to dream big. Applications are open now!"
          />
          <meta
            property="og:image"
            content="https://hackthenorth.com/preview_img.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://hackthenorth.com/preview_img.png"
          />
          <meta
            name="twitter:image"
            content="https://hackthenorth.com/preview_img.png"
          />

          <title>Hack the North</title>
        </Head>
        <Component {...pageProps} />
        <QA />
      </StrictMode>
    </div>
  );
};

export default MyApp;
