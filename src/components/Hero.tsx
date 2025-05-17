import Image from 'next/image'

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
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
      <div className="absolute top-8 left-0 w-full flex justify-center z-40 px-5">
        <Image src="/DevOpsMario-Logo-Tail.svg" alt="DevOpsMario Logo" width={200} height={80} className="h-20 md:h-14 mx-2" />
      </div>
      
      <Image 
        src="/Mario-Hero.webp" 
        alt="Mario Vejlupek"
        className="absolute inset-0 w-full h-full object-cover object-top grayscale z-10 md:z-[50]"
        width={1920}
        height={1080}
        sizes="100vw"
        quality={90}
      />
      
      <div className="absolute inset-0 bg-[#E46C6C] opacity-80 z-20"></div>
      
      <div className="relative z-30 flex flex-col items-start justify-center h-full px-6 pt-32">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold italic text-black mb-4 leading-tight" style={{ fontFamily: 'Helvetica,Arial,sans-serif' }}>
          DevOps consulting for<br />businesses ready to <span className="bg-[#2895E5] px-2">level up</span>
        </h2>
        <div className="text-lg xs:text-xl text-black font-normal mb-8">
          Bridging Development and Operations<br />for Over 20 Years
        </div>
        
        <div className="flex flex-col w-full items-center gap-4 md:hidden mb-8">
          <a href="#services" className="text-black text-4xl font-bold hover:text-blue-600 transition">Services</a>
          <a href="#portfolio" className="text-black text-4xl font-bold hover:text-blue-600 transition">Case Studies</a>
          <a href="#how" className="text-black text-4xl font-bold hover:text-blue-600 transition">How it works?</a>
          <a href="#about" className="text-black text-4xl font-bold hover:text-blue-600 transition">About Me</a>
          <a href="#contact" className="text-black text-4xl font-bold hover:text-blue-600 transition">Let's Talk</a>
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