import { source } from "@/lib/source";
import {
    DocsPage,
    DocsBody,
    DocsTitle,
    DocsDescription,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Preview } from "@/components/mdx/preview";
import { PreviewClient } from "@/components/mdx/preview-client";
import PreviewTemplate from "@/components/mdx/preview-template";
import WhatIncluded from "@/components/mdx/what-included";

export default async function Page(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    const MDX = page.data.body;

    return (
        <DocsPage
            footer={{ enabled: false }}
            toc={page.data.toc}
            full={page.data.full}
        >
            <DocsTitle className="tracking-tighter font-semibold text-4xl ml-8">
                {page.data.title}
            </DocsTitle>
            <DocsDescription className="tracking-tighter text-xl ml-8">
                {page.data.description}
            </DocsDescription>
            <DocsBody className="ml-8">
                <MDX
                    components={{
                        ...defaultMdxComponents,
                        Preview,
                        PreviewClient,
                        PreviewTemplate,
                        WhatIncluded,
                    }}
                />
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return source.generateParams();
}

export async function generateMetadata(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
    };
}
