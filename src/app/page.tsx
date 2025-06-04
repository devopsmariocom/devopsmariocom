import Image from "next/image";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import HowItWorks from "@/components/HowItWorks";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main data-oid="d4hhao7">
      {/* <Navigation /> */}
      <Hero data-oid="pj63b35" />
      <Services data-oid="to-u5ch" />
      <CaseStudies data-oid="6miuxuq" />
      <HowItWorks data-oid="-ph9brw" />
      <AboutMe data-oid="4h1of.8" />
      <Footer data-oid="p492g-4" />
    </main>
  );
}
