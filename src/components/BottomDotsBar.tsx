import Image from "next/image";

const techIcons = [
  { src: "/kubernetes.svg", alt: "Kubernetes" },
  { src: "/terraform.svg", alt: "Terraform" },
  { src: "/python.svg", alt: "Python" },
  { src: "/git.svg", alt: "Git" },
  { src: "/gitlab.svg", alt: "GitLab" },
  { src: "/azure.svg", alt: "Azure" },
  { src: "/argo-cd.svg", alt: "Argo CD" },
  { src: "/aws.svg", alt: "AWS" },
];

export default function BottomDotsBar() {
  return (
    <div className="bottom-dots" data-oid=":oeyn1w">
      <div className="icon-carousel border-[#00000000]" data-oid="rh04hco">
        {[...Array(4)].map((_, groupIndex) => (
          <div key={groupIndex} className="icon-group" data-oid="eetuunw">
            {techIcons.map((icon, index) => (
              <Image
                key={`${groupIndex}-${index}`}
                src={icon.src}
                alt={icon.alt}
                width={40}
                height={40}
                className="tech-icon"
                data-oid="4klzd63"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
