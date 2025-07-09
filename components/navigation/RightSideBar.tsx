/* eslint-disable better-tailwindcss/no-unregistered-classes */
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Routes from "@/constant/routes";
import TagCards from "../cards/TagCards";

const topQuestions: { _id: number; title: string }[] = [
  { _id: 1, title: "How to create a custom hook in React" },
  { _id: 2, title: "What is the difference between useState and useReducer?" },
  { _id: 3, title: "How to use useEffect hook in React?" },
  { _id: 4, title: "What is the purpose of useMemo and useCallback hooks?" },
  { _id: 5, title: "How to handle forms in React?" },
];

const popularTags = [
  { _id: "1", name: "react", questions: 120 },
  { _id: "2", name: "javaScript", questions: 200 },
  { _id: "3", name: "css3", questions: 80 },
  { _id: "4", name: "html5", questions: 150 },
  { _id: "5", name: "node.js", questions: 90 },
];
const RightSideBar = () => {
  return (
    <section className="custom-scrollbar sticky top-0 right-0 flex h-[calc(100vh-10vh)] w-[350px] flex-col overflow-y-auto border-l light-border background-light900_dark200 p-6 shadow-light-300 max-lg:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((i) => {
            const { _id, title } = i;
            return (
              <Link key={_id} href={Routes.PROFILE(_id)}>
                <div className="flex cursor-pointer items-center justify-between gap-4">
                  <p className="body-medium text-dark500_light700">{title}</p>
                  <Image
                    src="/icons/chevron-right.svg"
                    width={20}
                    height={20}
                    alt="chevron-right"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-10">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag)=>{
            const { _id, name, questions } = tag;
            return (
              <TagCards key={_id} _id={_id} name={name} questions={questions} showCount compact />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
