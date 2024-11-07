"use client";

import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Card03Props {
    title?: string;
    description?: string;
    image?: string;
    githubUrl?: string;
    demoUrl?: string;
}

export default function Card_03({
    title = "Project Title",
    description = "A brief description of your awesome project. Explain what makes it special.",
    image = "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
    githubUrl = "#",
    demoUrl = "#",
}: Card03Props) {
    return (
        <div
            className="group relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800
            bg-white dark:bg-zinc-900 
            hover:border-zinc-300 dark:hover:border-zinc-700
            transition-all duration-300"
        >
            {/* Image Container */}
            <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 
                        group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />

                {/* Tags Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Link
                        href={githubUrl}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full
                            text-xs font-medium
                            bg-white/90 dark:bg-zinc-900/90
                            text-zinc-800 dark:text-zinc-200
                            hover:bg-white dark:hover:bg-zinc-900
                            transition-colors duration-200
                            backdrop-blur-sm"
                    >
                        <Github className="w-3.5 h-3.5" />
                        <span className="relative top-px">Source</span>
                    </Link>
                    <Link
                        href={demoUrl}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full
                            text-xs font-medium
                            bg-white/90 dark:bg-zinc-900/90
                            text-zinc-800 dark:text-zinc-200
                            hover:bg-white dark:hover:bg-zinc-900
                            transition-colors duration-200
                            backdrop-blur-sm"
                    >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span className="relative top-px">Demo</span>
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                            {title}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                            {description}
                        </p>
                    </div>
                    <div
                        className="p-2 rounded-full 
                        bg-zinc-100 dark:bg-zinc-800
                        group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700
                        transition-all duration-200
                        group-hover:rotate-45 group-hover:scale-110"
                    >
                        <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                    </div>
                </div>
            </div>
        </div>
    );
}
