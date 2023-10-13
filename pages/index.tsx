import dynamic from "next/dynamic";
import React from "react";
import { Navbar } from "src/components";
import { Layout } from "src/components/base";
import LineOnScroll from "src/components/LineOnScroll";
import Workshop from "src/components/Banner/VolunteerMentorWorkshop";

// Disable lazy loading
import Hero from "src/sections/Hero";
// import About from "src/sections/About";
// import Details from "src/sections/Details";
// import Stories from "src/sections/Stories";
// import Projects from "src/sections/Projects";
// import Leaders from "src/sections/Leaders";
// import SponsorShowcase from "src/sections/SponsorShowcase";
// import SponsorLogos from "src/sections/SponsorLogos";
// import FAQ from "src/sections/FAQ";
// import Footer from "src/sections/Footer";

// const Hero = dynamic(() => import("src/sections/Hero"));
const About = dynamic(() => import("src/sections/About"));
const Details = dynamic(() => import("src/sections/Details"));
const Stories = dynamic(() => import("src/sections/Stories"));
const Projects = dynamic(() => import("src/sections/Projects"));
const Keynote = dynamic(() => import("src/sections/Keynote"));
// const Leaders = dynamic(() => import("src/sections/Leaders"));
const UWEngineering = dynamic(() => import("src/sections/UWEngineering"));
const Judges = dynamic(() => import("src/sections/Judges"));
const Sponsors = dynamic(() => import("src/sections/Sponsors/"));
const FAQ = dynamic(() => import("src/sections/FAQ"));

// TODO: Remove SSR later, similar to the StatsCarousel, this should work with SSR enabled
const Footer = dynamic(() => import("src/sections/Footer"), { ssr: false });

const IndexPage: React.FC = () => (
  <Layout>
    <LineOnScroll />
    <Navbar />
    <Hero />
    <About />
    <Details />
    <Stories />
    <Projects />
    <Keynote />
    {/* <Leaders /> */}
    <Judges />
    <UWEngineering />
    <Sponsors />
    <FAQ />
    <Footer />
    <Workshop />
  </Layout>
);

export default IndexPage;
