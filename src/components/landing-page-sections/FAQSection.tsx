"use client";

import { useState } from "react";
import faqs from "../../data/faqs.json";
import FAQAccordion from "../faq/Accordian";
import Image from "next/image";

export default function FAQSection() {
    const [collapseTrigger, setCollapseTrigger] = useState(0);

    const midPoint = Math.ceil(faqs.length / 2);
    const leftFaqs = faqs.slice(0, midPoint);
    const rightFaqs = faqs.slice(midPoint);

    const handleCollapseAll = () => setCollapseTrigger(prev => prev + 1);

    return (
        <section id="FAQ" className="relative bg-[#1A663C]">
            <div className="absolute left-0 top-0 z-20 w-full -translate-y-full pointer-events-none">
                <Image
                    src="/faq/top-wave.svg"
                    alt=""
                    width={1}
                    height={1}
                    className="h-auto w-full"
                    aria-hidden="true"
                />
            </div>
        
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
                <h1 className="relative z-10 text-3xl font-semibold text-center mt-14 mb-14 font-rethink text-[#FED571]">
                    FREQUENTLY ASKED QUESTIONS
                </h1>

                <div className="w-full flex flex-col md:flex-row gap-6 md:gap-16 mb-12">
                    <div className="flex flex-col flex-1 gap-4">
                        {leftFaqs.map((faq, index) => (
                            <div key={`left-${index}`} className="w-full">
                                <FAQAccordion
                                    question={faq.question}
                                    answer={faq.answer}
                                    collapseTrigger={collapseTrigger}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col flex-1 gap-4">
                        {rightFaqs.map((faq, index) => (
                            <div key={`right-${index}`} className="w-full">
                                <FAQAccordion
                                    question={faq.question}
                                    answer={faq.answer}
                                    collapseTrigger={collapseTrigger}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleCollapseAll}
                    className="px-6 py-2 text-gray-300 hover:text-white underline font-rethink transition-colors duration-200"
                >
                    Collapse All
                </button>
            </div>

            <div className="relative mt-16 h-44 w-full bg-gradient-to-b from-[#1A663C] to-[#4F743C]">
                <Image
                    src="/faq/left-tree.svg"
                    alt=""
                    width={1}
                    height={1}
                    className="absolute bottom-0 left-0 z-10 h-auto w-24 md:w-36"
                    aria-hidden="true"
                />
                <Image
                    src="/faq/right-tree.svg"
                    alt=""
                    width={1}
                    height={1}
                    className="absolute bottom-0 right-0 z-10 h-auto w-24 md:w-36"
                    aria-hidden="true"
                />
                <Image
                    src="/faq/sign.svg"
                    alt="HuskyHack sign"
                    width={1}
                    height={1}
                    className="absolute bottom-0 left-1/2 z-20 h-auto w-[22rem] -translate-x-1/2 md:w-[28rem]"
                    aria-hidden="true"
                />
            </div>
        </section>
    );
}
