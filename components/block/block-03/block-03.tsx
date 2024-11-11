interface Block03Props {
    children: React.ReactNode;
}

export default function Block03({ children }: Block03Props) {
    return (
        <div className="relative w-full h-screen bg-white dark:bg-black/5 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-zinc-50/50 dark:bg-zinc-900/50" />
            </div>
            {children}
        </div>
    );
}
