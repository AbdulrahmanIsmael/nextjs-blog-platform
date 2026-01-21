import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({
  path,
  id,
  thumbnail,
  title,
  description,
  categories,
}: {
  path: string;
  id: number | string;
  thumbnail: string;
  title: string;
  description: string;
  categories: string[];
}) => {
  return (
    <div className="rounded-2xl outline-2 outline-primary/10 text-center bg-primary/10 shadow-md shadow-primary/20">
      <Link href={path}>
        <div
          className="p-2 w-full overflow-hidden rounded-2xl"
          id={`article-image-${id}`}
        >
          <Image
            src={thumbnail}
            alt={title}
            width={2000}
            height={2000}
            className="hover:scale-140 hover:rotate-10 transition ease-out duration-500 rounded-2xl"
          />
        </div>

        <div
          id={`article-details-${id}`}
          className="flex flex-col items-center gap-5 px-3 py-5"
        >
          <h3 className="mb-5 text-2xl font-semibold ">{title}</h3>
          <p className="text-lg">{description}</p>
          <div
            id={`article-tags-${id}`}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            {categories.map((category, index) => (
              <span className="bg-primary/15 px-3 py-2 rounded-2xl" key={index}>
                {category}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
