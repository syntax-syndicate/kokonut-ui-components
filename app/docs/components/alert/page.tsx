import Alert01 from "@/components/kokonutui/alert-01";
import Alert02 from "@/components/kokonutui/alert-02";
import Alert03 from "@/components/kokonutui/alert-03";
import Alert04 from "@/components/kokonutui/alert-04";
import Alert05 from "@/components/kokonutui/alert-05";
import Alert06 from "@/components/kokonutui/alert-06";
import { createComponentPage } from "@/components/page-builder";

const { default: AlertsPage, metadata } = createComponentPage({
    title: "Alerts",
    description:
        "A collection of alert components to use and customize. Built with Tailwind CSS.",
    folder: "kokonutui/alert",
    viewType: "grid",
    gridClassName: "grid-cols-1 lg:grid-cols-2 gap-2",
    componentClassName: "h-full my-0",
    components: [
        {
            id: 1,
            title: "Basic",
            component: <Alert01 />,
            fileName: "alert-01.tsx",
        },
        {
            id: 2,
            title: "Basic 2",
            component: <Alert02 />,
            fileName: "alert-02.tsx",
        },
        {
            id: 3,
            title: "Info",
            component: <Alert03 />,
            dependencies: ["framer-motion"],
            fileName: "alert-03.tsx",
        },
        {
            id: 4,
            title: "Fancy",
            component: <Alert04 />,
            dependencies: ["framer-motion"],
            fileName: "alert-04.tsx",
        },
        {
            id: 5,
            title: "Congratz",
            component: <Alert05 />,
            fileName: "alert-05.tsx",
        },
        {
            id: 6,
            title: "Glass",
            component: <Alert06 />,
            fileName: "alert-06.tsx",
        },
    ],
});

export { metadata };
export default AlertsPage;
