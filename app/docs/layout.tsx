import ComponentNav from "@/components/component-nav";
import type { Metadata } from "next";
import { PartyPopper } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navigationSections } from "@/config/navigation";

export const metadata: Metadata = {
    title: {
        default: `${siteConfig.name} - Components`,
        template: `%s | ${siteConfig.name}`,
    },
};

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen">
            <p className="pt-16 text-sm text-emerald-700 dark:text-emerald-400 flex items-center justify-center gap-2 opacity-80 ">
                <PartyPopper className="w-4 h-4" />
                New components added weekly
            </p>
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                {/* Three-column layout */}
                <div className="flex md:gap-8 py-12 md:py-32">
                    {/* Left Navigation */}
                    <div className="md:w-[240px] md:flex-shrink-0">
                        <div className="md:sticky md:top-24">
                            <ComponentNav sections={navigationSections} />
                        </div>
                    </div>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">{children}</main>
                </div>
            </div>
        </div>
    );
}
