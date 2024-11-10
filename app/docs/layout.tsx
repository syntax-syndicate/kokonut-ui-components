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
        <div className="relative flex flex-col min-h-screen">
            <div className="z-40">
                <ComponentNav sections={navigationSections} />
                <p className="px-4 pt-16 md:pb-0 text-sm text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2 opacity-80">
                    <PartyPopper className="w-4 h-4" />
                    New components added weekly
                </p>
            </div>
            <main className="flex-1 w-full pt-4 md:pt-8 pb-24 md:pl-0 lg:pl-[260px]">
                {children}
            </main>
        </div>
    );
}
