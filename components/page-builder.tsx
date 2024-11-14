import { ViewBlocks } from "@/components/ViewBlocks";
import type { PageConfig, PageMetadata } from "@/types/component-page";

function createPageMetadata(config: PageConfig): PageMetadata {
    return {
        title: config.title,
        description: config.description,
    };
}

function createStaticPage(config: PageConfig) {
    return function ComponentPage() {
        return (
            <div className="container pb-12 w-full">
                <ViewBlocks
                    blocks={config.components}
                    folder={config.folder}
                    viewType={config.viewType}
                    gridClassName={config.gridClassName}
                    componentClassName={config.componentClassName}
                />
            </div>
        );
    };
}

export function createComponentPage(config: PageConfig) {
    return {
        default: createStaticPage(config),
        metadata: createPageMetadata(config),
    };
}
