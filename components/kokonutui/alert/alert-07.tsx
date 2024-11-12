import { Button } from "@/components/ui/button";

export default function Alert07() {
    return (
        <div>
            <div className="bg-zinc-900 dark:bg-white/95 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center gap-2 p-6 shadow-lg border border-gray-800/20 dark:border-gray-200/20">
                <div className="text-gray-50 dark:text-gray-800 my-2 font-semibold">
                    FREE TRIAL EXPIRED
                </div>
                <div className="flex flex-col items-center justify-center gap-6">
                    <p className="text-center text-sm text-gray-300 dark:text-gray-600">
                        Subscribe now to continue using our services.
                    </p>
                    <Button
                        type="button"
                        className="relative group overflow-hidden bg-white/10 dark:bg-gray-50 hover:bg-white/20 dark:hover:bg-gray-100 backdrop-blur-sm border border-gray-600/30 dark:border-gray-300/30 transition-all duration-300"
                    >
                        <span className="relative z-10 font-semibold text-sm text-gray-100 dark:text-gray-900">
                            Subscribe Now
                        </span>
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-gray-200/40 transition-transform duration-700 ease-out" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
