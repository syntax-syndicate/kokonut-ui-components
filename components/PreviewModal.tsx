import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Copy, Check } from "lucide-react";
import { CodeBlock } from "./code-block";
import Btn01 from "./button/btn-01";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

interface PreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    fileName: string;
    children: React.ReactNode;
}
const prePath = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : `https://${process.env.NEXT_PUBLIC_SITE_URL}`;
export function PreviewModal({
    isOpen,
    onClose,
    fileName,
    children,
}: PreviewModalProps) {
    const { isCopied, copyToClipboard } = useCopyToClipboard();
    const command = `bunx shadcn@latest add ${prePath}/registry/${fileName.replace(
        ".tsx",
        ".json"
    )}`;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-full h-[90vh] m-0 p-0 overflow-hidden">
                <div className="h-full flex flex-col">
                    <div className="flex-none p-4 sm:p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            {/* Desktop View */}
                            <DialogTitle className="hidden sm:block text-lg font-medium max-w-[calc(100vw-2rem)] overflow-x-auto">
                                <CodeBlock language="bash" code={command} />
                            </DialogTitle>

                            {/* Mobile View: Both buttons in a row */}
                            <div className="sm:hidden flex items-center gap-2 w-full">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex-1"
                                    onClick={() => copyToClipboard(command)}
                                >
                                    {isCopied ? (
                                        <Check className="h-4 w-4 mr-2" />
                                    ) : (
                                        <Copy className="h-4 w-4 mr-2" />
                                    )}
                                    Copy
                                </Button>
                                <Btn01 onClick={onClose} className="flex-1">
                                    Close
                                </Btn01>
                            </div>

                            {/* Desktop Close Button */}
                            <Btn01
                                onClick={onClose}
                                className="hidden sm:block"
                            >
                                Close
                            </Btn01>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                        <div className="max-w-6xl mx-auto">{children}</div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
