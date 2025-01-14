import { cn } from "@/lib/utils";
import PreviewContent from "./preview-content";

interface PreviewProps {
    children: React.ReactNode;
    className?: string;
    isPremium?: boolean;
    link: string;
    useIframe?: boolean;
    height?: string;
    compact?: boolean;
    comment?: string;
}

const prePath = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

export async function Preview({
    children,
    className = "",
    link,
    useIframe = false,
    compact = false,
    comment = "",
}: PreviewProps) {
    return (
        <>
            <div className={cn("w-full rounded-xl overflow-hidden", className)}>
                <PreviewContent link={link} prePath={prePath} />

                {useIframe ? (
                    <div className="w-full my-4 border rounded-2xl border-zinc-400 dark:border-zinc-700">
                        <div className="relative w-full h-[100dvh] overflow-hidden">
                            <iframe
                                title={link}
                                src={`${prePath}/preview/${link}`}
                                className="w-full h-full overflow-y-auto list-none"
                                style={{
                                    border: "none",
                                    transform: "scale(0.95)",
                                }}
                            />
                        </div>
                    </div>
                ) : (
                    <div
                        className={cn(
                            "p-2 md:p-8 flex justify-center items-center relative group border rounded-2xl my-4 border-zinc-400 dark:border-zinc-800 not-prose",
                            compact ? "min-h-[100px]" : "min-h-[400px]"
                        )}
                    >
                        {children}
                    </div>
                )}
                {comment && (
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                        {comment}
                    </div>
                )}
            </div>
        </>
    );
}
