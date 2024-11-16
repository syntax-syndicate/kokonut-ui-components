import { HookItem } from "@/components/hooks/HookItem";
import { Suspense } from "react";

interface Hook {
    id: number;
    title: string;
    description: string;
    preview?: React.ReactNode;
    fileName: string;
}

interface ViewHooksProps {
    hooks: Hook[];
}

export function ViewHooks({ hooks }: ViewHooksProps) {
    return (
        <Suspense fallback={null}>
            <div className="flex flex-col gap-6 md:gap-12 relative mt-8">
                {hooks.map((item) => (
                    <HookItem key={item.id} item={item} />
                ))}
            </div>
        </Suspense>
    );
}
