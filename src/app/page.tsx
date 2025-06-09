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
    <main data-oid="nh0ecju">
      {/* <Navigation /> */}
      <Hero data-oid="kz9ax9-" />
      <Services data-oid="o_8r4je" />
      <CaseStudies data-oid="y:j117:" />
      <HowItWorks data-oid="-qr7keg" />
      <AboutMe data-oid="04_zlzq" />
      <Footer data-oid="lhrtcek" />
    </main>
  );
}
