import Faq01 from "@/components/kokonutui/faq-01";
import Faq02 from "@/components/kokonutui/faq-02";
import Faq03 from "@/components/kokonutui/faq-03";
import Faq04 from "@/components/kokonutui/faq-04";
import { createComponentPage } from "@/components/page-builder";

const { default: FaqPage, metadata } = createComponentPage({
    title: "FAQ",
    description:
        "A collection of FAQ components to use and customize. Built with Tailwind CSS and Shadcn.",
    folder: "kokonutui/faq",
    viewType: "grid",
    gridClassName: "grid-cols-1 lg:grid-cols-1 gap-8",
    components: [
        {
            id: 1,
            title: "Basic",
            component: <Faq01 />,
            fileName: "faq-01.tsx",
            dependencies: [],
        },
        {
            id: 2,
            title: "Fancy",
            component: <Faq02 />,
            fileName: "faq-02.tsx",
            dependencies: ["Framer-motion"],
        },
        {
            id: 3,
            title: "With Badge",
            component: <Faq03 />,
            fileName: "faq-03.tsx",
            dependencies: [],
        },
        {
            id: 4,
            title: "With Categories",
            component: <Faq04 />,
            fileName: "faq-04.tsx",
            dependencies: [],
        },
    ],
});

export { metadata };

export default FaqPage;
