import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full min-h-[700px] py-24 px-0 flex items-center justify-center bg-[#E4E4E4]"
      data-oid="ipfe.ol"
    >
      <div
        className="flex w-full mx-auto flex-col md:flex-row items-center md:items-stretch justify-between px-8 gap-8"
        data-oid="hkwkxfi"
      >
        <div
          className="flex-1 flex flex-col justify-center md:pr-12"
          data-oid="y_hl1ip"
        >
          <h2
            className="text-7xl font-bold italic text-gray-800 mb-8"
            style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
            data-oid="cqekwzm"
          >
            About Me
          </h2>
          <div className="text-2xl text-gray-800 mb-4" data-oid="ux2wr08">
            I'm{" "}
            <span className="font-bold" data-oid="10gq4g8">
              Mario Vejlupek
            </span>{" "}
            — DevOps consultant,
            <br data-oid="j5i-qfs" />
            former developer, meetup founder, and speaker.
          </div>
          <div className="text-lg text-gray-700 mb-8" data-oid="ynr2sfc">
            With over 20 years of hands-on experience in tech, I’ve supported
            companies across continents in building fast, secure, and scalable
            infrastructure — from lean startups to large distributed
            enterprises.
          </div>
          <div className="text-lg text-gray-700 mb-8" data-oid="vmuq470">
            I’ve trained more than 100 engineers in Kubernetes fundamentals, led
            DevOps transitions from legacy systems to modern infrastructure, and
            helped cross-functional teams work better together through smarter
            tooling and clearer communication. I also founded the ngParty meetup
            group, which has grown into a space for developers and operations
            folks to learn and share.
          </div>
        </div>

        <div
          className="flex-1 relative flex items-end justify-center min-h-[480px]"
          data-oid="59a2524"
        >
          <div className="relative w-full" data-oid="g4c62u6">
            <Image
              src="/Me-About_Me.webp"
              alt="Mario Vejlupek"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              quality={90}
              data-oid="ri2sn7."
            />

            <Image
              src="/Computer_Mess-About_Me.webp"
              alt="Computer with code"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
              quality={90}
              data-oid="0fvx88g"
            />
          </div>

          <div
            className="absolute left-0 bottom-12 w-full flex flex-col items-end z-30"
            data-oid="tg0-e3:"
          >
            <span
              className="inline-block font-bold italic text-2xl md:text-3xl text-white bg-[#D97D7D] px-4 py-2 mb-1"
              style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
              data-oid="l19_ro9"
            >
              I believe in making complex systems
              <br data-oid="r6::tql" />
              understandable, usable, and empowering
            </span>
            <span
              className="inline-block font-bold italic text-2xl md:text-3xl text-white bg-[#D97D7D] px-4 py-2"
              style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
              data-oid="k9yzp_y"
            >
              — whether you're a startup
              <br data-oid="dzce_5r" />
              or an enterprise.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
