import { T_tags } from "@/types/constants-types";
import { setTagSize } from "@/lib/utils";

const Tags = ({ tags }: { tags: T_tags }) => {
  return (
    <>
      {tags.map((tag) => (
        <li
          key={tag.id}
          title={`${tag.title} tag`}
          className={`${
            tag.color
          } text-center shadow-sm shadow-primary rounded-4xl ${setTagSize(
            tag.priority,
          )} cursor-pointer hover:shadow-xl hover:shadow-primary/50 transition`}
        >
          {tag.title}
        </li>
      ))}
    </>
  );
};

export default Tags;
