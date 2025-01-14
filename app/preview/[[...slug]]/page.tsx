import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

// Arrays to categorize components
const CENTERED_COMPONENTS = [
    "auth",
    "banner",
    "button",
    "modal",
    "ai-input",
    "ai-chat",
    "ai-message",
    "card",
    "ai-card",
    "input",
    "form",
    "headline",
    "motion-button",
    "motion-list",
    // Add more small components here
];

// const FULL_WIDTH_COMPONENTS = ["hero"];

export default async function PreviewPage({
    params
}: {
    params: Promise<{ slug: string[] }>
}) {
    const { slug } = await params;
    if (!slug.length) return notFound();

    const componentName = slug.join("/");

    try {
        const Component = dynamic(
            () =>
                import(`@/components/kokonutui/${componentName}`).catch(
                    () => notFound()
                ),
            { ssr: true }
        );

        // Check if component should be centered
        const shouldCenter = CENTERED_COMPONENTS.some((component) =>
            componentName.startsWith(component)
        );

        return shouldCenter ? (
            <div className="min-h-screen flex items-center justify-center">
                <Component />
            </div>
        ) : (
            <Component />
        );
    } catch (error) {
        return notFound();
    }
}
