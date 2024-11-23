import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import StepContent from "./StepContent";
import FormControls from "./FormControls";

const FormStepper = () => {
    const [step, setStep] = useState<number>(1);

    const handleNext = () => {
        if (step < 4) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="content"
                className="my-8 sm:my-auto w-full sm:w-[600px] bg-white dark:bg-zinc-900 
                          rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
            >
                <FormControls currentStep={step} />

                <div className="p-8 sm:p-10">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleNext();
                        }}
                        className="space-y-8"
                    >
                        <StepContent step={step as 1 | 2 | 3 | 4} />

                        <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-6" />

                        {step < 4 && (
                            <div className="flex justify-end gap-3">
                                {step > 1 && (
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300
                                                 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors"
                                    >
                                        Back
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-sm font-medium text-white dark:text-zinc-900
                                             bg-zinc-900 dark:bg-zinc-100 rounded-lg"
                                >
                                    {step === 3 ? "Submit" : "Continue"}
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FormStepper;
