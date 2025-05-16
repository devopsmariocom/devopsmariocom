import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import HowItWorks from '@/components/HowItWorks'
import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <CaseStudies />
      <HowItWorks />
      <AboutMe />
      <Footer />
    </main>
  )
} 