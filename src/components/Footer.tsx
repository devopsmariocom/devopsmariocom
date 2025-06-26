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
      data-oid="r.r8rt3"
    >
      <div
        className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-8"
        data-oid="l80hgwj"
      >
        <div
          className="flex-1 flex flex-col items-start min-w-[320px] relative z-10"
          data-oid="v13nnq2"
        >
          <div className="flex items-center mb-8" data-oid="_vb0dc1">
            <Image
              src="/DevOpsMario-Logo-Tail.svg"
              alt="DevOpsMario Logo"
              loading="lazy"
              width={200}
              height={80}
              className="h-10 w-auto mr-4 ml-4 sm:h-14 sm:mr-10 sm:ml-10"
              data-oid="yogx8te"
            />
          </div>
          <div className="mt-24 text-sm text-gray-300" data-oid="v.gdgns">
            © 2025 Mario Vejlupek
          </div>
        </div>

        <div
          className="flex-1 flex flex-col items-start min-w-[320px] z-10"
          data-oid="qmldc8r"
        >
          <div
            className="text-4xl font-bold italic text-gray-400 mb-6"
            style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
            data-oid=":qait2c"
          >
            Let's Stay in Touch
          </div>
          <div className="mb-2" data-oid="z-hx44b">
            <span className="font-bold text-white" data-oid="vd75mld">
              Mario Vejlupek
            </span>
          </div>
          <div className="mb-2" data-oid=".bvb0m3">
            DevOps Consultant
          </div>
          <div className="mb-4" data-oid="brbbw65">
            Timezone: Central Europe / Prague
          </div>
          <div className="mb-2" data-oid="b0vnozx">
            EMAIL{" "}
            <a
              href="mailto:hello@devopsmario.com"
              className="underline"
              data-oid="7:utcrg"
            >
              hello@devopsmario.com
            </a>
          </div>
          <div className="mb-2" data-oid="iv5pfr3">
            LINKS{" "}
            <a
              href="https://www.linkedin.com/company/devopsmario/"
              className="underline"
              data-oid="hf76oyk"
            >
              [LinkedIn]
            </a>{" "}
            <a
              href="https://github.com/devopsmariocom"
              className="underline"
              data-oid="e87h825"
            >
              [GitHub]
            </a>{" "}
            <a
              href="https://calendar.app.google/8g9KQJMnCWqejdXn6"
              className="underline"
              data-oid="g-xe::a"
            >
              [Book a Call]
            </a>
          </div>
        </div>

        <div
          className="flex-1 flex flex-col items-start min-w-[320px] z-10"
          data-oid="vw7judb"
        >
          <div className="mb-6" data-oid="moed5-4">
            <div className="font-bold mb-1" data-oid="k4.ze5v">
              BILLING ADDRESS
            </div>
            <div data-oid="b:2rxtb">
              Vejlupek s.r.o.
              <br data-oid="3:c9xmc" />
              Kurzova 2222/16, 155 00 Prague
              <br data-oid="3wqdfgv" />
              Czech republic
              <br data-oid="sra-xi8" />
              VAT ID CZ 17452899
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
