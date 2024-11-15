import { cn } from "@/lib/utils";

import {
    Heart,
    MessageCircle,
    Share2,
    Bookmark,
    MoreHorizontal,
    Link as LinkIcon,
} from "lucide-react";

interface Card01Props {
    author?: {
        name?: string;
        username?: string;
        avatar?: string;
        timeAgo?: string;
    };
    content?: {
        text?: string;
        link?: {
            title?: string;
            description?: string;
            icon?: React.ReactNode;
        };
    };
    engagement?: {
        likes?: number;
        comments?: number;
        shares?: number;
        isLiked?: boolean;
        isBookmarked?: boolean;
    };
}

const defaultProps: Card01Props = {
    author: {
        name: "Dorian Baffier",
        username: "dorian_baffier",
        avatar: "/av02.png",
        timeAgo: "2h ago",
    },
    content: {
        text: "Just launched Kokonut UI! Check out the documentation and let me know what you think 🎨",
        link: {
            title: "Kokonut UI Documentation",
            description: "A comprehensive guide to Kokonut UI",
            icon: <LinkIcon className="w-5 h-5 text-blue-500" />,
        },
    },
    engagement: {
        likes: 128,
        comments: 32,
        shares: 24,
        isLiked: true,
        isBookmarked: false,
    },
};

export default function Card_01({
    author = defaultProps.author,
    content = defaultProps.content,
    engagement = defaultProps.engagement,
}: Card01Props) {
    return (
        <div
            className={cn(
                "w-full max-w-2xl mx-auto",
                "bg-white dark:bg-zinc-900",
                "border border-zinc-200 dark:border-zinc-800",
                "rounded-3xl shadow-xl"
            )}
        >
            <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <img
                                src={author.avatar}
                                alt={author.name}
                                className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-zinc-800"
                            />
                            <div>
                                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    {author.name}
                                </h3>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                    @{author.username} · {author.timeAgo}
                                </p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                        >
                            <MoreHorizontal className="w-5 h-5 text-zinc-400" />
                        </button>
                    </div>

                    <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                        {content.text}
                    </p>

                    {content.link && (
                        <div className="mb-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                            <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-white dark:bg-zinc-700 rounded-xl">
                                        {content.link.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                            {content.link.title}
                                        </h4>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                            {content.link.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-6">
                            <button
                                type="button"
                                className={cn(
                                    "flex items-center gap-2 text-sm",
                                    engagement.isLiked
                                        ? "text-rose-600"
                                        : "text-zinc-500 dark:text-zinc-400 hover:text-rose-600"
                                )}
                            >
                                <Heart
                                    className={cn(
                                        "w-5 h-5",
                                        engagement.isLiked && "fill-current"
                                    )}
                                />
                                <span>{engagement.likes}</span>
                            </button>
                            <button
                                type="button"
                                className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-blue-500 transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>{engagement.comments}</span>
                            </button>
                            <button
                                type="button"
                                className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-green-500 transition-colors"
                            >
                                <Share2 className="w-5 h-5" />
                                <span>{engagement.shares}</span>
                            </button>
                        </div>
                        <button
                            type="button"
                            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-400"
                        >
                            <Bookmark className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
