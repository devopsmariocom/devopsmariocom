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
      className={`w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12`}
      data-oid="rreb3ve"
    >
      {isLeft ? (
        <>
          {/* Quote (left) */}
          <div
            className="flex-1 max-w-[340px] md:max-w-[320px]"
            data-oid="rjx0twn"
          >
            <div
              className="text-gray-800 text-sm md:text-base italic text-left md:text-right"
              data-oid="id_cple"
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
            className="flex-1 max-w-[340px] md:max-w-[320px]"
            data-oid="rcd.ioe"
          >
            <div
              className="text-lg md:text-xl font-bold italic text-gray-800 mb-1 text-left md:text-left"
              data-oid="5f8dc4y"
            >
              {name}
            </div>
            <div
              className="text-base md:text-lg italic text-gray-600 text-left md:text-left"
              data-oid="wugm038"
            >
              {title}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Name/Title (left) */}
          <div
            className="flex-1 max-w-[340px] md:max-w-[320px]"
            data-oid="fuba3ai"
          >
            <div
              className="text-lg md:text-xl font-bold italic text-gray-800 mb-1 text-left md:text-left"
              data-oid="l24obvc"
            >
              {name}
            </div>
            <div
              className="text-base md:text-lg italic text-gray-600 text-left md:text-left"
              data-oid="f-zvhcn"
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
            className="flex-1 max-w-[340px] md:max-w-[320px]"
            data-oid="4gpp8ci"
          >
            <div
              className="text-gray-800 text-sm md:text-base italic text-left md:text-right"
              data-oid="1:mn3k7"
            >
              "{quote}"
            </div>
          </div>
        </>
      )}
    </div>
  );
}
