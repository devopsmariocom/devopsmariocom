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
    <main data-oid="gyvgtn3">
      {/* <Navigation /> */}
      <Hero data-oid="xfd3f9g" />
      <Services data-oid="2s.ubqs" />
      <CaseStudies data-oid="9y-ckq9" />
      <HowItWorks data-oid="fzgwtm1" />
      <AboutMe data-oid="c7v7hkw" />
      <Footer data-oid="tuiy.ei" />
    </main>
  );
}
