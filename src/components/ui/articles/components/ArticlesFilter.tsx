"use client";

import { filters } from "@/lib/constants";
import useArticlesFilter from "@/components/ui/articles/hooks/useArticlesFilter";

const ArticlesFilter = () => {
  const [activeFilter, handleFiltersState] = useArticlesFilter();
  return (
    <div className="flex flex-col sm:flex-row gap-5 items-center mt-3">
      {filters.map((btn) => (
        <button
          key={btn.id}
          data-key={btn.id}
          type="button"
          onClick={handleFiltersState}
          className={`${activeFilter === btn.id ? "bg-secondary/20" : "bg-primary/20"} border border-primary/20 ${activeFilter !== btn.id && "shadow shadow-primary/20"} px-5 py-2 rounded-3xl text-lg font-semibold cursor-pointer transition`}
        >
          {btn.title}
        </button>
      ))}
    </div>
  );
};

export default ArticlesFilter;
