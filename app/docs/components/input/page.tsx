import Input_01 from "@/components/input/input-01";
import Input_02 from "@/components/input/input-02";
import Input_03 from "@/components/input/input-03";
import Input_04 from "@/components/input/input-04";
import Input_05 from "@/components/input/input-05";
import Input_06 from "@/components/input/input-06";
import Input_07 from "@/components/input/input-07";
import Input_08 from "@/components/input/input-08";
import Input_09 from "@/components/input/input-09";
import Input_10 from "@/components/input/input-10";

import { ViewComponents } from "@/components/ViewComponents";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Inputs",
    description:
        "A collection of input components to use and customize. Built with Tailwind CSS and Shadcn.",
};

const FOLDER = "input";

export default function Inputs() {
    const components = [
        {
            id: 1,
            title: "Basic",
            component: <Input_01 />,
            fileName: "input-01.tsx",
        },
        {
            id: 2,
            title: "Input with options and create",
            component: <Input_02 />,
            fileName: "input-02.tsx",
        },
        {
            id: 3,
            title: "File Upload with preview",
            component: <Input_03 />,
            fileName: "input-03.tsx",
        },
        {
            id: 4,
            title: "Number Input",
            component: <Input_04 />,
            fileName: "input-04.tsx",
        },
        {
            id: 5,
            title: "Password Strength Indicator",
            component: <Input_05 />,
            fileName: "input-05.tsx",
        },
        {
            id: 6,
            title: "OTP Input",
            component: <Input_06 />,
            fileName: "input-06.tsx",
        },
        {
            id: 7,
            title: "Searchable Dropdown with Tags",
            component: <Input_07 />,
            fileName: "input-07.tsx",
        },
        {
            id: 8,
            title: "Color Picker",
            component: <Input_08 />,
            fileName: "input-08.tsx",
        },
        {
            id: 9,
            title: "Emoji Reaction",
            component: <Input_09 />,
            fileName: "input-09.tsx",
        },
        {
            id: 10,
            title: "Mood",
            component: <Input_10 />,
            fileName: "input-10.tsx",
        },
    ];
    return (
        <div className="grid grid-rows-[auto_1fr_20px] min-h-screen p-1 lg:p-4 gap-12 sm:p-16 pb-16">
            <ViewComponents components={components} folder={FOLDER} />
        </div>
    );
}
