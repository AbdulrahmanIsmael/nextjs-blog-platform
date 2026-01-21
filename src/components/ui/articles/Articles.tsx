import ArticleCard from "../../shared/ArticleCard";
import ArticlesFilter from "./components/ArticlesFilter";
import Section from "@/components/shared/Section";
import Title from "@/components/shared/Title";
import { customArticles } from "@/lib/constants";

const Articles = () => {
  return (
    <Section className="w-screen ml-[calc(-50vw+50%)]">
      <div className="container mx-auto">
        <Title title="Articles" position="right" key="articles" />

        <div className="flex flex-col justify-center items-center">
          <ArticlesFilter />

          <ul className="w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-25">
            {customArticles.map((article) => (
              <li key={article.id}>
                <ArticleCard
                  path={article.path}
                  id={article.id}
                  description={article.description}
                  thumbnail={article.thumbnail}
                  title={article.title}
                  categories={article.categories}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Articles;
