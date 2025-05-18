import Image from 'next/image'

const services = [
  {
    title: "CI/CD Pipeline Design",
    description: "Faster, safer, automated deployments."
  },
  {
    title: "Infrastructure as Code (IaC)",
    description: "Terraform, Kubernetes — codify everything."
  },
  {
    title: "Cloud Architecture & Migration",
    description: "Migrate and optimize across AWS, GCP, Azure."
  },
  {
    title: "Monitoring & Observability",
    description: "Know what's going on before your users do."
  },
  {
    title: "Security & Compliance",
    description: "DevSecOps without slowing you down."
  },
  {
    title: "DevOps Training & Mentoring",
    description: "Empower your team with the skills and mindset to operate with confidence."
  }
]

export default function Services() {
  return (
    <section id="services" className="w-full min-h-[600px] py-24 px-0 flex items-stretch justify-center border-t border-gray-200 bg-[#E4E4E4]">
      <div className="flex w-full max-w-[1800px] mx-auto">
        <div className="flex-1 flex items-end justify-center min-w-[480px]">
          <Image
            src="/Laptop-Services.webp"
            alt="Laptop with code"
            fetchPriority="high"
            width={600}
            height={400}
            className="w-[600px] max-w-full object-contain object-left-bottom select-none pointer-events-none"
            style={{ minWidth: '340px' }}
            sizes="(max-width: 768px) 100vw, 600px"
            quality={90}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center pl-12 pr-8">
          <h2 className="text-7xl font-bold italic text-gray-800 mb-12 mt-2" style={{ fontFamily: 'Helvetica,Arial,sans-serif' }}>
            Services
          </h2>
          <ul className="space-y-8 text-gray-900 text-xl">
            {services.map((service, index) => (
              <li key={index}>
                <span className="font-bold">{service.title}:</span><br />
                <span className="font-normal">{service.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
} 