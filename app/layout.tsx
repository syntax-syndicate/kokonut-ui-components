import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer";
import { META_THEME_COLORS, siteConfig } from "@/app/config/site";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: `${siteConfig.name} - ${siteConfig.description}`,
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    keywords: ["ui", "components", "Tailwind CSS", "Next.js", "shadcn"],
    robots: "index, follow",
    authors: [{ name: "Dorian Baffier", url: "https://x.com/dorian_baffier" }],
    creator: "Dorian Baffier",
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        creator: "@dorian_baffier",
        title: siteConfig.name,
        description: siteConfig.description,
    },
};

export const viewport: Viewport = {
    themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    geistSans.variable,
                    geistSans.className,
                    "antialiased"
                )}
            >
                <ThemeProvider attribute="class" disableTransitionOnChange>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
