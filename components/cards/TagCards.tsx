import Route from "@/constant/routes";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { getDeviconClassName } from "@/lib/utils";

interface TagCardsProps {
  _id: string;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCards = ({
  _id,
  name,
  questions,
  showCount,
  compact,
}: TagCardsProps) => {

  const iconClass = getDeviconClassName(name);
  return (
    <Link
      href={Route.TAGS(_id)}
      className="flex items-center justify-between gap-2"
    >
      <Badge className="rounded-md border-none background-light800_dark300 px-3 py-2 subtle-medium text-light400_light500 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm invert-colors`}></i>
          <span>{name}</span>
        </div>
      </Badge>
      {showCount && (
        <span className="small-medium text-dark500_light700">{questions}+</span>
      )}
    </Link>
  );
};

export default TagCards;
