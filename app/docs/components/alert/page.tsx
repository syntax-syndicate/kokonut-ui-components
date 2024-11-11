import Alert01 from "@/components/alert/alert-01";
import Alert02 from "@/components/alert/alert-02";
import Alert03 from "@/components/alert/alert-03";
import Alert04 from "@/components/alert/alert-04";
import Alert06 from "@/components/alert/alert-06";
import Alert07 from "@/components/alert/alert-07";
import { ViewComponents } from "@/components/ViewComponents";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alert",
    description:
        "A collection of alert components to use and customize. Built with Tailwind CSS and Shadcn.",
};

const FOLDER = "alert";

export default function Alerts_View() {
    const components = [
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
            id: 6,
            title: "Congratz",
            component: <Alert06 />,
            fileName: "alert-06.tsx",
        },
        {
            id: 7,
            title: "Glass",
            component: <Alert07 />,
            fileName: "alert-07.tsx",
        },
    ];

    return (
        <div className="grid grid-rows-[auto_1fr_20px] min-h-screen p-1 lg:p-4 pb-20 gap-12 sm:p-16">
            <ViewComponents
                components={components}
                folder={FOLDER}
                containerClassName="grid-cols-1 lg:grid-cols-2 gap-2"
            />
        </div>
    );
}
