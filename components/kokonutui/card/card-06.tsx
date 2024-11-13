import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    ArrowUpRight,
    Clock,
    Code2,
    MessageSquare,
    Plus,
} from "lucide-react";
import Link from "next/link";

interface TeamMember {
    name: string;
    image: string;
}

interface Card06Props {
    title?: string;
    subtitle?: string;
    teamMembers?: TeamMember[];
    stats?: {
        discussions: number;
        commits: number;
    };
    dueDate?: string;
    progress?: number;
}

export default function Card06({
    title = "Mobile App Redesign",
    subtitle = "Design System & Component Library",
    teamMembers = [
        { name: "Alex", image: "/av01.png" },
        { name: "Sarah", image: "/av02.png" },
        { name: "Mike", image: "/av03.png" },
        { name: "Lisa", image: "/av04.png" },
    ],
    stats = {
        discussions: 8,
        commits: 24,
    },
    dueDate = "2 days left",
    progress = 68,
}: Card06Props) {
    return (
        <div
            className="relative h-full rounded-3xl p-6
            bg-white dark:bg-black/5 
            border border-zinc-200 dark:border-zinc-800
            hover:border-zinc-300 dark:hover:border-zinc-700
            transition-all duration-300"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="space-y-1.5">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {subtitle}
                    </p>
                </div>
                <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                    bg-amber-50 dark:bg-amber-900/30
                    text-amber-600 dark:text-amber-400
                    text-xs font-medium"
                >
                    <Clock className="w-3.5 h-3.5" />
                    <span>{dueDate}</span>
                </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
                <div className="flex -space-x-2">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="relative group/member"
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={32}
                                height={32}
                                className="rounded-full ring-2 ring-white dark:ring-zinc-900
                                    transition-transform hover:-translate-y-1 duration-200"
                            />
                            <span
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2
                                px-2 py-1 rounded-md text-[10px]
                                bg-zinc-900 dark:bg-zinc-100
                                text-white dark:text-zinc-900
                                opacity-0 group-hover/member:opacity-100
                                transition-opacity duration-200"
                            >
                                {member.name}
                            </span>
                        </div>
                    ))}
                </div>
                <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 rounded-full
                        bg-zinc-100 dark:bg-zinc-800/50
                        hover:bg-zinc-200 dark:hover:bg-zinc-700/50
                        border-zinc-200 dark:border-zinc-700"
                >
                    <Plus className="w-4 h-4" />
                </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div
                    className="flex items-center gap-2 p-3 rounded-xl
                    bg-zinc-50 dark:bg-zinc-800/50
                    border border-zinc-200/50 dark:border-zinc-800/50"
                >
                    <MessageSquare className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {stats.discussions} discussions
                    </span>
                </div>
                <div
                    className="flex items-center gap-2 p-3 rounded-xl
                    bg-zinc-50 dark:bg-zinc-800/50
                    border border-zinc-200/50 dark:border-zinc-800/50"
                >
                    <Code2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {stats.commits} commits
                    </span>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">
                        Progress
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400">
                        {progress}%
                    </span>
                </div>
                <div className="h-2 rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <div
                        className="h-full rounded-full bg-indigo-500 dark:bg-indigo-400
                            transition-all duration-1000 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="mt-6 pt-4 space-y-4 border-t border-zinc-200 dark:border-zinc-800">
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium
                        text-zinc-600 hover:text-zinc-900 
                        dark:text-zinc-400 dark:hover:text-white
                        transition-colors duration-200"
                >
                    View Project Details
                    <ArrowUpRight className="w-4 h-4" />
                </Link>

                <div className="space-y-3">
                    <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

                    <div className="space-y-2">
                        <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Notes
                        </h4>
                    </div>
                    <div className="space-y-2">
                        <div
                            className="flex items-start gap-2 p-3 rounded-xl
                            bg-zinc-50 dark:bg-zinc-800/50
                            border border-zinc-200/50 dark:border-zinc-800/50"
                        >
                            <Image
                                src="/av01.png"
                                alt="Alex"
                                width={20}
                                height={20}
                                className="rounded-full mt-0.5"
                            />
                            <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                        Alex
                                    </span>
                                    <span className="text-[10px] text-zinc-400">
                                        2h ago
                                    </span>
                                </div>
                                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                                    Updated the design system with new color
                                    tokens
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
