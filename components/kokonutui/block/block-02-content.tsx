import { Sparkles } from "lucide-react";
import Pricing_03 from "@/components/kokonutui/pricing-03";

function PricingHeader() {
    return (
        <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">
                <Sparkles className="w-4 h-4 text-zinc-900 dark:text-white" />
                <span className="text-sm font-medium text-zinc-900 dark:text-white">
                    Choose Your Plan
                </span>
            </div>
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
                Simple, transparent pricing
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Choose the perfect plan for your needs. All plans include
                unlimited updates and basic support.
            </p>
        </div>
    );
}

export default function Block02Content() {
    return (
        <div className="relative max-w-7xl mx-auto px-4 py-24">
            <PricingHeader />
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <Pricing_03 />
            </div>
        </div>
    );
}
