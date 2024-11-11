import { useEffect, useCallback } from "react";

interface KeyboardOptions {
    targetKey: string | string[];
    ctrlKey?: boolean;
    shiftKey?: boolean;
    altKey?: boolean;
    preventDefault?: boolean;
    onKeyDown?: (event: KeyboardEvent) => void;
    onKeyUp?: (event: KeyboardEvent) => void;
}

export function useKeyboard(options: KeyboardOptions, handler: () => void) {
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            const {
                targetKey,
                ctrlKey,
                shiftKey,
                altKey,
                preventDefault,
                onKeyDown,
            } = options;

            const keys = Array.isArray(targetKey) ? targetKey : [targetKey];

            if (
                keys.includes(event.key) &&
                (!ctrlKey || event.ctrlKey) &&
                (!shiftKey || event.shiftKey) &&
                (!altKey || event.altKey)
            ) {
                if (preventDefault) {
                    event.preventDefault();
                }
                handler();
            }

            onKeyDown?.(event);
        },
        [options, handler]
    );

    const handleKeyUp = useCallback(
        (event: KeyboardEvent) => {
            const { onKeyUp } = options;
            onKeyUp?.(event);
        },
        [options]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [handleKeyDown, handleKeyUp]);
}
