import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full min-h-[700px] py-24 px-0 flex items-center justify-center bg-[#E4E4E4]"
      data-oid="-j6krkw"
    >
      <div
        className="flex w-full mx-auto flex-col md:flex-row items-center md:items-stretch justify-between px-8 gap-8"
        data-oid="jepw:7l"
      >
        <div
          className="flex-1 flex flex-col justify-center md:pr-12"
          data-oid="g-krt-y"
        >
          <h2
            className="text-7xl font-bold italic text-gray-800 mb-8"
            style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
            data-oid="0qahuv-"
          >
            About Me
          </h2>
          <div className="text-2xl text-gray-800 mb-4" data-oid="yrtmbjk">
            I'm{" "}
            <span className="font-bold" data-oid="mgfeun4">
              Mario Vejlupek
            </span>{" "}
            — DevOps consultant,
            <br data-oid="prbixil" />
            former developer, meetup founder, and speaker.
          </div>
          <div className="text-lg text-gray-700 mb-8" data-oid="6a.prwt">
            With 20+ years of hands-on experience,
            <br data-oid="wlvy.t3" />
            I've built systems that scale and teams that thrive. I've trained
            engineers in Kubernetes, mentored across time zones, and even taught
            kids to code with LEGO robots.
          </div>
        </div>

        <div
          className="flex-1 relative flex items-end justify-center min-h-[480px]"
          data-oid="h78045p"
        >
          <div className="relative w-full" data-oid="x7g80it">
            <Image
              src="/Me-About_Me.webp"
              alt="Mario Vejlupek"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              quality={90}
              data-oid="7a:k_-p"
            />

            <Image
              src="/Computer_Mess-About_Me.webp"
              alt="Computer with code"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
              quality={90}
              data-oid="bqzof_7"
            />
          </div>

          <div
            className="absolute left-0 bottom-12 w-full flex flex-col items-end z-30"
            data-oid="686ijt3"
          >
            <span
              className="inline-block font-bold italic text-2xl md:text-3xl text-white bg-[#D97D7D] px-4 py-2 mb-1"
              style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
              data-oid="lg:awo-"
            >
              I believe in making complex systems
              <br data-oid=":nk72jr" />
              understandable, usable, and empowering
            </span>
            <span
              className="inline-block font-bold italic text-2xl md:text-3xl text-white bg-[#D97D7D] px-4 py-2"
              style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
              data-oid="i9zhxn2"
            >
              — whether you're a startup
              <br data-oid="fbc3q.n" />
              or an enterprise.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
