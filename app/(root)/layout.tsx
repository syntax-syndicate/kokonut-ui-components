import { Header } from "@/components/landing/header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";
// import { usePathname } from "next/navigation";

export const metadata: Metadata = {
    title: {
        template: "%s | KokonutUI - Free UI Components",
        default: "KokonutUI - Free UI Components",
    },
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="relative w-full pt-0 md:pt-0">{children}</main>
            <Footer />
        </>
    );
}
