import { InfiniteCarousel } from "@/components/client-carousel";
import type { CarouselItem } from "@/components/client-carousel";
import AIInput_04 from "@/components/kokonutui/ai-input-04";
import Card_01 from "./kokonutui/card/card-01";
import List05 from "./kokonutui/list/list-05";
import Alert05 from "./kokonutui/alert/alert-05";
import Profile01 from "./kokonutui/profile/profile-01";

const categories: CarouselItem[] = [
    {
        id: 1,
        title: "Profile Components",
        href: "/docs/components/profile",
        component: <Profile01 />,
        count: 10,
        size: "default",
        span: 1,
    },
    {
        id: 2,
        title: "Card Components",
        href: "/docs/components/card",
        component: <Card_01 />,
        count: 6,
        size: "default",
        span: 2,
    },
    {
        id: 3,
        title: "List Components",
        href: "/docs/components/list",
        component: <List05 />,
        count: 5,
        size: "tall",
        span: 2,
    },
    {
        id: 4,
        title: "Alert Components",
        href: "/docs/components/alert",
        component: <Alert05 />,
        count: 6,
        size: "wide",
        span: 2,
    },
    {
        id: 5,
        title: "AI Components",
        href: "/docs/components/ai-input",
        component: <AIInput_04 />,
        count: 16,
        size: "tall",
        span: 2,
    },
];

export function CarouselWrapper() {
    return (
        <>
            <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">
                    Explore all 50+ components.
                </h2>
                <p className="mt-2 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
                    Ready to use. Fully customizable. Built for making apps
                    faster.
                </p>
            </div>

            <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
                <InfiniteCarousel items={categories} />
            </div>
        </>
    );
}
