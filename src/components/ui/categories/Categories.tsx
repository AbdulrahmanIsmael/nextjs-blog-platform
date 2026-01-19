import Section from "@/components/shared/Section";
import Tags from "./components/Tags";
import Title from "@/components/shared/Title";
import { tags } from "@/lib/constants";

const Categories = () => {
  return (
    <Section className="border-0!">
      <Title title="Categories" position="left" key="categories" />
      <ul className="mt-25 flex flex-wrap items-center justify-center gap-x-5 gap-y-10">
        <Tags tags={tags} />
      </ul>
    </Section>
  );
};

export default Categories;
