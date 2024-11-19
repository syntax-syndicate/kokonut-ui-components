import CodeBlockWithPreview from "./CodeBlockWithPreview";

interface ComponentBlockWithPreviewProps {
    code: string;
    language: string;
}

export default function ComponentBlockWithPreview({
    code,
    language,
}: ComponentBlockWithPreviewProps) {
    return <CodeBlockWithPreview code={code} language={language} />;
}
