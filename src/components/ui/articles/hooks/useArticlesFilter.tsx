"use client";

import { MouseEventHandler, useState } from "react";

const useArticlesFilter = (): [
  number,
  MouseEventHandler<HTMLButtonElement>,
] => {
  const [activeFilter, setActiveFilter] = useState(1);

  const updateFiltersState: MouseEventHandler<HTMLButtonElement> = (e) => {
    const key = (e.currentTarget as HTMLButtonElement).dataset.key;
    if (!key) return;
    const id = +key;
    setActiveFilter(id);
  };

  return [activeFilter, updateFiltersState];
};

export default useArticlesFilter;
