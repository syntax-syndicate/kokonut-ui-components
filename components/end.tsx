import { Sparkles } from "lucide-react";
import Arrow25 from "@/components/kokonutui/arrow25";

export function EndPage() {
    return (
        <>
            <div className="flex items-center justify-center gap-2 mt-6 text-base text-zinc-500 dark:text-zinc-400">
                <Arrow25 className="w-12 h-12 rotate-180" />
                <span>Built with KokonutUI components</span>
            </div>
            <div className="text-center mt-24 mb-16">
                <div
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm 
            bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20
            border border-emerald-200/50 dark:border-emerald-800/50 shadow-sm"
                >
                    <Sparkles className="w-4 h-4 mr-2 text-emerald-500" />
                    <span>50+ Components and Growing</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">
                    Open Source, Customizable & Accessible
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400 w-10/12 mx-auto">
                    Cards, Buttons, Lists, AI Inputs, Alerts, and more.
                </p>
            </div>
        </>
    );
}
