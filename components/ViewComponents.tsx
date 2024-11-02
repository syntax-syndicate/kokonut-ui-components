import { Suspense } from "react";
import { ComponentItem } from "./ComponentItem";

interface Component {
    id: number;
    title: string;
    component: React.ReactNode;
    fileName: string;
    dependencies?: string[];
}

interface ViewComponentsProps {
    components: Component[];
}

export function ViewComponents({ components }: ViewComponentsProps) {
    return (
        <Suspense fallback={null}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 w-full">
                {components.map((item) => (
                    <ComponentItem key={item.id} item={item} />
                ))}
            </div>
        </Suspense>
    );
}
