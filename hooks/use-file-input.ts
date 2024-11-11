import { useState, useRef } from "react";

export function useFileInput() {
    const [fileName, setFileName] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const clearFile = () => {
        setFileName("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return {
        fileName,
        fileInputRef,
        handleFileSelect,
        clearFile,
    };
}
