import Image from "next/image";

const FeatureItem = ({
  title,
  description,
  image,
  position,
}: {
  title: string;
  description: string;
  image: string;
  position: "left" | "right";
}) => {
  return (
    <div
      className={`group ${position === "left" ? "justify-self-start" : "justify-self-end"} w-1/2 relative overflow-hidden rounded-2xl bg-secondary/5 backdrop-blur-sm border border-primary/10 p-6 transition-all duration-500 hover:bg-secondary/10 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-[1.02]`}
    >
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
          {title}
        </h3>
        <p className="text-primary/80 leading-relaxed text-sm">{description}</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-accent/0 via-accent/50 to-accent/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default FeatureItem;
