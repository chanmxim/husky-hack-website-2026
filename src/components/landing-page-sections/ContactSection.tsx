"use client";
import { BookOpen, MessageSquare, MoveRight, MoveLeft } from "lucide-react";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function ContactSection() {
    const pathname = usePathname();
    const query = useSearchParams().get("query") || "support";
    const contactType = query === "sponsorship" || query === "sponsor" ? "sponsorship" : "support";

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;

        const subject = form.subject.value;
        const body = form.body.value;

        const recipientEmail =
            contactType === "sponsorship"
                ? "outreach.huskyhack@gmail.com"
                : "info.huskyhack@gmail.com";

        const gmailUrl =
            "https://mail.google.com/mail/?" +
            "view=cm&fs=1&tf=1" +
            `&to=${encodeURIComponent(recipientEmail)}` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(`${body}`)}`;

        globalThis.open(gmailUrl, "_blank");
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center px-6 py-16 font-rethink">
            <div className="w-full max-w-3xl">
                <Link
                    href="/"
                    className="mb-6 inline-flex items-center gap-2 text-[#FED571] transition-colors hover:text-white"
                >
                    <MoveLeft size={18} />
                    <span className="text-base">Back</span>
                </Link>

                <header className="text-left">
                    <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-white/20 p-1">
                        <Link
                            href={`${pathname}?query=support`}
                            className={`rounded-full px-4 py-2 text-sm transition-colors ${
                                contactType === "support"
                                    ? "bg-[#FED571] text-[#08182D]"
                                    : "text-white/75 hover:text-white"
                            }`}
                        >
                            Support
                        </Link>
                        <Link
                            href={`${pathname}?query=sponsorship`}
                            className={`rounded-full px-4 py-2 text-sm transition-colors ${
                                contactType === "sponsorship"
                                    ? "bg-[#FED571] text-[#08182D]"
                                    : "text-white/75 hover:text-white"
                            }`}
                        >
                            Sponsor
                        </Link>
                    </div>

                    <h2 className="text-4xl font-semibold text-[#FED571]">
                        {contactType === "sponsorship"
                            ? "Sponsorship & Partnerships Contact"
                            : "Support Contact"}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-white/75">
                        We'd love to hear from you. Fill out the details and
                        we'll be in touch.
                    </p>
                </header>

                <div className="w-full pt-10">
                    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
                        <div className="flex items-center gap-3 rounded-xl border border-white/30 p-4 transition-colors focus-within:border-[#FED571]">
                            <BookOpen size={18} className="text-[#FED571]/85" />
                            <input
                                type="text"
                                name="subject"
                                required
                                placeholder="Subject"
                                className="w-full bg-transparent text-lg text-white placeholder:text-white/45 focus:outline-none"
                            />
                        </div>

                        <div className="flex items-start gap-3 rounded-xl border border-white/30 p-4 transition-colors focus-within:border-[#FED571]">
                            <MessageSquare size={18} className="mt-1 text-[#FED571]/85" />
                            <textarea
                                name="body"
                                required
                                rows={8}
                                placeholder="Your message..."
                                className="w-full resize-none bg-transparent text-lg leading-relaxed text-white placeholder:text-white/45 focus:outline-none"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="group flex items-center gap-2 rounded-full border border-[#FED571] px-7 py-3 text-[#FED571] transition-all duration-300 hover:bg-[#FED571] hover:text-[#08182D]"
                            >
                                <span>Send Email</span>
                                <MoveRight
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                    size={18}
                                />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
