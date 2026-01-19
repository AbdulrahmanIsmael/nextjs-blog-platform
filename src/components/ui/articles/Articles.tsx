import ArticlesFilter from "./components/ArticlesFilter";
import Image from "next/image";
import Link from "next/link";
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
              <li
                key={article.id}
                className="rounded-2xl outline-2 outline-primary/10 text-center bg-primary/10"
              >
                <Link href={article.path}>
                  <div
                    className="w-full overflow-hidden rounded-t-2xl"
                    id={`article-image-${article.id}`}
                  >
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      width={2000}
                      height={2000}
                      className="hover:scale-140 hover:rotate-10 transition ease-out duration-500 rounded-t-2xl"
                    />
                  </div>

                  <div
                    id={`article-details-${article.id}`}
                    className="flex flex-col items-center gap-5 px-3 py-5"
                  >
                    <h3 className="mb-5 text-2xl font-semibold ">
                      {article.title}
                    </h3>
                    <p className="text-lg">{article.description}</p>
                    <div
                      id={`article-tags-${article.id}`}
                      className="flex flex-wrap items-center justify-center gap-5"
                    >
                      {article.categories.map((category, index) => (
                        <span
                          className="bg-primary/15 px-3 py-2 rounded-2xl"
                          key={index}
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Articles;
