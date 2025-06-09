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
    <main data-oid="s79a:-f">
      {/* <Navigation /> */}
      <Hero data-oid="j67wcfh" />
      <Services data-oid="-3ex_pg" />
      <CaseStudies data-oid="5hcyl15" />
      <HowItWorks data-oid="h2cin_j" />
      <AboutMe data-oid="7mnfp_b" />
      <Footer data-oid="k6xuc6k" />
    </main>
  );
}
