import Button from "@/components/shared/Button";
import { FaCheck } from "react-icons/fa";
import Section from "@/components/shared/Section";

const OurValue = () => {
  const values = [
    "Made for Everyone, but Specialized for Programmers",
    "Shared Knowledge from Professionals",
    "Focus on Clarity, not Hype",
  ];
  return (
    <Section className="px-15 py-30 max-sm:text-center relative isolate bg-[url('/assets/images/value.jpg')] bg-cover bg-bottom flex flex-col gap-y-15 w-screen ml-[calc(-50vw+50%)]">
      <div className="absolute inset-0 bg-black/50 -z-10" />

      <div className="flex flex-col gap-y-15">
        <h3 className="text-white text-[clamp(2.5rem,4vw,5rem)] font-bold tracking-wider">
          Why Using Readora?
        </h3>
        <ul className="flex flex-wrap items-center justify-between gap-y-8 gap-x-5 px-8">
          {values.map((v, index) => (
            <li key={index} className="flex items-center gap-x-3">
              <FaCheck color="lightgreen" size={30} />
              <p className="text-left text-[clamp(1.2rem,1.5vw,1.5rem)] text-white font-semibold">
                {v}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <Button
        className="text-white w-full text-center sm:w-fit text-3xl font-semibold rounded-xl! px-8! py-4!"
        type="link"
        title="Sign In"
        path="/"
      >
        Sign In Now!
      </Button>
    </Section>
  );
};

export default OurValue;
