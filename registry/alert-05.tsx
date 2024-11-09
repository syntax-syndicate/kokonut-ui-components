import { Alert } from "@/components/ui/alert";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function Alert05() {
    return (
        <div className="w-full max-w-md mx-auto">
            <Alert className="relative bg-white dark:bg-zinc-900 border-none shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_0_rgba(0,0,0,0.2)] p-3 rounded-xl">
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 relative h-12">
                        <div className="relative z-20 h-12 w-12">
                            <Image
                                src="/av02.png"
                                alt="Sarah Chen"
                                fill
                                className="rounded-full object-cover ring-2 ring-white dark:ring-zinc-900"
                            />
                        </div>
                        <div className="absolute z-10 top-0 -right-2 h-12 w-12">
                            <Image
                                src="/av03.png"
                                alt="Mike Wilson"
                                fill
                                className="rounded-full object-cover ring-2 ring-white dark:ring-zinc-900"
                            />
                        </div>
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="space-y-1">
                            <p className="text-sm text-zinc-900 dark:text-zinc-100">
                                <span className="font-semibold">
                                    Sarah Chen
                                </span>
                                <span className="text-zinc-500 dark:text-zinc-400">
                                    {" "}
                                    and{" "}
                                </span>
                                <span className="font-semibold">
                                    Mike Wilson
                                </span>
                                <span className="text-zinc-500 dark:text-zinc-400">
                                    {" "}
                                    liked your post
                                </span>
                            </p>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                2m ago
                            </p>
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <div className="p-2 rounded-full bg-rose-50 dark:bg-rose-950">
                            <Heart className="h-4 w-4 text-rose-500 dark:text-rose-400 fill-rose-500 dark:fill-rose-400" />
                        </div>
                    </div>
                </div>

                <div className="mt-3 ml-[3.75rem]">
                    <div className="rounded-md p-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-1">
                            Just launched our new feature! 🚀 Check out the
                            latest updates and let me know what you think!
                        </p>
                    </div>
                </div>
            </Alert>
        </div>
    );
}
