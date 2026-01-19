import Articles from "@/components/ui/articles/Articles";
import Categories from "@/components/ui/categories/Categories";
import OurValue from "@/components/ui/platform-value/OurValue";
import Showcase from "@/components/ui/showcase/Showcase";

export default function Home() {
  return (
    <>
      <Showcase />
      <Categories />
      <Articles />
      <OurValue />
    </>
  );
}
