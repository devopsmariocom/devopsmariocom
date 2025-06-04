import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-[#393939] text-gray-100 pt-12 pb-6 px-0 border-t border-black relative overflow-hidden"
      style={{
        background:
          "#393939 url('/Pipelines-Tail.svg') left center no-repeat; background-size: auto 80%",
      }}
      data-oid="wow:gcq"
    >
      <div
        className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-8"
        data-oid=":d.lobn"
      >
        <div
          className="flex-1 flex flex-col items-start min-w-[320px] relative z-10"
          data-oid="h.1p68e"
        >
          <div className="flex items-center mb-8" data-oid="6pai4vz">
            <Image
              src="/DevOpsMario-Logo-Tail.svg"
              alt="DevOpsMario Logo"
              loading="lazy"
              width={200}
              height={80}
              className="h-10 w-auto mr-4 ml-4 sm:h-14 sm:mr-10 sm:ml-10"
              data-oid="x.s9745"
            />
          </div>
          <div className="mt-24 text-sm text-gray-300" data-oid="20:nl3d">
            © 2025 Mario Vejlupek
          </div>
        </div>

        <div
          className="flex-1 flex flex-col items-start min-w-[320px] z-10"
          data-oid="fdbz:uh"
        >
          <div
            className="text-4xl font-bold italic text-gray-400 mb-6"
            style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
            data-oid="50fp6q1"
          >
            Let's Stay in Touch
          </div>
          <div className="mb-2" data-oid="gf.np60">
            <span className="font-bold text-white" data-oid="67eyjx2">
              Mario Vejlupek
            </span>
          </div>
          <div className="mb-2" data-oid="68w4js4">
            DevOps Consultant
          </div>
          <div className="mb-4" data-oid="id2s5_s">
            Timezone: Central Europe / Prague
          </div>
          <div className="mb-2" data-oid="yfsukie">
            EMAIL{" "}
            <a
              href="mailto:hello@devopsmario.com"
              className="underline"
              data-oid="ue.z.71"
            >
              hello@devopsmario.com
            </a>
          </div>
          <div className="mb-2" data-oid="-dphuva">
            LINKS{" "}
            <a
              href="https://www.linkedin.com/company/devopsmario/"
              className="underline"
              data-oid="ihlbi-_"
            >
              [LinkedIn]
            </a>{" "}
            <a
              href="https://github.com/devopsmariocom"
              className="underline"
              data-oid="u8pxz9z"
            >
              [GitHub]
            </a>{" "}
            <a
              href="https://calendar.app.google/8g9KQJMnCWqejdXn6"
              className="underline"
              data-oid="z6-36i3"
            >
              [Book a Call]
            </a>
          </div>
        </div>

        <div
          className="flex-1 flex flex-col items-start min-w-[320px] z-10"
          data-oid="hm:etgc"
        >
          <div className="mb-6" data-oid="f0ei7c6">
            <div className="font-bold mb-1" data-oid="pqazi7z">
              BILLING ADDRESS
            </div>
            <div data-oid="c:tv3fw">
              Vejlupek s.r.o.
              <br data-oid="ri4cv.6" />
              Kurzova 2222/16, 155 00 Prague
              <br data-oid="2.lv40d" />
              Czech republic
              <br data-oid="xvqnky9" />
              VAT ID CZ 17452899
            </div>
          </div>
          <div data-oid="h1gqbh-">
            <div className="font-bold mb-1" data-oid="oq6m4-s">
              CONTACT ADDRESS
            </div>
            <div data-oid="i80fh4.">
              Mario Vejlupek
              <br data-oid="8s671h3" />
              tř. Masarykova 128, 698 01 Veselí and Moravou
              <br data-oid="d872wem" />
              Czech republic
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
