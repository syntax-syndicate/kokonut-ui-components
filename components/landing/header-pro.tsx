import { PartyPopper } from "lucide-react";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ButtonCta from "../button-cta";
import { Btn14 } from "../kokonutui/button/btn-14";

export function HeaderPro() {
    return (
        <div className="w-full bg-gradient-to-b from-zinc-50 via-amber-50 to-orange-50 dark:from-zinc-900 dark:via-zinc-900/50 dark:to-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
            <Link
                href="https://kokonutui.pro?utm_source=kokonutui.com&utm_medium=header"
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 w-full"
            >
                <span className="max-w-[170px] md:max-w-[400px] flex items-center gap-2">
                    <PartyPopper className="w-4 h-4 hidden md:block" />
                    <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 dark:from-orange-100 dark:via-amber-200 dark:to-orange-300 bg-clip-text text-transparent">
                        UI Components to ship apps faster
                    </span>
                </span>
                <Btn14 className="w-fit text-sm" label="KokonutUI - PRO" />
                {/* <ButtonCta
                    variant="orange-glass"
                    className="rounded-lg mx-0 h-[28px]"
                >
                    KokonutUI - PRO
                    <ArrowRight className="w-4 h-4" />
                </ButtonCta> */}
            </Link>
        </div>
    );
}
