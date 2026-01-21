import FeatureItem from "./components/FeatureItem";
import Section from "@/components/shared/Section";
import Title from "@/components/shared/Title";
import { features } from "@/lib/constants";

const Features = () => {
  return (
    <Section>
      <Title title="Features" position="left" key="features" />
      <div className="mt-15 grid grid-cols-1">
        {features.map((feature) => (
          <FeatureItem
            key={feature.id}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            position={feature.position === "left" ? "left" : "right"}
          />
        ))}
      </div>
    </Section>
  );
};

export default Features;
