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
    <section className="relative h-screen w-full overflow-hidden flex flex-col bg-[#E46C6C]">
      {/* Desktop View */}
      <div className="flex flex-col h-screen hidden md:block">
        {/* Top Bar */}
        <div className="h-20">
          <Navigation />
        </div>
        {/* Main Content */}
        <div className="flex-1 bg-[#00000000]">

          <Image
                src="/Pipeline-Hero.svg"
                alt="Pipelines"
                width={1517}
                height={1000}
                className="inline-block absolute top-100 left-0 right-0 z-10 w-full"
                style={{ marginTop: "z-index: -1 !important; margin-top: 300px !important" }}
                priority
              />

          {/* Large DevOpsMario Logo - Background */}
          <div className="absolute left-0 z-20 p-4 mt-[30px] mr-[80px] ml-[80px]">
            <Image
              src="/DevOpsMario-Hero-Logo.svg"
              alt="DevOpsMario Logo"
              width={1674}
              height={260}
              priority
              className="w-[1674px]"
            />

            <div
              className="text-2xl lg:text-3xl xl:text-5xl font-bold italic mb-6 leading-tight ml-[20px] w-[665px] text-[#333333] mr-[100px]"
              style={{ marginTop: "100px !important" }}
            >
              <p>
                DevOps consulting for
                <br />
                businesses ready to level up
              </p>
              <p className="xs:text-lg font-normal text-left text-[20px] mt-[20px]">
                Bridging Development and Operations
                <br />
                for Over 20 Years
              </p>
            </div>
          </div>

          {/* Right side - Mario's Photo */}
          <div className="flex-shrink-0 ml-8 z-30 absolute justify-start block right-0 bottom-[110px]">

            <Image
              src="/Mario-Hero.webp"
              alt="Mario Vejlupek"
              width={517}
              height={700}
              className="inline-block h-auto z-20"
              priority
            />
          </div>



          {/* Bottom Dots Bar */}
          <div className="absolute bottom-0 w-full z-50">
            <BottomDotsBar />
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col block md:hidden min-h-screen w-full">
        {/* Top Bar */}
        <div className="w-full flex items-center justify-between px-6 pt-8 z-40 relative text-[20px]">
          <Image
            src="/DevOpsMario-Hero-Logo.svg"
            alt="DevOpsMario Logo"
            width={180}
            height={60}
            className="h-10 w-auto"
          />

          <button
            className="flex flex-col justify-center items-center w-12 h-12"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-8 h-1 bg-gray-200 mb-1 rounded"></span>
            <span className="block w-8 h-1 bg-gray-200 mb-1 rounded"></span>
            <span className="block w-8 h-1 bg-gray-200 rounded"></span>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#E46C6C] z-50 flex flex-col items-center gap-4 py-8 shadow-lg animate-fade-in">
            <a
              href="#services"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
            >
              Case Studies
            </a>
            <a
              href="#how"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
            >
              How it works?
            </a>
            <a
              href="#about"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
            >
              About Me
            </a>
            <a
              href="#lets-chat"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
            >
              Let's Talk
            </a>
          </div>
        )}
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pt-12 w-full">

          <Image
                  src="/Pipeline-Hero.svg"
                  alt="Pipelines"
                  width={1517}
                  height={1000}
                  className="inline-block absolute top-100 left-0 right-0 z-10 w-full"
                  style={{ marginTop: "z-index: -1 !important; margin-top: 300px !important" }}
                  priority
                />

          <div className="mt-2 mb-8 w-full text-[30px]">
            <div
              className="xs:text-3xl font-bold italic mb-2 text-left text-[NaNpx] text-[25px]"
              style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
            >
              DevOps consulting for
              <br />
              businesses ready to level up
            </div>
            <div className="xs:text-lg font-normal text-left text-[20px]">
              Bridging Development and Operations
              <br />
              for Over 20 Years
            </div>
          </div>
          {/* Blue accent blocks for mobile */}
          <div className="flex-shrink-0 z-30 bottom flex items-end relative top-auto right-auto bottom-auto left-auto mt-auto">
            <Image
              src="/Mario-Hero.webp"
              alt="Mario Vejlupek"
              width={420}
              height={520}
              className="relative z-20 grayscale w-full max-w-xs h-auto object-cover object-top rounded-md mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
