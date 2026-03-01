"use client";

import { useRouter } from "next/navigation";

type BackButtonProps = {
    fallbackHref?: string;
    className?: string;
    label?: string;
};

export default function BackButton({ fallbackHref = "/", className = "", label = "Back" }: BackButtonProps) {
    const router = useRouter();

    const handleBack = () => {
        if (window.history.length > 1) {
            router.back();
            return;
        }

        router.push(fallbackHref);
    };

    return (
        <button
            type="button"
            onClick={handleBack}
            className={`inline-flex items-center gap-2 px-1 py-1 text-sm font-medium text-white/90 transition hover:text-white ${className}`}
        >
            <span aria-hidden="true">←</span>
            <span>{label}</span>
        </button>
    );
}
