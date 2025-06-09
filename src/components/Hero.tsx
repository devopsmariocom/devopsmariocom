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
      data-oid="kcqxyad"
    >
      {/* Desktop View */}
      <div
        className="flex flex-col h-screen hidden md:block"
        data-oid="q732vhg"
      >
        {/* Top Bar */}
        <div className="h-20" data-oid=".hk.y6r">
          <Navigation data-oid="2u:aa9b" />
        </div>
        {/* Main Content */}
        <div className="flex-1 bg-[#00000000]" data-oid="6_nry0.">
          {/* Large DevOpsMario Logo - Background */}
          <div
            className="absolute left-0 z-20 p-4 mt-[130px] mr-[80px] ml-[80px]"
            data-oid="_c-3ma6"
          >
            <Image
              src="/DevOpsMario-Hero-Logo.svg"
              alt="DevOpsMario Logo"
              width={1674}
              height={260}
              priority
              className="w-[1674px]"
              data-oid="-fxfidl"
            />

            <div
              className="text-2xl lg:text-3xl xl:text-5xl font-bold italic mb-6 leading-tight ml-[20px] w-[665px] text-[#333333] mr-[100px]"
              data-oid=":.-_:2s"
              style={{ marginTop: "100px !important" }}
            >
              <p data-oid="qov5fhi">
                DevOps consulting for
                <br data-oid="rv1rujr" />
                businesses ready to level up
              </p>
              <p
                className="xs:text-lg font-normal text-left text-[20px] mt-[20px]"
                data-oid="zgcg:1s"
              >
                Bridging Development and Operations
                <br data-oid="jm:vz9x" />
                for Over 20 Years
              </p>
            </div>
          </div>

          {/* Right side - Mario's Photo */}
          <div
            className="flex-shrink-0 ml-8 z-30 absolute justify-start block right-0 bottom-[110px]"
            data-oid="j0n2vd8"
          >
            <Image
              src="/Mario-Hero.webp"
              alt="Mario Vejlupek"
              width={517}
              height={700}
              className="inline-block h-auto"
              priority
              data-oid="unuae_u"
            />
          </div>

          {/* Bottom Dots Bar */}
          <div className="absolute bottom-0 w-full z-50" data-oid="s-prk_m">
            <BottomDotsBar data-oid=":l.1tfn" />
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div
        className="flex flex-col block md:hidden min-h-screen w-full"
        data-oid="zl6sd4x"
      >
        {/* Top Bar */}
        <div
          className="w-full flex items-center justify-between px-6 pt-8 z-40 relative text-[20px]"
          data-oid="6sr6xd1"
        >
          <Image
            src="/DevOpsMario-Hero-Logo.svg"
            alt="DevOpsMario Logo"
            width={180}
            height={60}
            className="h-10 w-auto"
            data-oid="0i4n17r"
          />

          <button
            className="flex flex-col justify-center items-center w-12 h-12"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
            data-oid="k10.mug"
          >
            <span
              className="block w-8 h-1 bg-gray-200 mb-1 rounded"
              data-oid="f7627x4"
            ></span>
            <span
              className="block w-8 h-1 bg-gray-200 mb-1 rounded"
              data-oid="8y7ks3z"
            ></span>
            <span
              className="block w-8 h-1 bg-gray-200 rounded"
              data-oid="69k8h.."
            ></span>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="absolute top-20 left-0 w-full bg-[#E46C6C] z-50 flex flex-col items-center gap-4 py-8 shadow-lg animate-fade-in"
            data-oid="bdr3q9f"
          >
            <a
              href="#services"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
              data-oid="odl0ext"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
              data-oid="lnx0551"
            >
              Case Studies
            </a>
            <a
              href="#how"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
              data-oid="w_zqg4c"
            >
              How it works?
            </a>
            <a
              href="#about"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
              data-oid="d_n5n4h"
            >
              About Me
            </a>
            <a
              href="#lets-chat"
              className="text-black text-2xl font-bold hover:text-blue-600 transition"
              data-oid="dt-xpgm"
            >
              Let's Talk
            </a>
          </div>
        )}
        {/* Main Content */}
        <div
          className="flex-1 flex flex-col items-center justify-center px-6 pt-12 w-full"
          data-oid="wo_u9t_"
        >
          <div className="mt-2 mb-8 w-full text-[30px]" data-oid="799v_d1">
            <div
              className="xs:text-3xl font-bold italic mb-2 text-left text-[NaNpx] text-[25px]"
              style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
              data-oid="c80iya7"
            >
              DevOps consulting for
              <br data-oid=":lo-eta" />
              businesses ready to level up
            </div>
            <div
              className="xs:text-lg font-normal text-left text-[20px]"
              data-oid="jzioug9"
            >
              Bridging Development and Operations
              <br data-oid="v2q8rkx" />
              for Over 20 Years
            </div>
          </div>
          {/* Blue accent blocks for mobile */}
          <div
            className="flex-shrink-0 z-30 bottom flex items-end relative top-auto right-auto bottom-auto left-auto mt-auto"
            data-oid="uc9_hxw"
          >
            <Image
              src="/Mario-Hero.webp"
              alt="Mario Vejlupek"
              width={420}
              height={520}
              className="relative z-20 grayscale w-full max-w-xs h-auto object-cover object-top rounded-md mx-auto"
              priority
              data-oid="wazqtnk"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
