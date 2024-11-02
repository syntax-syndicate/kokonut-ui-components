"use client"; // Error boundaries must be Client Components

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    console.log(error);
    return (
        <html lang="en">
            <body>
                <h2>Something went wrong!</h2>
                <p>{error.message}</p>
                <button type="button" onClick={() => reset()}>
                    Try again
                </button>
            </body>
        </html>
    );
}
