import AIInput_01 from "@/components/kokonutui/ai-input-01";
import AIInput_02 from "@/components/kokonutui/ai-input-02";
import AIInput_03 from "@/components/kokonutui/ai-input-03";
import AIInput_04 from "@/components/kokonutui/ai-input-04";
import AIInput_05 from "@/components/kokonutui/ai-input-05";
import AIInput_06 from "@/components/kokonutui/ai-input-06";
import AIInput_07 from "@/components/kokonutui/ai-input-07";
import AIInput_08 from "@/components/kokonutui/ai-input-08";
import AIInput_09 from "@/components/kokonutui/ai-input-09";
import AIInput_10 from "@/components/kokonutui/ai-input-10";
import AIInput_11 from "@/components/kokonutui/ai-input-11";
import AIInput_12 from "@/components/kokonutui/ai-input-12";
import AIInput_13 from "@/components/kokonutui/ai-input-13";
import AIInput_14 from "@/components/kokonutui/ai-input-14";
import AIInput_15 from "@/components/kokonutui/ai-input-15";
import AIInput_16 from "@/components/kokonutui/ai-input-16";
import { createComponentPage } from "@/components/page-builder";
import type { PageConfig } from "@/types/component-page";

const AI_INPUT_CONFIG: PageConfig = {
    title: "AI Input",
    description:
        "A collection of AI input components to use and customize. Built with Tailwind CSS and Shadcn.",
    folder: "kokonutui/ai-input",
    viewType: "grid",
    gridClassName: "grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8",
    componentClassName: "h-full items-center",
    components: [
        {
            id: 1,
            title: "Slide-in",
            component: <AIInput_01 />,
            fileName: "ai-input-01.tsx",
        },
        {
            id: 2,
            title: "File Upload",
            component: <AIInput_02 />,
            fileName: "ai-input-02.tsx",
        },
        {
            id: 3,
            title: "Suggestions",
            component: <AIInput_03 />,
            fileName: "ai-input-03.tsx",
        },
        {
            id: 4,
            title: "Basic with Search",
            component: <AIInput_04 />,
            fileName: "ai-input-04.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 5,
            title: "Typing",
            component: <AIInput_05 />,
            fileName: "ai-input-05.tsx",
        },
        {
            id: 6,
            title: "Limit Characters",
            component: <AIInput_06 />,
            fileName: "ai-input-06.tsx",
        },
        {
            id: 7,
            title: "Thinking",
            component: <AIInput_07 />,
            fileName: "ai-input-07.tsx",
        },
        {
            id: 8,
            title: "Voice",
            component: <AIInput_08 />,
            fileName: "ai-input-08.tsx",
        },
        {
            id: 9,
            title: "Multiple",
            component: <AIInput_09 />,
            fileName: "ai-input-09.tsx",
        },
        {
            id: 10,
            title: "Banners",
            component: <AIInput_10 />,
            fileName: "ai-input-10.tsx",
        },
        {
            id: 11,
            title: "Agents",
            component: <AIInput_11 />,
            fileName: "ai-input-11.tsx",
        },
        {
            id: 12,
            title: "Shared",
            component: <AIInput_12 />,
            fileName: "ai-input-12.tsx",
        },
        {
            id: 13,
            title: "Optimize",
            component: <AIInput_13 />,
            fileName: "ai-input-13.tsx",
        },
        {
            id: 14,
            title: "Memory",
            component: <AIInput_14 />,
            fileName: "ai-input-14.tsx",
        },
        {
            id: 15,
            title: "All-in-one",
            component: <AIInput_15 />,
            fileName: "ai-input-15.tsx",
        },
        {
            id: 16,
            title: "Commands",
            component: <AIInput_16 />,
            fileName: "ai-input-16.tsx",
            dependencies: ["Framer Motion", "CMDK"],
        },
    ],
};

const { default: AIInputPage, metadata } = createComponentPage(AI_INPUT_CONFIG);

export { metadata };
export default AIInputPage;
