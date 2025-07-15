"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

const filters = [
  { name: "Newest", value: "newest" },
  { name: "Popular", value: "popular" },
  { name: "Unanswered", value: "unanswered" },
  { name: "Recommended", value: "recommended" },
];

const HomeFilter = () => {
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");
  const router = useRouter();
  const [active, setActive] = useState(filterParams || "");
  const handleClick = (filter: string) => {
    let newUrl = "";
    if (!filter || filter === active) {
      setActive("");
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    } else {
      setActive(filter);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase(),
      });
    }
    router.push(newUrl, { scroll: false });
  };
  return (
    <div className="hidden flex-wrap gap-3 sm:flex">
      {filters.map((i) => {
        return (
          <Button
            onClick={() => {
              handleClick(i.value);
            }}
            className={cn(
              `cursor-pointer rounded-lg px-6 py-3 body-medium capitalize shadow-none`,
              active == i.value
                ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
                : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
            )}
            key={i.name}
          >
            {i.name}
          </Button>
        );
      })}
    </div>
  );
};

export default HomeFilter;
