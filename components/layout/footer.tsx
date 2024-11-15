import Link from "next/link";
import { Github } from "lucide-react";
import XIcon from "../icons/x-icon";

interface SocialLink {
    href: string;
    icon: React.ReactNode;
    text: string;
    label: string;
}

export function Footer() {
    const socialLinks: SocialLink[] = [
        {
            href: "https://x.com/dorian_baffier",
            icon: <XIcon className="h-5 w-5 sm:hidden" />,
            text: "",
            label: "Twitter",
        },
        {
            href: "https://github.com/kokonut-labs/kokonutui",
            icon: <Github className="h-5 w-5" />,
            text: "Source Code",
            label: "GitHub",
        },
    ];

    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800">
            <div className="mx-auto max-w-7xl px-4 py-6">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 hidden sm:block">
                        Built with ♥️ by{" "}
                        <Link
                            href="https://x.com/dorian_baffier"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-zinc-900 dark:text-white hover:underline"
                        >
                            @Dorian
                        </Link>
                    </p>
                    <div className="flex items-center gap-4 justify-between sm:justify-normal w-full sm:w-auto">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors flex items-center gap-1 text-sm"
                            >
                                <span className="sr-only">{link.label}</span>
                                <span className="hidden sm:inline underline">
                                    {link.text}
                                </span>
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
