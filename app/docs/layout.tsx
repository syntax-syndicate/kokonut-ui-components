import type { Metadata } from "next";
import { PartyPopper } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navigationSections } from "@/config/navigation";
import ComponentNav from "@/components/nav";

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
            <p className="pt-16 text-sm text-emerald-700 dark:text-emerald-400 flex items-center justify-center gap-2 opacity-80">
                {/* <PartyPopper className="w-4 h-4" />
                New components added weekly */}
                <a
                    href="https://www.producthunt.com/posts/kokonutui?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-kokonutui"
                    target="_blank"
                >
                    <img
                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=611037&theme=light"
                        alt="KokonutUI - Copy&#0044;&#0032;Paste&#0044;&#0032;Customize&#0046;&#0032; | Product Hunt"
                        style={{ width: "200px", height: "54px" }}
                        width="200"
                        height="54"
                    />
                </a>
            </p>
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="flex md:gap-8 py-12 md:py-32">
                    <div className="md:w-[240px] md:flex-shrink-0">
                        <div className="md:sticky md:top-24">
                            <ComponentNav sections={navigationSections} />
                        </div>
                    </div>
                    <main className="flex-1 min-w-0">{children}</main>
                </div>
            </div>
        </div>
    );
}
