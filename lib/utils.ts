import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";
import { cache } from "react";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
