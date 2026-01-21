import Image from "next/image";
import Section from "@/components/shared/Section";
import Title from "@/components/shared/Title";
import aboutImg from "../../../../public/assets/images/about.png";
import { aboutSubjects } from "@/lib/constants";

const AboutUs = () => {
  return (
    <Section>
      <Title title="About Us" position="right" />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl bg-primary/5">
        <div className="relative h-75 lg:h-full">
          <Image
            src={aboutImg}
            alt="About Us Preview Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-center px-8 py-12 lg:px-14">
          <h3 className="text-5xl lg:text-6xl font-extrabold tracking-widest mb-8">
            Readora
          </h3>

          <div className="flex flex-col gap-y-6">
            {aboutSubjects.map((sub, index) => (
              <p
                key={index}
                className="relative pl-6 text-lg lg:text-xl leading-relaxed first-letter:font-bold first-letter:text-3xl first-letter:mr-0.5"
              >
                {sub}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
