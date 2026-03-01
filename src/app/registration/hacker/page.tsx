"use client";

import Image from "next/image";
import Script from "next/script";

export default function HackerRegistration() {
    const opnFormId = process.env.NEXT_PUBLIC_OPNFORM_HACKER_FORM_ID;
    const opnFormBaseUrl = process.env.NEXT_PUBLIC_OPNFORM_BASE_URL ?? "https://opnform.com";
    const opnFormSrc = opnFormId ? `${opnFormBaseUrl}/forms/${opnFormId}` : "";
    const opnFormWidgetSrc = `${opnFormBaseUrl}/widgets/iframe.min.js`;

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

            <div className="relative z-10 h-full w-full">
                {opnFormId ? (
                    <>
                        <iframe className="h-full w-full border-0 bg-transparent" id={opnFormId} src={opnFormSrc} />

                        <Script
                            src={opnFormWidgetSrc}
                            onLoad={() => {
                                if (window.initEmbed) {
                                    window.initEmbed(opnFormId, { autoResize: true });
                                }
                            }}
                        />
                    </>
                ) : (
                    <div className="grid h-full w-full place-items-center p-6 text-center text-sm md:text-base">
                        Missing `NEXT_PUBLIC_OPNFORM_HACKER_FORM_ID`.
                    </div>
                )}
            </div>
        </div>
    );
}