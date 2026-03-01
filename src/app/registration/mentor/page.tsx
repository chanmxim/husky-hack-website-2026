"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import BackButton from "../../../components/BackButton";

export default function MentorRegistration() {
    const opnFormId = process.env.NEXT_PUBLIC_OPNFORM_MENTOR_FORM_ID;
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
                <div className="pointer-events-none absolute top-4 left-0 z-20 w-full px-4 md:px-6">
                    <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4">
                        <BackButton className="pointer-events-auto" />
                        <nav className="pointer-events-auto flex items-center gap-3 text-xs md:text-sm">
                            <Link href="/registration/hacker" className="text-white/70 transition hover:text-[#FED571]">
                                Hacker Application
                            </Link>
                            <span className="text-white/35">|</span>
                            <Link href="/registration/judge" className="text-white/70 transition hover:text-[#FED571]">
                                Judge Application
                            </Link>
                        </nav>
                    </div>
                </div>

                {opnFormId ? (
                    <>
                        <div className="h-full w-full pt-14">
                            <iframe className="h-full w-full border-0 bg-transparent" id={opnFormId} src={opnFormSrc} />
                        </div>

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
                        <div>
                            <p>
                                The application for <span className="text-[#FFE9A9]">mentors</span> is coming soon.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
