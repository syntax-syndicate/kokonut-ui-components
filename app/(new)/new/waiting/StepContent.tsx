import { motion } from "framer-motion";
import { User, CheckCircle2, Send, type LucideIcon } from "lucide-react";
import Input_09 from "@/components/kokonutui/input-09";

interface StepConfig {
    title: string;
    description: string;
    icon?: LucideIcon;
    field?: string;
    type?: string;
}

interface StepContentProps {
    step: 1 | 2 | 3 | 4;
}

const STEP_CONFIG: Record<StepContentProps["step"], StepConfig> = {
    1: {
        title: "What's your name?",
        description: "We'll use this to personalize your experience",
        icon: User,
        field: "name",
        type: "text",
    },
    2: {
        title: "What's your email?",
        description: "We'll email you important updates",
        icon: Send,
        field: "email",
        type: "text",
    },
    3: {
        title: "How many people?",
        description: "Select the number of people in your group",
    },
    4: {
        title: "All set!",
        description: "Your request has been submitted successfully",
        icon: CheckCircle2,
    },
} as const;

function StepInput({
    icon: Icon,
    type,
    field,
}: Pick<StepConfig, "icon" | "type" | "field">) {
    return (
        <div className="relative">
            {Icon && (
                <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
            )}
            <input
                type={type}
                className="w-full rounded-lg bg-white dark:bg-zinc-900 
                         border border-zinc-200 dark:border-zinc-800
                         px-10 py-2.5 text-sm
                         placeholder:text-zinc-500 dark:placeholder:text-zinc-400
                         focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-zinc-100/10
                         hover:border-zinc-300 dark:hover:border-zinc-700
                         transition-colors duration-200"
                placeholder={`Enter your ${field}`}
            />
        </div>
    );
}

function StepContent({ step }: StepContentProps) {
    const currentStep = STEP_CONFIG[step];

    return (
        <motion.div
            key={`step${step}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex w-full flex-col gap-6"
        >
            <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {currentStep.title}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {currentStep.description}
                </p>
            </div>

            {step < 3 && <StepInput {...currentStep} />}
            {step === 3 && <Input_09 />}
        </motion.div>
    );
}

export default StepContent;
