import { InfiniteCarousel } from "@/components/landing/client-carousel";
import Card_01 from "@/components/kokonutui/card-01";
import List05 from "@/components/kokonutui/list-05";
import Alert05 from "@/components/kokonutui/alert-05";
import Profile01 from "@/components/kokonutui/profile-01";
import Btn03 from "@/components/kokonutui/btn-03";
import AIInput_15 from "@/components/kokonutui/ai-input-15";

export type CarouselItemType = {
    id: number;
    title: string;
    href: string;
    component: React.ReactNode;
    count: number;
    size: "default" | "wide" | "tall";
    span: 1 | 2 | 3;
};

const categories: CarouselItemType[] = [
    {
        id: 1,
        title: "Button Components",
        href: "/docs/components/button",
        component: <Btn03 />,
        count: 10,
        size: "default",
        span: 1,
    },
    {
        id: 2,
        title: "AI Components",
        href: "/docs/components/ai-input",
        component: <AIInput_15 />,
        count: 16,
        size: "tall",
        span: 2,
    },
    {
        id: 3,
        title: "Card Components",
        href: "/docs/components/card",
        component: <Card_01 />,
        count: 7,
        size: "tall",
        span: 2,
    },
    {
        id: 4,
        title: "List Components",
        href: "/docs/components/list",
        component: <List05 />,
        count: 6,
        size: "tall",
        span: 1,
    },
    {
        id: 5,
        title: "Alert Components",
        href: "/docs/components/alert",
        component: <Alert05 />,
        count: 7,
        size: "wide",
        span: 1,
    },
    {
        id: 7,
        title: "Profile Components",
        href: "/docs/components/profile",
        component: <Profile01 />,
        count: 5,
        size: "tall",
        span: 1,
    },
];

const CarouselHeader = () => {
    return (
        <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">
                Explore all 50+ components.
            </h2>
            <p className="mt-2 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
                Ready to use. Fully customizable. Built for making apps better.
            </p>
        </div>
    );
};

export function CarouselWrapper() {
    return (
        <>
            <CarouselHeader />
            <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
                <InfiniteCarousel items={categories} />
            </div>
        </>
    );
}
