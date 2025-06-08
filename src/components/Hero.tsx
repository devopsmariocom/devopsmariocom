"use client";

import Image from "next/image";
import Navigation from "./Navigation";
import { useState } from "react";
import BottomDotsBar from "./BottomDotsBar";

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
      className="relative h-screen w-full overflow-hidden flex flex-col bg-[#E46C6C]"
      data-oid="myrc2vy"
    >
      {/* Desktop View */}
      <div
        className="flex flex-col h-screen hidden sm:block"
        data-oid="z4y9yms"
      >
        {/* Top Bar */}
        <div className="h-20" data-oid="g4jvwn1">
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
        <div className="flex-1 bg-[#00000000]" data-oid="sukenay">
          {/* Large DevOpsMario Logo - Background */}
          <div
            className="absolute left-0 z-20 p-4 mt-[130px] mr-[80px] ml-[80px]"
            data-oid="logo-bg"
          >
            <Image
              src="/DevOpsMario-Hero-Logo.svg"
              alt="DevOpsMario Logo"
              width={1674}
              height={260}
              priority
              data-oid="9lcx-9r"
              key="olk-5jof"
              className="w-[1674px]"
            />

            <p
              className="text-3xl lg:text-4xl xl:text-5xl font-bold italic mb-6 leading-tight ml-[20px] w-[665px] text-[#333333]"
              data-oid=":jlowdd"
            >
              DevOps consulting for
              <br data-oid="qcwgu74" />
              businesses ready to level up
            </p>
          </div>

          {/* Right side - Mario's Photo */}
          <div
            className="flex-shrink-0 ml-8 z-30 absolute justify-start block right-[73px] left-[720px] top-[138px] mt-0 w-[978px] h-[1024px]"
            data-oid="82nb42o"
          >
            <Image
              src="/Mario-Hero.webp"
              alt="Mario Vejlupek"
              width={517}
              height={700}
              className="object-cover object-top right-auto bottom-auto flex items-end justify-end absolute h-[1100px] left-[230px] top-[24px] w-[785px]"
              priority
              data-oid="7.gm9xb"
              key="olk-uP0T"
            />
          </div>

          {/* Bottom Dots Bar */}
          <div className="absolute bottom-0 w-full z-50" data-oid="6zx3782">
            <BottomDotsBar data-oid="cffd1zn" />
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
          className="w-full flex items-center justify-between px-6 pt-8 z-40 relative text-[20px]"
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
              href="#lets-chat"
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
          <div className="mt-2 mb-8 w-full text-[30px]" data-oid="v5x-qo4">
            <div
              className="xs:text-3xl font-bold italic mb-2 text-left text-[NaNpx] text-[25px]"
              style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
              data-oid="lkdgmri"
            >
              DevOps consulting for
              <br data-oid=".pbil-t" />
              businesses ready to level up
            </div>
            <div
              className="xs:text-lg font-normal text-left text-[20px]"
              data-oid="cwafma7"
            >
              Bridging Development and Operations
              <br data-oid="pytsd-k" />
              for Over 20 Years
            </div>
          </div>
          {/* Blue accent blocks for mobile */}
          <div
            className="flex-shrink-0 z-30 bottom flex items-end relative top-auto right-auto bottom-auto left-auto mt-auto"
            data-oid="lt-b7:8"
          >
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
    </section>
  );
}
