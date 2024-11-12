import { ViewBlocks } from "@/components/ViewBlocks";
import type { PageConfig, PageMetadata } from "@/types/component-page";
import type { Metadata } from "next";

export function createComponentPage(config: PageConfig): {
    default: () => JSX.Element;
    metadata: Metadata;
} {
    const metadata: PageMetadata = {
        title: config.title,
        description: config.description,
    };

    function ComponentPage() {
        return (
            <div className="container mx-auto py-12 max-w-4xl">
                <ViewBlocks
                    blocks={config.components}
                    folder={config.folder}
                    viewType={config.viewType}
                    gridClassName={config.gridClassName}
                    componentClassName={config.componentClassName}
                />
            </div>
        );
    }

    return {
        default: ComponentPage,
        metadata,
    };
}
