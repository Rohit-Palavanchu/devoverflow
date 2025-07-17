import Routes from "@/constant/routes";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { getDeviconClassName } from "@/lib/utils";
import Image from "next/image";

interface TagCardsProps {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
}

const TagCards = ({
  _id,
  name,
  questions,
  showCount,
  compact,
  remove,
  isButton,
  handleRemove,
}: TagCardsProps) => {
  const iconClass = getDeviconClassName(name);
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  const content = (
    <>
      <Badge className="rounded-md border-none background-light800_dark300 px-3 py-2 subtle-medium text-light400_light500 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm invert-colors`}></i>
          <span>{name}</span>
        </div>
        {remove && (
          <Image
            src="/icons/close.svg"
            width={12}
            height={12}
            alt="close icon"
            className="cursor-pointer object-contain invert-0 dark:invert"
            onClick={handleRemove}
          />
        )}
      </Badge>
      {showCount && (
        <span className="small-medium text-dark500_light700">{questions}+</span>
      )}
    </>
  );
  if (compact) {
    return isButton ? (
      <button onClick={handleClick} className="flex justify-between gap-2">
        {content}
      </button>
    ) : (
      <Link href={Routes.TAGS(_id)} className="flex justify-between gap-2">
        {content}
      </Link>
    );
  }
};

export default TagCards;
