import Input_10 from "@/components/kokonutui/input-10";
import Alert04 from "@/components/kokonutui/alert-04";
import Input_08 from "@/components/kokonutui/input-08";

interface ComponentShowcaseCardProps {
    className: string;
}

export function ComponentShowcaseCard({
    className,
}: ComponentShowcaseCardProps) {
    return (
        <div className={className}>
            <div className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Buttons, Inputs & More
            </div>

            <div className="space-y-12">
                <div className="space-y-20 mt-8">
                    {[
                        { component: <Input_10 />, label: "Input 10" },
                        { component: <Alert04 />, label: "Alert 04" },
                    ].map((btn, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-8"
                        >
                            <div className="h-16 flex items-center gap-8">
                                {btn.component}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center pt-8">
                    <Input_08 label="" />
                </div>
            </div>

            <p className="text-sm text-center text-zinc-500 dark:text-zinc-400 mt-4">
                + more available
            </p>
        </div>
    );
}
