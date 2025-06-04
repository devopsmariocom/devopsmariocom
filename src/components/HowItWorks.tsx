import Image from "next/image";

const steps = [
  {
    title: "1. Discovery Call",
    description:
      "A quick 30-minute chat to understand your goals, tech stack, and bottlenecks.",
    outcome: "Clear understanding of your challenges and opportunities.",
  },
  {
    title: "2. Custom DevOps Plan",
    description:
      "Designing a tailored plan covering infrastructure, CI/CD, automation, and security needs.",
    outcome: "You receive a roadmap with timelines, tools, and scope.",
  },
  {
    title: "3. Implementation & Iteration",
    description:
      "Working alongside your team (or independently) to implement and refine the solution.",
    outcome: "Fast, stable deployments and improved developer workflows.",
  },
  {
    title: "4. Ongoing Support / Handoff",
    description:
      "Providing training, documentation, or ongoing support — depending on your needs.",
    outcome: "Self-sufficient team and long-term DevOps stability.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="w-full min-h-[700px] py-24 px-0 flex flex-col items-center justify-center bg-[#E46C6C]"
      data-oid="-hqc97:"
    >
      <Image
        src="/Logo-How_It_Works.svg"
        alt="DevOpsMario Logo"
        loading="lazy"
        width={320}
        height={80}
        className="mx-auto mb-2 w-[260px] md:w-[320px]"
        data-oid="eq6dpy."
      />

      <h2
        className="text-6xl md:text-8xl font-bold italic text-white text-center mb-16"
        style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
        data-oid="vlsix2p"
      >
        How It Works
      </h2>

      <div
        className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 px-8"
        data-oid="qlbd7pt"
      >
        {steps.map((step, index) => (
          <div key={index} className="text-white text-lg" data-oid="o:g_16t">
            <div className="font-bold italic text-2xl mb-2" data-oid="4nf8fg0">
              {step.title}
            </div>
            <div className="mb-4" data-oid="mwlo4jp">
              {step.description}
            </div>
            <div className="mt-2" data-oid="mraa5-z">
              Outcome: {step.outcome}
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-full flex flex-col items-center justify-center mt-8"
        data-oid="7m6adsl"
      >
        <div
          className="text-4xl md:text-5xl font-bold italic text-white text-center mb-8"
          style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
          data-oid="vj5m6ta"
        >
          Want to know how I can help you in particular?
        </div>
        <a
          href="https://calendar.app.google/8g9KQJMnCWqejdXn6"
          className="inline-block bg-white text-black text-xl px-12 py-4 rounded shadow hover:bg-gray-100 transition font-semibold"
          data-oid="b.4cbwt"
        >
          BOOK A CALL
        </a>
      </div>
    </section>
  );
}
