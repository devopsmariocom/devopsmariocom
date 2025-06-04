"use client";

import Image from "next/image";
import Navigation from "./Navigation";
import { useState } from "react";

const techIcons = [
  { src: "/kubernetes.svg", alt: "Kubernetes" },
  { src: "/terraform.svg", alt: "Terraform" },
  { src: "/python.svg", alt: "Python" },
  { src: "/git.svg", alt: "Git" },
  { src: "/gitlab.svg", alt: "GitLab" },
  { src: "/azure.svg", alt: "Azure" },
  { src: "/argo-cd.svg", alt: "Argo CD" },
  { src: "/aws.svg", alt: "AWS" },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#E46C6C]"
      data-oid="myrc2vy"
    >
      {/* Desktop View */}
      <div
        className="hidden md:flex flex-col min-h-screen w-full"
        data-oid="z4y9yms"
      >
        {/* Top Bar */}
        <div
          className="w-full flex items-center justify-between px-10 pt-10 z-50 relative"
          data-oid="g4jvwn1"
        >
          <Image
            src="/DevOpsMario-Hero-Logo.svg"
            alt="DevOpsMario Logo"
            width={320}
            height={100}
            className="h-16 w-auto lg:hidden"
            data-oid="it95g63"
          />

          <Navigation data-oid="31bc8yh" />
        </div>
        {/* Main Content */}
        <div
          className="flex-1 flex flex-row items-stretch justify-between relative z-30 px-10 max-w-[1600px] mx-auto w-full"
          data-oid="sukenay"
        >
          {/* Společný kontejner pro logo a obrázek */}
          <div className="" data-oid="f-s2ddc">
            <Image
              src="/DevOpsMario-Hero-Logo.svg"
              alt="DevOpsMario Logo"
              width={600}
              height={180}
              className="h-[421px] w-[1081px] absolute"
              priority
              data-oid="9lcx-9r"
            />

            <Image
              src="/Mario-Hero.webp"
              alt="Mario Vejlupek"
              width={517}
              height={700}
              className="absolute left-[755px] top-[150px]"
              priority
              data-oid="7.gm9xb"
              key="olk-uP0T"
            />

            <div className="mt-2 mb-8" data-oid="d.ppado">
              <div
                className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-black mb-2 text-left absolute left-[66px] top-[512px]"
                style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
                data-oid="_3vfhn1"
              >
                DevOps consulting for
                <br data-oid="qcwgu74" />
                businesses ready to level up
              </div>
              <div
                className="text-base md:text-lg text-black font-normal text-left"
                data-oid="hfjkh6w"
                key="olk-WV-_"
              >
                Bridging Development and Operations
                <br data-oid="._nyxds" />
                for Over 20 Years
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div
        className="flex flex-col md:hidden min-h-screen w-full"
        data-oid="uym7k2u"
      >
        {/* Top Bar */}
        <div
          className="w-full flex items-center justify-between px-6 pt-8 z-40 relative"
          data-oid="pxtxltg"
        >
          <Image
            src="/DevOpsMario-Hero-Logo.svg"
            alt="DevOpsMario Logo"
            width={180}
            height={60}
            className="h-10 w-auto"
            data-oid="pn61:3_"
          />

          <button
            className="flex flex-col justify-center items-center w-12 h-12"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
            data-oid="-kucj-w"
          >
            <span
              className="block w-8 h-1 bg-gray-200 mb-1 rounded"
              data-oid="wli-oe9"
            ></span>
            <span
              className="block w-8 h-1 bg-gray-200 mb-1 rounded"
              data-oid="qo7y9jc"
            ></span>
            <span
              className="block w-8 h-1 bg-gray-200 rounded"
              data-oid="t8_gz85"
            ></span>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="absolute top-20 left-0 w-full bg-[#E46C6C] z-50 flex flex-col items-center gap-4 py-8 shadow-lg animate-fade-in"
            data-oid="2uadcgk"
          >
            <a
              href="#services"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
              data-oid="-225h_o"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
              data-oid="8m--h-d"
            >
              Case Studies
            </a>
            <a
              href="#how"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
              data-oid="uf7c8.q"
            >
              How it works?
            </a>
            <a
              href="#about"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
              data-oid="s17iu5z"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
              data-oid="c64e7w7"
            >
              Let's Talk
            </a>
          </div>
        )}
        {/* Main Content */}
        <div
          className="flex-1 flex flex-col items-center justify-center px-6 pt-12 w-full"
          data-oid="2qpas4w"
        >
          <div className="mt-2 mb-8 w-full" data-oid="v5x-qo4">
            <div
              className="text-2xl xs:text-3xl font-bold italic text-black mb-2 text-left"
              style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
              data-oid="lkdgmri"
            >
              DevOps consulting for
              <br data-oid=".pbil-t" />
              businesses ready to level up
            </div>
            <div
              className="text-base xs:text-lg text-black font-normal text-left"
              data-oid="cwafma7"
            >
              Bridging Development and Operations
              <br data-oid="pytsd-k" />
              for Over 20 Years
            </div>
          </div>
          {/* Blue accent blocks for mobile */}
          <div
            className="relative w-full flex flex-col items-center"
            data-oid="lt-b7:8"
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 top-8 z-10"
              aria-hidden
              data-oid="st_yd_7"
            >
              <div
                className="w-32 h-8 bg-[#2895E5] mb-2 rounded"
                data-oid="xwxo36_"
              ></div>
              <div
                className="w-24 h-8 bg-[#2895E5] ml-8 rounded"
                data-oid="vnt.3_b"
              ></div>
            </div>
            <Image
              src="/Mario-Hero.webp"
              alt="Mario Vejlupek"
              width={420}
              height={520}
              className="relative z-20 grayscale w-full max-w-xs h-auto object-cover object-top rounded-md mx-auto"
              priority
              data-oid="m0v3w5i"
            />
          </div>
        </div>
      </div>
      {/* Bottom Dots Bar */}
      <div className="bottom-dots" data-oid="mbzry8z">
        <div className="icon-carousel" data-oid="1o5v0vo">
          {[...Array(4)].map((_, groupIndex) => (
            <div key={groupIndex} className="icon-group" data-oid="52pvb3p">
              {techIcons.map((icon, index) => (
                <Image
                  key={`${groupIndex}-${index}`}
                  src={icon.src}
                  alt={icon.alt}
                  width={40}
                  height={40}
                  className="tech-icon"
                  data-oid="yi3yhp-"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
