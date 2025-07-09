import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { techMap } from "@/constant/techMap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const formattedName = techName.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  console.log("Formatted Tech Name:", formattedName);
  
  return techMap[formattedName]
    ? `${techMap[formattedName]} colored`
    : `devicon-devicon-plain`;
};
