import { Sparkles } from "lucide-react";
import Link from "next/link";

interface Block03LoginProps {
    children?: React.ReactNode;
}

export default function Block03Login({ children }: Block03LoginProps) {
    return (
        <div className="relative w-full min-h-screen bg-white dark:bg-black/5 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-zinc-50/50 dark:bg-zinc-900/50" />
            </div>

            <div className="relative flex min-h-screen flex-col items-center justify-center p-4">
                <Link href="#" className="mb-8 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-white dark:text-black" />
                    </div>
                    <span className="font-bold text-xl text-zinc-900 dark:text-white">
                        Acme
                    </span>
                </Link>

                <div className="w-full max-w-md">
                    <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-xl border border-zinc-200/50 dark:border-zinc-800/50">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
