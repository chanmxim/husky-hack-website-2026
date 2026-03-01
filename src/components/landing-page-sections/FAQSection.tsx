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
        <section id="FAQ" className="relative pb-80 pt-20 bg-[#1A663C]">
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
        
            <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center">
                <h1 className="relative z-10 text-3xl font-semibold text-center mt-14 mb-8 font-rethink-sans text-[#FED571]">
                    FREQUENTLY ASKED QUESTIONS
                </h1>

{/* <<<<<<< FE-151-modify-sched-sponsor
                <div className="flex flex-col gap-4 w-[50vw] items-start z-20">
                    {faqs.map((faq, index) => (

                        <div className="bg-[#5E4527] rounded-lg w-[50vw]" key={index}>
                            <FAQAccordion
                                question={faq.question}
                                answer={faq.answer}/>
                        </div>
                    ))}
                </div>

            </div>
            <div className="absolute left-0 bottom-0 z-10 w-full">

                <Image
                    src="/faq/trees.svg"
                    alt=""
                    width={1}
                    height={1}
                    className="h-auto w-full"
                    aria-hidden="true"
                />

            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-30">
                <Image
                    src="/faq/sign.svg"
                    alt=""
                    width={1}
                    height={1}
                    className="h-auto w-full"
                    aria-hidden="true"
                /> --> */}
                {/*   <button
                    onClick={handleCollapseAll}
                    className="mb-12 px-6 py-2 rounded-full border border-white/50 text-white font-rethink-sans hover:bg-white/10 transition-colors duration-200"
                >
                    Collapse All
                </button> */}

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
                    className="px-6 py-2 rounded-full border border-white/50 text-white font-rethink-sans hover:bg-white/10 transition-colors duration-200"
                >
                    Collapse All
                </button>
            </div>
        </section>
    );
}
