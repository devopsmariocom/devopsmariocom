import Testimonial from "./Testimonial";

const testimonials = [
  {
    name: "Martin Hochel",
    title:
      "Principal Engineer at Microsoft, Google Developer Expert, Microsoft MVP",
    quote:
      "I worked with Mario on building a custom UI framework and co-founding a frontend meetup community. Even in frontend work, he always brought an engineering mindset that went far beyond the UI — thinking about tooling, automation, and how to scale ideas efficiently. His ability to connect architecture with developer experience made him a natural fit for DevOps thinking before we even called it that.",
    image: "/Martin_Hochel.webp",
    imageAlt: "Martin Hochel photo",
    alignment: "left" as const,
  },
  {
    name: "Zdeněk Vičar",
    title: "Engineering Manager at Outreach",
    quote:
      "Mario was my tutor and wingman during our Kubernetes project at EmbedIT. His technical expertise and out-of-the-box thinking made a real impact. On top of that, his team spirit makes him a great person to work with. Highly recommended.",
    image: "/Zdenek_Vicar.webp",
    imageAlt: "Zdeněk Vičar photo",
    alignment: "right" as const,
  },
  {
    name: "Milan Brych",
    title: "CTO at Orgis IT",
    quote:
      "I collaborated with Mario on revitalizing clusters in a hybrid environment. I greatly appreciated his focus on clean solutions, proactive attitude, and ability to work independently. Throughout the project, the continuous sharing of information and our cooperative approach allowed us to refine our process and achieve a cohesive outcome. The resulting clusters are fully functional and thoroughly documented. I can wholeheartedly recommend Mario—not only for his technical expertise but also for his excellent communication skills.",
    image: "/Milan_Brych.webp",
    imageAlt: "Milan Brych avatar",
    alignment: "left" as const,
  },
];

export default function Testimonials() {
  return (
    <div
      className="w-full flex flex-col gap-16 items-center justify-center mt-24"
      data-oid="nux3al2"
    >
      {testimonials.map((t) => (
        <Testimonial key={t.name} {...t} data-oid="nw5n.l2" />
      ))}
    </div>
  );
}
