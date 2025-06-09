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
      data-oid="bcptgew"
    >
      <div
        className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-8"
        data-oid=".bus2uj"
      >
        <div
          className="flex-1 flex flex-col items-start min-w-[320px] relative z-10"
          data-oid="ke5xcr0"
        >
          <div className="flex items-center mb-8" data-oid="a_0:y0:">
            <Image
              src="/DevOpsMario-Logo-Tail.svg"
              alt="DevOpsMario Logo"
              loading="lazy"
              width={200}
              height={80}
              className="h-10 w-auto mr-4 ml-4 sm:h-14 sm:mr-10 sm:ml-10"
              data-oid="rbae4ha"
            />
          </div>
          <div className="mt-24 text-sm text-gray-300" data-oid="uj.rj00">
            © 2025 Mario Vejlupek
          </div>
        </div>

        <div
          className="flex-1 flex flex-col items-start min-w-[320px] z-10"
          data-oid="lbsypvw"
        >
          <div
            className="text-4xl font-bold italic text-gray-400 mb-6"
            style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
            data-oid="efush35"
          >
            Let's Stay in Touch
          </div>
          <div className="mb-2" data-oid=":_g57w6">
            <span className="font-bold text-white" data-oid="k1syw4c">
              Mario Vejlupek
            </span>
          </div>
          <div className="mb-2" data-oid="-.bgfk5">
            DevOps Consultant
          </div>
          <div className="mb-4" data-oid=":ilb-sk">
            Timezone: Central Europe / Prague
          </div>
          <div className="mb-2" data-oid="13_j-qj">
            EMAIL{" "}
            <a
              href="mailto:hello@devopsmario.com"
              className="underline"
              data-oid="p6:9g8a"
            >
              hello@devopsmario.com
            </a>
          </div>
          <div className="mb-2" data-oid=":etq.uo">
            LINKS{" "}
            <a
              href="https://www.linkedin.com/company/devopsmario/"
              className="underline"
              data-oid="ubrmf3-"
            >
              [LinkedIn]
            </a>{" "}
            <a
              href="https://github.com/devopsmariocom"
              className="underline"
              data-oid="_rmsm97"
            >
              [GitHub]
            </a>{" "}
            <a
              href="https://calendar.app.google/8g9KQJMnCWqejdXn6"
              className="underline"
              data-oid="vcroixa"
            >
              [Book a Call]
            </a>
          </div>
        </div>

        <div
          className="flex-1 flex flex-col items-start min-w-[320px] z-10"
          data-oid="4g44u55"
        >
          <div className="mb-6" data-oid="8w7q9hb">
            <div className="font-bold mb-1" data-oid="lq9wknf">
              BILLING ADDRESS
            </div>
            <div data-oid="0k4x1eo">
              Vejlupek s.r.o.
              <br data-oid="i5tly2n" />
              Kurzova 2222/16, 155 00 Prague
              <br data-oid="04_x4.5" />
              Czech republic
              <br data-oid="1na501d" />
              VAT ID CZ 17452899
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
