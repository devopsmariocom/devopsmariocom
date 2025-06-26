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
      data-oid="m-y09vo"
    >
      {/* Desktop View */}
      <div
        className="flex flex-col h-screen hidden md:block"
        data-oid="dth.24e"
      >
        {/* Top Bar */}
        <div className="h-20" data-oid="o3y3h.-">
          <Navigation data-oid="2t_43af" />
        </div>
        {/* Main Content */}
        <div className="flex-1 bg-[#00000000]" data-oid="fr.-m8q">
          <Image
            src="/Pipeline-Hero.svg"
            alt="Pipelines"
            width={1517}
            height={1000}
            className="inline-block absolute top-100 left-0 right-0 z-10 w-full"
            style={{
              marginTop: "z-index: -1 !important; margin-top: 300px !important",
            }}
            priority
            data-oid="9zlu_fs"
          />

          {/* Large DevOpsMario Logo - Background */}
          <div
            className="absolute left-0 z-20 p-4 mt-[30px] mr-[80px] ml-[80px]"
            data-oid="3acmgm9"
          >
            <Image
              src="/DevOpsMario-Hero-Logo.svg"
              alt="DevOpsMario Logo"
              width={1674}
              height={260}
              priority
              className="w-[1674px]"
              data-oid="n:-w_0a"
            />

            <div
              className="text-2xl lg:text-3xl xl:text-5xl font-bold italic mb-6 leading-tight ml-[20px] w-[665px] text-[#333333] mr-[100px]"
              style={{ marginTop: "100px !important" }}
              data-oid="8s.mwz_"
            >
              <p data-oid="spsdrjh">
                DevOps consulting for
                <br data-oid="8.vfy7r" />
                businesses ready to level up
              </p>
              <p
                className="xs:text-lg font-normal text-left text-[20px] mt-[20px]"
                data-oid="okwa0lx"
              >
                Bridging Development and Operations
                <br data-oid="tv_v14e" />
                for Over 20 Years
              </p>
            </div>
          </div>

          {/* Right side - Mario's Photo */}
          <div
            className="flex-shrink-0 ml-8 z-30 absolute justify-start block right-0 bottom-[110px]"
            data-oid="b9yud:g"
          >
            <Image
              src="/Mario-Hero.webp"
              alt="Mario Vejlupek"
              width={517}
              height={700}
              className="inline-block h-auto z-20"
              priority
              data-oid="2m7x89r"
            />
          </div>

          {/* Bottom Dots Bar */}
          <div className="absolute bottom-0 w-full z-50" data-oid="nsbrnzw">
            <BottomDotsBar data-oid="0u018ll" />
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div
        className="flex flex-col block md:hidden min-h-screen w-full"
        data-oid="njgqz.j"
      >
        {/* Top Bar */}
        <div
          className="w-full flex items-center justify-between px-6 pt-8 z-40 relative text-[20px]"
          data-oid="or_r0dj"
        >
          <Image
            src="/DevOpsMario-Hero-Logo.svg"
            alt="DevOpsMario Logo"
            width={180}
            height={60}
            className="h-10 w-auto"
            data-oid="1b-sw39"
          />

          <button
            className="flex flex-col justify-center items-center w-12 h-12"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
            data-oid="n_pb4xt"
          >
            <span
              className="block w-8 h-1 bg-gray-200 mb-1 rounded"
              data-oid="ltapl:f"
            ></span>
            <span
              className="block w-8 h-1 bg-gray-200 mb-1 rounded"
              data-oid="af_7..6"
            ></span>
            <span
              className="block w-8 h-1 bg-gray-200 rounded"
              data-oid="9lhj6_6"
            ></span>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="absolute top-20 left-0 w-full bg-[#E46C6C] z-50 flex flex-col items-center gap-4 py-8 shadow-lg animate-fade-in"
            data-oid="l5rufez"
          >
            <a
              href="#services"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
              data-oid="qs9qcae"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
              data-oid="16-o6na"
            >
              Case Studies & Testimonials
            </a>
            <a
              href="#how"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
              data-oid="g6:05eh"
            >
              How it works?
            </a>
            <a
              href="#about"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
              data-oid="nm9g:eg"
            >
              About Me
            </a>
            <a
              href="#lets-chat"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
              data-oid="tvevswt"
            >
              Let's Talk
            </a>
          </div>
        )}
        {/* Main Content */}
        <div
          className="flex-1 flex flex-col items-center justify-center px-6 pt-12 w-full"
          data-oid="egy1itl"
        >
          <Image
            src="/Pipeline-Hero.svg"
            alt="Pipelines"
            width={1517}
            height={1000}
            className="inline-block absolute top-100 left-0 right-0 z-10 w-full"
            style={{
              marginTop: "z-index: -1 !important; margin-top: 300px !important",
            }}
            priority
            data-oid="82-ohg-"
          />

          <div className="mt-2 mb-8 w-full text-[30px]" data-oid="r_4k8:c">
            <div
              className="xs:text-3xl font-bold italic mb-2 text-left text-[NaNpx] text-[25px]"
              style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
              data-oid="lj5on7u"
            >
              DevOps consulting for
              <br data-oid="b:ks16i" />
              businesses ready to level up
            </div>
            <div
              className="xs:text-lg font-normal text-left text-[20px]"
              data-oid="2oy6hec"
            >
              Bridging Development and Operations
              <br data-oid="a7b0gd3" />
              for Over 20 Years
            </div>
          </div>
          {/* Blue accent blocks for mobile */}
          <div
            className="flex-shrink-0 z-30 bottom flex items-end relative top-auto right-auto bottom-auto left-auto mt-auto"
            data-oid="c1re.7y"
          >
            <Image
              src="/Mario-Hero.webp"
              alt="Mario Vejlupek"
              width={420}
              height={520}
              className="relative z-20 grayscale w-full max-w-xs h-auto object-cover object-top rounded-md mx-auto"
              priority
              data-oid="lmv970s"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
