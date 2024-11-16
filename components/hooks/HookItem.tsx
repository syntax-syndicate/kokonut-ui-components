import { getHook } from "@/lib/action";
import CodeBlockWithPreview from "@/components/CodeBlockWithPreview";
import { CodeBlock } from "@/components/code-block";

interface HookItemProps {
    item: {
        id: number;
        title: string;
        description: string;
        preview?: React.ReactNode;
        fileName: string;
    };
}

const prePath = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : `https://${process.env.NEXT_PUBLIC_SITE_URL}`;

export async function HookItem({ item }: HookItemProps) {
    const text = await getHook(item.fileName);

    return (
        <div className="relative">
            <div className="flex items-start gap-4 mb-8">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 shadow-sm border border-zinc-200/50 dark:border-zinc-700/50">
                    <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-br from-zinc-600 to-zinc-800 dark:from-zinc-200 dark:to-zinc-400">
                        {item.id}
                    </span>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-200">
                        {item.title}
                    </h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {item.description}
                    </p>
                </div>
            </div>
            <div className="space-y-4 sm:ml-12">
                <CodeBlock
                    code={[
                        `bunx shadcn@latest add ${prePath}/registry/${item.fileName.replace(
                            ".ts",
                            ""
                        )}.json`,
                    ]}
                    language="bash"
                />
                <CodeBlockWithPreview code={text} language="typescript" />
                {item.preview && (
                    <div className="mt-6 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                        {item.preview}
                    </div>
                )}
            </div>
        </div>
    );
}
