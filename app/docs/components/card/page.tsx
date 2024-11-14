import Card_03 from "@/components/kokonutui/card-03";
import Card_04 from "@/components/kokonutui/card-04";
import Card_05 from "@/components/kokonutui/card-05";
import Card_06 from "@/components/kokonutui/card-06";
import Card_02 from "@/components/kokonutui/card-02";
import { createComponentPage } from "@/components/page-builder";
import Card_01 from "@/components/kokonutui/card-01";
import Card_07 from "@/components/kokonutui/card-07";
import type { PageConfig } from "@/types/component-page";

const CARDS_CONFIG: PageConfig = {
    title: "Cards",
    description:
        "A collection of card components to use and customize. Built with Tailwind CSS and Shadcn.",
    folder: "kokonutui/card",
    viewType: "grid",
    gridClassName: "grid-cols-1 lg:grid-cols-1 gap-8",
    componentClassName: "mt-0 mb-4",
    components: [
        {
            id: 1,
            title: "Card 01",
            component: <Card_01 />,
            fileName: "card-01.tsx",
        },
        {
            id: 2,
            title: "Card 02",
            component: <Card_02 />,
            fileName: "card-02.tsx",
        },
        {
            id: 3,
            title: "Card 03",
            component: <Card_03 />,
            fileName: "card-03.tsx",
        },
        {
            id: 4,
            title: "Card 04",
            component: <Card_04 />,
            fileName: "card-04.tsx",
        },
        {
            id: 5,
            title: "Card 05",
            component: <Card_05 />,
            fileName: "card-05.tsx",
        },
        {
            id: 6,
            title: "Card 06",
            component: <Card_06 />,
            fileName: "card-06.tsx",
        },
        {
            id: 7,
            title: "Card 07",
            component: <Card_07 />,
            fileName: "card-07.tsx",
        },
    ],
};

const { default: CardsPage, metadata } = createComponentPage(CARDS_CONFIG);

export { metadata };
export default CardsPage;
