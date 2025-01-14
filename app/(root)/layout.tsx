import { Header } from "@/components/landing/header";
import type { Metadata } from "next";
// import { usePathname } from "next/navigation";

export const metadata: Metadata = {
    title: {
        template: "%s | KokonutUI Pro - UI Components to ship apps",
        default: "KokonutUI Pro - UI Components to ship apps",
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
        </>
    );
}
