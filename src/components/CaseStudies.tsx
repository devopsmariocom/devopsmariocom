import Image from "next/image";

const caseStudies = [
  {
    title: ["RebuildingKubernetes", "Infrastructure for a WebAgency"],
    description:
      "This two-year gradual migration involved moving from a custom Kubernetes solution to AWS EKS. I redesigned deployment strategies to reduce deployment time from hours to minutes, migrated PostgreSQL databases to managed Aurora or operator-based solutions, and transitioned Prometheus monitoring to Mimir and Loki. Additionally, I implemented complex egress strategies with Istio and Cilium to ensure secure and reliable egress networking.",
  },
  {
    title: ["Containerization", "for a large", "FinTech Company"],
    description:
      "I led the Dockerization and Kubernetes adoption process, delivering hands-on workshops for developers. The result was a custom on-premises Kubernetes platform tailored to their legacy infrastructure, significantly improving scalability and developer autonomy.",
  },
  {
    title: ["Infrastructure for", "a RAGChatbot"],
    description:
      "Designed and deployed a Kubernetes-based infrastructure for a Retrieval-Augmented Generation (RAG) chatbot. This system leveraged Azure OpenAI models for vectorization and inference, providing a scalable and cost-efficient deployment environment.",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="portfolio"
      className="w-full min-h-[900px] py-24 px-0 flex flex-col items-center justify-center bg-white"
      style={{
        background:
          "white url('/Line-Case_Studies.svg') top 60px center no-repeat; background-size: 100% auto",
      }}
      data-oid="the.m.3"
    >
      <div
        className="w-full relative mb-2"
        style={{ height: "70px" }}
        data-oid="xl9tl38"
      >
        <h2
          className="text-7xl font-bold italic text-gray-800 text-center relative z-10"
          style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
          data-oid="t1_.q7f"
        >
          Case Studies
        </h2>
      </div>

      <div
        className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 mt-12"
        data-oid="okqv94r"
      >
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}
            data-oid="ukg8n2e"
          >
            <div className="mb-4" data-oid="7yyqdbf">
              {study.title.map((line, lineIndex) => (
                <span
                  key={lineIndex}
                  className="inline-block font-mono tracking-widest text-lg md:text-2xl text-white bg-[#D97D7D] px-3 py-1 mb-1"
                  data-oid="k:i1hsq"
                >
                  {line}
                </span>
              ))}
            </div>
            <div
              className={`text-center ${index % 2 === 0 ? "md:text-right" : "md:text-left"} max-w-[480px] text-gray-800 text-lg`}
              data-oid="j00.dna"
            >
              {study.description}
              <br data-oid=".4o7khs" />
              ---
            </div>
          </div>
        ))}

        <div
          className="flex flex-col items-center md:items-start justify-end mt-4"
          data-oid="1-23m2o"
          id="lets-chat"
        >
          <div
            className="text-3xl md:text-4xl font-bold italic text-gray-800 mb-8 text-center md:text-left"
            style={{ fontFamily: "Helvetica,Arial,sans-serif" }}
            data-oid="qum:-5."
          >
            Every project is different
            <br data-oid="npfoi8-" />— let's chat about yours.
          </div>
          <a
            href="https://calendar.app.google/8g9KQJMnCWqejdXn6"
            className="inline-block bg-blue-600 text-white text-lg px-8 py-4 rounded shadow hover:bg-blue-700 transition font-semibold"
            data-oid="vrip5tl"
          >
            BOOK A CALL
          </a>
        </div>
      </div>
    </section>
  );
}
