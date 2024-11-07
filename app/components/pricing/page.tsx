import Pricing_01 from "@/components/pricing/pricing-01";
import { Pricing_02 } from "@/components/pricing/pricing-02";
import { Pricing_03 } from "@/components/pricing/pricing-03";
import { Pricing_04 } from "@/components/pricing/pricing-04";
import { ViewComponents } from "@/components/ViewComponents";

export default function Pricing_View() {
    const components = [
        {
            id: 1,
            title: "Elegant",
            component: (
                <Pricing_01
                    price="4242"
                    description="Ready for your space adventure?"
                />
            ),
            fileName: "pricing-01.tsx",
            dependencies: ["Framer Motion"],
        },
        {
            id: 2,
            title: "Popular",
            component: <Pricing_02 price="42" isPopular={true} />,
            fileName: "pricing-02.tsx",
        },
        {
            id: 3,
            title: "Shiny",
            component: <Pricing_03 price="199" tier="pro" />,
            fileName: "pricing-03.tsx",
        },
        {
            id: 4,
            title: "Basic",
            component: <Pricing_04 price="399" />,
            fileName: "pricing-04.tsx",
        },
    ];

    return (
        <div className="grid grid-rows-[auto_1fr_20px] min-h-screen p-1 lg:p-4 pb-20 gap-12 sm:p-16">
            <ViewComponents
                components={components}
                folder="pricing"
                containerClassName="grid-cols-1 lg:grid-cols-2 gap-2"
            />
        </div>
    );
}
