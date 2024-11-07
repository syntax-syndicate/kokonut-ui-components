import { ArrowRight, Calendar, GitFork, Star } from "lucide-react";
import Link from "next/link";

interface Card04Props {
    title?: string;
    description?: string;
    date?: string;
    stars?: number;
    forks?: number;
    tags?: string[];
    url?: string;
}

export default function Card_04({
    title = "Project Title",
    description = "A brief description of your awesome project. Explain what makes it special and unique.",
    date = "Mar 14, 2024",
    stars = 123,
    forks = 45,
    tags = ["typescript", "react", "tailwind"],
    url = "#",
}: Card04Props) {
    return (
        <Link
            href={url}
            className="group block relative p-6 sm:p-8
                rounded-xl border border-zinc-200 dark:border-zinc-800
                bg-white dark:bg-zinc-900
                hover:border-zinc-300 dark:hover:border-zinc-700
                transition-all duration-300"
        >
            <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{date}</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4" />
                        <span>{stars}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <GitFork className="w-4 h-4" />
                        <span>{forks}</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 space-y-2">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {description}
                </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium
                            bg-zinc-100 dark:bg-zinc-800
                            text-zinc-700 dark:text-zinc-300
                            border border-zinc-200 dark:border-zinc-700"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="absolute right-6 sm:right-8 top-6 sm:top-8">
                <div
                    className="p-2 -m-2 rounded-full
                    text-zinc-600 dark:text-zinc-400
                    group-hover:text-zinc-900 dark:group-hover:text-zinc-100
                    transition-colors duration-200"
                >
                    <ArrowRight
                        className="w-5 h-5 transition-transform duration-200
                        group-hover:translate-x-1"
                    />
                </div>
            </div>
        </Link>
    );
}
