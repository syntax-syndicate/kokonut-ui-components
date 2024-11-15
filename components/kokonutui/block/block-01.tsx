export default function Block01({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative w-full min-h-screen bg-white dark:bg-black/5 overflow-hidden py-12 sm:py-24">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-zinc-50/50 dark:bg-zinc-900/50" />
            </div>
            {children}
        </div>
    );
}
