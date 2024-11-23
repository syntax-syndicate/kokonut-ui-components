import { cn } from "@/lib/utils";

interface CardWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export function CardWrapper({ children, className }: CardWrapperProps) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div
                className={cn(
                    "w-full max-w-md bg-white dark:bg-zinc-900",
                    "rounded-2xl shadow-xl",
                    "border border-zinc-200 dark:border-zinc-800",
                    "p-8",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}
