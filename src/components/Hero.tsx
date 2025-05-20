"use client"

import Image from 'next/image'
import Navigation from './Navigation'
import { useState } from 'react'

const techIcons = [
  { src: "/kubernetes.svg", alt: "Kubernetes" },
  { src: "/terraform.svg", alt: "Terraform" },
  { src: "/python.svg", alt: "Python" },
  { src: "/git.svg", alt: "Git" },
  { src: "/gitlab.svg", alt: "GitLab" },
  { src: "/azure.svg", alt: "Azure" },
  { src: "/argo-cd.svg", alt: "Argo CD" },
  { src: "/aws.svg", alt: "AWS" },
]

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#E46C6C]">
      {/* Desktop Nav */}
      <div className="hidden md:block">
        <Navigation />
      </div>
      {/* Top Bar */}
      <div className="relative z-40 w-full flex items-center justify-between px-6 pt-8">
        {/* Logo */}
        <Image src="/DevOpsMario-Hero-Logo.svg" alt="DevOpsMario Logo" width={320} height={100} className="h-12 w-auto md:h-20" />
        {/* Mobile Hamburger */}
        <div className="flex-1 flex justify-center">
          <button
            className="md:hidden flex flex-col justify-center items-center w-12 h-12 mx-auto"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-8 h-1 bg-gray-200 mb-1 rounded"></span>
            <span className="block w-8 h-1 bg-gray-200 mb-1 rounded"></span>
            <span className="block w-8 h-1 bg-gray-200 rounded"></span>
          </button>
        </div>

      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#E46C6C] z-50 flex flex-col items-center gap-4 py-8 shadow-lg animate-fade-in">
          <a href="#services" className="text-black text-2xl font-bold hover:text-blue-600 transition">Services</a>
          <a href="#portfolio" className="text-black text-2xl font-bold hover:text-blue-600 transition">Case Studies</a>
          <a href="#how" className="text-black text-2xl font-bold hover:text-blue-600 transition">How it works?</a>
          <a href="#about" className="text-black text-2xl font-bold hover:text-blue-600 transition">About Me</a>
          <a href="#contact" className="text-black text-2xl font-bold hover:text-blue-600 transition">Let's Talk</a>
        </div>
      )}
      {/* Main Content */}
      <div className="flex-1 w-full flex flex-col md:flex-row items-center justify-between relative z-30 px-6 pt-12 md:pt-24 max-w-7xl mx-auto">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center md:pr-8">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold italic text-black mb-4 leading-tight" style={{ fontFamily: 'Helvetica,Arial,sans-serif' }}>
            <span className="font-bold">DevOps consulting for<br />businesses ready to <span className="bg-[#2895E5] px-2">level up</span></span>
          </h2>
          <div className="text-lg xs:text-xl md:text-2xl text-black font-normal mb-8">
            Bridging Development and Operations<br />for Over 20 Years
          </div>
        </div>
        {/* Right: Mario Image with accent for mobile */}
        <div className="flex-1 flex items-end justify-center relative w-full md:w-auto mt-8 md:mt-0">
          {/* Blue accent blocks for mobile */}
          <div className="absolute hidden xs:block md:hidden left-1/2 -translate-x-1/2 top-8 z-10" aria-hidden>
            <div className="w-32 h-8 bg-[#2895E5] mb-2 rounded"></div>
            <div className="w-24 h-8 bg-[#2895E5] ml-8 rounded"></div>
          </div>
          <Image
            src="/Mario-Hero.webp"
            alt="Mario Vejlupek"
            width={420}
            height={520}
            className="relative z-20 grayscale w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-cover object-top rounded-md md:ml-auto md:mr-0 mx-auto"
            priority
          />
        </div>
      </div>

      <div className="bottom-dots">
        <div className="icon-carousel">
          {[...Array(4)].map((_, groupIndex) => (
            <div key={groupIndex} className="icon-group">
              {techIcons.map((icon, index) => (
                <Image
                  key={`${groupIndex}-${index}`}
                  src={icon.src}
                  alt={icon.alt}
                  width={40}
                  height={40}
                  className="tech-icon"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 