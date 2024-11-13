import List01 from "@/components/kokonutui/list-01";
import List02 from "@/components/kokonutui/list-02";
import List03 from "@/components/kokonutui/list-03";
import List04 from "@/components/kokonutui/list-04";
import List05 from "@/components/kokonutui/list-05";
import List06 from "@/components/kokonutui/list-06";
import { createComponentPage } from "@/components/page-builder";

const { default: ListPage, metadata } = createComponentPage({
    title: "Lists",
    description:
        "A collection of list components to use and customize. Built with Tailwind CSS.",
    folder: "kokonutui/list",
    viewType: "grid",
    gridClassName: "grid-cols-1 lg:grid-cols-1 gap-8",
    componentClassName: "h-full my-0 mb-4",
    components: [
        {
            id: 1,
            title: "Notifications",
            component: <List01 />,
            fileName: "list-01.tsx",
        },
        {
            id: 2,
            title: "Transactions",
            component: <List02 />,
            fileName: "list-02.tsx",
        },
        {
            id: 3,
            title: "Tasks",
            component: <List03 />,
            fileName: "list-03.tsx",
        },
        {
            id: 4,
            title: "Highlights",
            component: <List04 />,
            fileName: "list-04.tsx",
        },
        {
            id: 5,
            title: "Music",
            component: <List05 />,
            fileName: "list-05.tsx",
        },
        {
            id: 6,
            title: "Threads",
            component: <List06 />,
            fileName: "list-06.tsx",
        },
    ],
});

export { metadata };
export default ListPage;
