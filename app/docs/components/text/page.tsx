import Text_01 from "@/components/text/text-01";
import Text_02 from "@/components/text/text-02";
import Text_03 from "@/components/text/text-03";
import { Text_04 } from "@/components/text/text-04";
import { Text_05 } from "@/components/text/text-05";
import { Text_06 } from "@/components/text/text-06";
import { ViewComponents } from "@/components/ViewComponents";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Text",
    description:
        "A collection of text components to use and customize. Built with Tailwind CSS and Shadcn.",
};

const FOLDER = "text";

export default function Texts() {
    const components = [
        {
            id: 1,
            title: "Shimmer",
            component: <Text_01 />,
            fileName: "text-01.tsx",
            dependencies: [],
        },
        {
            id: 2,
            title: "Sliced",
            component: <Text_02 text="Payout fees" />,
            fileName: "text-02.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 3,
            title: "Wave",
            component: <Text_03 text="Wave" />,
            fileName: "text-03.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 4,
            title: "Enhanced",
            component: <Text_04 text="NIKE" />,
            fileName: "text-04.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 5,
            title: "Bounce and Hover",
            component: <Text_05 />,
            fileName: "text-05.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 6,
            title: "Swoosh",
            component: <Text_06 />,
            fileName: "text-06.tsx",
        },
    ];

    return (
        <div className="grid grid-rows-[auto_1fr_20px] min-h-screen p-1 lg:p-4 pb-20 gap-12 sm:p-16">
            <ViewComponents
                components={components}
                folder={FOLDER}
                containerClassName="grid-cols-1 lg:grid-cols-3 gap-2"
            />
        </div>
    );
}
