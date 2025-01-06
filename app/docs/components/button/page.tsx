import Btn01 from "@/components/kokonutui/btn-01";
import Btn02 from "@/components/kokonutui/btn-02";
import Btn03 from "@/components/kokonutui/btn-03";
import Btn04 from "@/components/kokonutui/btn-04";
import Btn_05 from "@/components/kokonutui/btn-05";
import Btn06 from "@/components/kokonutui/btn-06";
import Btn07 from "@/components/kokonutui/btn-07";
import Btn08 from "@/components/kokonutui/btn-08";
import Btn09 from "@/components/kokonutui/btn-09";
import Btn10 from "@/components/kokonutui/btn-10";
import Btn11 from "@/components/kokonutui/btn-11";
import { Btn12 } from "@/components/kokonutui/btn-12";

import { createComponentPage } from "@/components/page-builder";
import { Command } from "lucide-react";
import { cn } from "@/lib/utils";

import type { PageConfig } from "@/types/component-page";
import { Btn13 } from "@/components/kokonutui/btn-13";

const BUTTONS_CONFIG: PageConfig = {
    title: "Buttons",
    description:
        "A collection of button components to use and customize. Built with Tailwind CSS and Shadcn.",
    folder: "kokonutui/button",
    viewType: "grid",
    gridClassName: "grid-cols-1 lg:grid-cols-2 gap-8",
    components: [
        {
            id: 1,
            title: "Fancy",
            component: <Btn12 />,
            fileName: "btn-12.tsx",
        },
        {
            id: 2,
            title: "Attract",
            component: <Btn03 />,
            fileName: "btn-03.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 3,
            title: "Cursor Blob",
            component: <Btn04 />,
            fileName: "btn-04.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 4,
            title: "Hold to Action",
            component: <Btn_05 />,
            fileName: "btn-05.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 5,
            title: "Copy",
            component: <Btn06 textToCopy="Hello, world!" />,
            fileName: "btn-06.tsx",
        },
        {
            id: 6,
            title: "Welcome",
            component: <Btn13 />,
            fileName: "btn-13.tsx",
        },
        {
            id: 7,
            title: "Processing",
            component: <Btn07 />,
            fileName: "btn-07.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 8,
            title: "Share",
            component: <Btn08 />,
            fileName: "btn-08.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 9,
            title: "Action",
            component: (
                <Btn09>
                    <Command
                        className={cn(
                            "w-4 h-4",
                            "text-zinc-600 dark:text-zinc-400",
                            "transition-all duration-300",
                            "group-hover:scale-110",
                            "group-hover:rotate-[-4deg]",
                            "group-active:scale-95"
                        )}
                    />
                    <span className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">
                        CMD + K
                    </span>
                </Btn09>
            ),
            fileName: "btn-09.tsx",
        },
        {
            id: 10,
            title: "Shadow",
            component: <Btn10 />,
            fileName: "btn-10.tsx",
        },
        {
            id: 11,
            title: "Gradient underline",
            component: <Btn11 />,
            fileName: "btn-11.tsx",
        },
    ],
};

const { default: ButtonsPage, metadata } = createComponentPage(BUTTONS_CONFIG);

export { metadata };
export default ButtonsPage;
