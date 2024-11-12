import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
    question: string;
    answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
    return (
        <AccordionItem value={question}>
            <AccordionTrigger className="text-left text-lg text-gray-900 dark:text-white hover:text-primary">
                {question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {answer}
            </AccordionContent>
        </AccordionItem>
    );
}

function Faq01() {
    const faqs: FAQItemProps[] = [
        {
            question: "How do I get started?",
            answer: "Getting started is easy! Simply sign up for an account and follow our quick setup guide. We'll walk you through each step of the process.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial.",
        },
        {
            question: "How can I contact support?",
            answer: "Our support team is available 24/7 through our help center, email support, or live chat. We typically respond within 2 hours.",
        },
    ];

    return (
        <section className="py-12 bg-white dark:bg-black/5 w-full">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    Frequently Asked Questions
                </h2>
                <Accordion
                    type="single"
                    collapsible
                    className="max-w-2xl mx-auto"
                >
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

export default Faq01;
