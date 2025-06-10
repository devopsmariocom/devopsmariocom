import Image from "next/image";

const services = [
  {
    title: "CI/CD Pipeline Design",
    description: "Faster, safer, automated deployments.",
  },
  {
    title: "Infrastructure as Code (IaC)",
    description: "Terraform, Kubernetes — codify everything.",
  },
  {
    title: "Cloud Architecture & Migration",
    description: "Migrate and optimize across AWS, GCP, Azure.",
  },
  {
    title: "Monitoring & Observability",
    description: "Know what's going on before your users do.",
  },
  {
    title: "Security & Compliance",
    description: "DevSecOps without slowing you down.",
  },
  {
    title: "DevOps Training & Mentoring",
    description:
      "Empower your team with the skills and mindset to operate with confidence.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full min-h-[600px] px-0 flex items-stretch justify-center border-t border-gray-200 bg-[#E4E4E4]"
    >
      <div className="flex flex-col md:flex-row w-full max-w-[1800px] mx-auto">
        <div
          id="services-content"
          className="order-1 md:order-2 flex-1 flex flex-col justify-center px-6 md:pl-12 md:pr-8 my-24"
        >
          <h2
            className="text-5xl xs:text-6xl sm:text-7xl font-bold italic text-gray-800 mb-8 mt-2 md:mb-12 md:mt-2"
            style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
          >
            Services
          </h2>
          <ul className="space-y-8 text-gray-900 text-lg xs:text-xl md:text-2xl">
            {services.map((service, index) => (
              <li key={index}>
                <span className="font-bold">{service.title}:</span>
                <br />
                <span className="font-normal">{service.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-2 md:order-1 flex-1 flex items-end justify-center min-w-[240px] md:min-w-[480px] mt-8 md:mt-0">
          <Image
            src="/Laptop-Services.webp"
            alt="Laptop with code"
            fetchPriority="high"
            width={600}
            height={400}
            className="w-full max-w-xs xs:max-w-sm md:w-[600px] md:max-w-full object-contain object-left-bottom select-none pointer-events-none"
            style={{ minWidth: "180px" }}
            sizes="(max-width: 768px) 100vw, 600px"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
