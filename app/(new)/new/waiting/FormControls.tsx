import { motion } from "framer-motion";

const STEPS = ["Name", "Contact", "Guests", "Confirm"];

const FormControls = ({ currentStep }: { currentStep: number }) => {
    return (
        <div className="relative px-8 pt-8">
            <div className="absolute top-1/2 left-[52px] right-[52px]">
                <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800">
                    <motion.div
                        className="h-full bg-gradient-to-r from-zinc-900 to-zinc-800 dark:from-zinc-100 dark:to-zinc-200"
                        style={{
                            transformOrigin: "left",
                            width: "100%",
                        }}
                        animate={{
                            scaleX: (currentStep - 1) / 3,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </div>
            <div className="relative z-10 flex justify-between">
                {STEPS.map((label, idx) => (
                    <StepIndicator
                        key={label}
                        label={label}
                        index={idx}
                        currentStep={currentStep}
                    />
                ))}
            </div>
        </div>
    );
};

const StepIndicator = ({
    label,
    index,
    currentStep,
}: {
    label: string;
    index: number;
    currentStep: number;
}) => (
    <div className="flex flex-col items-center p-2 rounded-xl">
        <div
            className={`w-10 h-10 rounded-full flex items-center justify-center 
            ${
                currentStep > index
                    ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                    : currentStep === index + 1
                    ? "bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-100"
                    : "bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-400"
            }`}
        >
            {currentStep > index ? (
                <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            ) : (
                <span className="text-sm font-medium">{index + 1}</span>
            )}
        </div>
        <span
            className={`mt-3 text-sm font-medium ${
                currentStep > index || currentStep === index + 1
                    ? "text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-400 dark:text-zinc-600"
            }`}
        >
            {label}
        </span>
    </div>
);

export default FormControls;
