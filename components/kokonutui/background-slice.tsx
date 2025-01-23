import { cn } from "@/lib/utils";

interface BackgroundSliceProps {
    children?: React.ReactNode;
    className?: string;
}

export default function BackgroundSlice({
    children,
    className,
    ...props
}: BackgroundSliceProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                `
                relative
                max-w-md mx-auto
                w-full
                bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900
                dark:from-black dark:via-neutral-900 dark:to-black
                border border-neutral-800/50 dark:border-white/5
                shadow-lg shadow-neutral-900/50
                rounded-2xl
                p-6
                overflow-hidden
                transition-all duration-300
                hover:scale-[1.02]
                active:scale-[0.98]
                before:absolute before:inset-0
                before:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_40%)]
                after:absolute after:inset-0 
                after:rounded-2xl
                after:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)]
                after:animate-shine
            `,
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
