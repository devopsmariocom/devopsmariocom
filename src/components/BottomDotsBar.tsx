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
    <div className="bottom-dots" data-oid="d:39fm8">
      <div className="icon-carousel" data-oid="caxa1yx">
        {[...Array(4)].map((_, groupIndex) => (
          <div key={groupIndex} className="icon-group" data-oid="vju.:d6">
            {techIcons.map((icon, index) => (
              <Image
                key={`${groupIndex}-${index}`}
                src={icon.src}
                alt={icon.alt}
                width={40}
                height={40}
                className="tech-icon"
                data-oid="-xukcfv"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
