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
    >
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-8">
        <div className="flex-1 flex flex-col items-start min-w-[320px] relative z-10">
          <div className="flex items-center mb-8">
            <Image
              src="/DevOpsMario-Logo-Tail.svg"
              alt="DevOpsMario Logo"
              loading="lazy"
              width={200}
              height={80}
              className="h-10 w-auto mr-4 ml-4 sm:h-14 sm:mr-10 sm:ml-10"
            />
          </div>
          <div className="mt-24 text-sm text-gray-300">
            © 2025 Mario Vejlupek
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start min-w-[320px] z-10">
          <div
            className="text-4xl font-bold italic text-gray-400 mb-6"
            style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
          >
            Let's Stay in Touch
          </div>
          <div className="mb-2">
            <span className="font-bold text-white">Mario Vejlupek</span>
          </div>
          <div className="mb-2">DevOps Consultant</div>
          <div className="mb-4">Timezone: Central Europe / Prague</div>
          <div className="mb-2">
            EMAIL{" "}
            <a href="mailto:hello@devopsmario.com" className="underline">
              hello@devopsmario.com
            </a>
          </div>
          <div className="mb-2">
            LINKS{" "}
            <a
              href="https://www.linkedin.com/company/devopsmario/"
              className="underline"
            >
              [LinkedIn]
            </a>{" "}
            <a href="https://github.com/devopsmariocom" className="underline">
              [GitHub]
            </a>{" "}
            <a
              href="https://calendar.app.google/8g9KQJMnCWqejdXn6"
              className="underline"
            >
              [Book a Call]
            </a>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start min-w-[320px] z-10">
          <div className="mb-6">
            <div className="font-bold mb-1">BILLING ADDRESS</div>
            <div>
              Vejlupek s.r.o.
              <br />
              Kurzova 2222/16, 155 00 Prague
              <br />
              Czech republic
              <br />
              VAT ID CZ 17452899
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
