import { Alert } from "@/components/ui/alert";
import { CheckCircle2 } from "lucide-react";

export default function Alert01() {
    return (
        <div className="w-full max-w-xl mx-auto">
            <Alert className="relative bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4">
                <div className="flex gap-3">
                    <div className="p-2 rounded-full">
                        <div className="rounded-full bg-zinc-50 dark:bg-zinc-900">
                            <CheckCircle2 className="h-6 w-6 text-zinc-400 dark:text-zinc-500" />
                        </div>
                    </div>

                    <div className="space-y-0.5">
                        <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Kokonut UI
                        </h3>
                        <p className="text-[13px] text-zinc-500 dark:text-zinc-400">
                            Use the CLI to install this!
                        </p>
                    </div>
                </div>
            </Alert>
        </div>
    );
}
