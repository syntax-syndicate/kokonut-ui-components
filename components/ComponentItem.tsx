import { getComponent } from "@/lib/action";
import { CopyWrapper } from "@/lib/copy-wrapper";
import ComponentView from "./ComponentView";

export interface ComponentItemProps {
    item: {
        id: number;
        title: string;
        component: React.ReactNode;
        fileName: string;
        dependencies?: string[];
    };
    folder: string;
    componentClassName?: string;
}

export async function ComponentItem({
    item,
    folder,
    componentClassName,
}: ComponentItemProps) {
    const text = await getComponent(item.fileName, folder);

    return (
        <div
            id={`component-${item.id}`}
            className="group relative h-full p-4 rounded-xl border border-zinc-200/80 
            dark:border-zinc-800/80 backdrop-blur-sm shadow-xs transition-all duration-500
            hover:border-zinc-300 dark:hover:border-zinc-700
            flex flex-col w-full gap-6"
        >
            <ComponentView
                text={text}
                item={item}
                componentClassName={componentClassName}
            />
        </div>
    );
}
