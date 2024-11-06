import Link from "next/link";
import { Github, Twitter } from "lucide-react";

interface SocialLink {
    href: string;
    icon: React.ReactNode;
    label: string;
}

export function Footer() {
    const socialLinks: SocialLink[] = [
        {
            href: "https://github.com/kokonut-labs/kokonutui",
            icon: <Github className="h-5 w-5" />,
            label: "GitHub",
        },
        {
            href: "https://x.com/dorian_baffier",
            icon: <Twitter className="h-5 w-5" />,
            label: "Twitter",
        },
    ];

    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800">
            <div className="mx-auto max-w-7xl px-4 py-6">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
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
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                            >
                                <span className="sr-only">{link.label}</span>
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
