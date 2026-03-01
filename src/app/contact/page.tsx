"use client";

import Image from "next/image";
import { type ReactNode, Suspense } from "react";

import ContactSection from "../../components/landing-page-sections/ContactSection.tsx";

const ContactSkeleton = (): ReactNode => {
    return (
        <div className="mx-auto w-full max-w-xl animate-pulse space-y-6 p-6">
            {/* Title Placeholder */}
            <div className="h-8 w-1/3 rounded-md bg-white/30"></div>

            {/* Input Field Placeholders */}
            <div className="space-y-3">
                <div className="h-4 w-1/4 rounded bg-white/30"></div>
                <div className="h-12 rounded-md bg-white/20"></div>
            </div>

            <div className="space-y-3">
                <div className="h-4 w-1/4 rounded bg-white/30"></div>
                <div className="h-32 rounded-md bg-white/20"></div>
            </div>

            {/* Button Placeholder */}
            <div className="h-12 w-full rounded-md bg-white/25"></div>
        </div>
    );
};

export default function Contact() {
    return (
        <div className="relative h-[100dvh] w-full overflow-hidden bg-[linear-gradient(to_bottom,#213248,#090F18,#030609)] text-white">
            <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
                <div className="absolute top-0 left-0 h-full w-auto">
                    <Image
                        src="/expectations/left_cave.svg"
                        alt="Cave Left"
                        className="h-full w-auto object-cover md:max-w-none"
                        width={500}
                        height={1000}
                    />
                </div>
                <div className="absolute top-0 right-0 h-full w-auto">
                    <Image
                        src="/expectations/right_cave.svg"
                        alt="Cave Right"
                        className="h-full w-auto object-cover md:max-w-none"
                        width={500}
                        height={1000}
                    />
                </div>
            </div>

            <div className="relative z-10 h-full w-full overflow-y-auto bg-black/25">
                <Suspense fallback={<ContactSkeleton />}>
                    <ContactSection />
                </Suspense>
            </div>
        </div>
    );
}