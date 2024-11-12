import { createComponentPage } from "@/components/page-builder";
import Text_01 from "@/components/kokonutui/text-01";
import Text_02 from "@/components/kokonutui/text-02";
import Text_03 from "@/components/kokonutui/text-03";
import Text_04 from "@/components/kokonutui/text-04";
import Text_05 from "@/components/kokonutui/text-05";
import Text_06 from "@/components/kokonutui/text-06";

const { default: TextsPage, metadata } = createComponentPage({
    title: "Text",
    description:
        "A collection of text components to use and customize. Built with Tailwind CSS and Shadcn.",
    folder: "kokonutui/text",
    viewType: "grid",
    gridClassName: "grid-cols-1 lg:grid-cols-2 gap-8",
    components: [
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
    ],
});

export { metadata };

export default TextsPage;
