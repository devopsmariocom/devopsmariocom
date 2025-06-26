import Image from "next/image";

interface TestimonialProps {
  name: string;
  title: string;
  quote: string;
  image: string;
  imageAlt: string;
  alignment?: "left" | "right";
}

export default function Testimonial({
  name,
  title,
  quote,
  image,
  imageAlt,
  alignment = "left",
}: TestimonialProps) {
  const isLeft = alignment === "left";
  return (
    <div
      className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 min-h-[220px]"
      data-oid="9.1yzmn"
    >
      {isLeft ? (
        <>
          {/* Quote (left) */}
          <div
            className="flex-1 flex flex-col justify-left items-end max-w-[340px] md:max-w-[320px] h-full"
            data-oid="1tf3df-"
          >
            <div
              className="text-gray-800 text-base md:text-lg italic text-right"
              style={{ maxWidth: 320 }}
              data-oid="i1crnt5"
            >
              "{quote}"
            </div>
          </div>
          {/* Image (center) */}
          <div
            className="flex-shrink-0 rounded-full overflow-hidden border-4 border-gray-200 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white"
            data-oid="ij6rc09"
          >
            <Image
              src={image}
              alt={imageAlt}
              width={160}
              height={160}
              className="object-cover w-full h-full"
              data-oid="nb.xfnt"
            />
          </div>
          {/* Name/Title (right) */}
          <div
            className="flex-1 flex flex-col justify-center items-start max-w-[340px] md:max-w-[320px] h-full"
            data-oid="s:c_4g7"
          >
            <div
              className="text-lg md:text-xl font-bold italic text-gray-800 mb-1 text-left"
              data-oid="8ayouqw"
            >
              {name}
            </div>
            <div
              className="text-base md:text-lg italic text-gray-600 text-left"
              data-oid="2.tg.-q"
            >
              {title}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Name/Title (left) */}
          <div
            className="flex-1 flex flex-col justify-right items-end max-w-[340px] md:max-w-[320px] h-full"
            data-oid="altasm2"
          >
            <div
              className="text-lg md:text-xl font-bold italic text-gray-800 mb-1 text-right"
              data-oid=".vjiahs"
            >
              {name}
            </div>
            <div
              className="text-base md:text-lg italic text-gray-600 text-right"
              data-oid="ys3vbds"
            >
              {title}
            </div>
          </div>
          {/* Image (center) */}
          <div
            className="flex-shrink-0 rounded-full overflow-hidden border-4 border-gray-200 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white"
            data-oid=":hvpjfc"
          >
            <Image
              src={image}
              alt={imageAlt}
              width={160}
              height={160}
              className="object-cover w-full h-full"
              data-oid="9.6d4q1"
            />
          </div>
          {/* Quote (right) */}
          <div
            className="flex-1 flex flex-col justify-center items-start max-w-[340px] md:max-w-[320px] h-full"
            data-oid="lg18103"
          >
            <div
              className="text-gray-800 text-base md:text-lg italic text-left"
              style={{ maxWidth: 320 }}
              data-oid="6n6rm:9"
            >
              "{quote}"
            </div>
          </div>
        </>
      )}
    </div>
  );
}
