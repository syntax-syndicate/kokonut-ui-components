import Pricing_01 from "@/components/pricing/pricing-01";
import Pricing_02 from "@/components/pricing/pricing-02";
import { Pricing_03 } from "@/components/pricing/pricing-03";
import { Pricing_04 } from "@/components/pricing/pricing-04";
import { ViewComponents } from "@/components/ViewComponents";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "A collection of pricing components to use and customize. Built with Tailwind CSS and Shadcn.",
};

const FOLDER = "pricing";

export default function Pricing_View() {
    const components = [
        {
            id: 1,
            title: "Fancy",
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
            title: "Basic",
            component: (
                <Pricing_02
                    tier="Pro"
                    price={{ monthly: 42, yearly: 420 }}
                    description="Perfect for growing businesses that need more power and flexibility."
                    features={[
                        { name: "Up to 10 team members", included: true },
                        { name: "Advanced analytics", included: true },
                        { name: "Custom integrations", included: true },
                        { name: "API access", included: true },
                        { name: "24/7 phone support", included: false },
                        { name: "Custom branding", included: false },
                    ]}
                    popular={false}
                />
            ),
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
            title: "Popular",
            component: (
                <Pricing_02
                    tier="Pro"
                    price={{ monthly: 42, yearly: 420 }}
                    description="Level up your gaming experience with premium features and rewards"
                    features={[
                        {
                            name: "Unlimited party members",
                            included: true,
                        },
                        {
                            name: "Exclusive character skins",
                            included: true,
                        },
                        {
                            name: "Priority matchmaking",
                            included: true,
                        },
                        {
                            name: "Double XP weekends",
                            included: true,
                        },
                        {
                            name: "Custom game modes",
                            included: true,
                        },
                    ]}
                    popular={true}
                />
            ),
            fileName: "pricing-02.tsx",
        },
        {
            id: 5,
            title: "Default",
            component: (
                <Pricing_04
                    price="399"
                    description="Supercharge your workflow with AI-powered tools and enterprise features"
                />
            ),
            fileName: "pricing-04.tsx",
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
