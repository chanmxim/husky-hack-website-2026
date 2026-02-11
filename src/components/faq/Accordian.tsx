"use client";

import { useState, useRef } from "react";
import { Minus, Plus } from "lucide-react";

type AccordionProps = {
    question: string;
    answer: string;
};

function FAQAccordion({ question, answer }: AccordionProps) {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className={"w-full flex-col border-black border-2 px-4 py-2 "}>
            <button
                onClick={() => setAccordionOpen((prev) => !prev)}
                className={`flex justify-between items-center text-left group w-full 
                    text-gray-300
                    ${accordionOpen ? "pb-4" : "pb-0"}`}
                aria-expanded={accordionOpen}
            >
                <h3 className="text-xl md:text-3xl font-instrument-sans font-bold text-gray-100">{question}</h3>

                {/* Icon */}
                <div className="group-hover:opacity-100">
                    {!accordionOpen ? <Plus /> : <Minus />}
                </div>
            </button>

            <div
                ref={contentRef}
                style={{
                    maxHeight: accordionOpen
                        ? contentRef.current?.scrollHeight
                            ? `${contentRef.current.scrollHeight}px`
                            : '500px'
                        : "0px"
                }}
                className={`transition-[max-height] duration-300 ease-in-out overflow-hidden grid`}
            >
                <div className="overflow-hidden text-gray-200 text-md md:text-lg leading-relaxed px-1 py-2">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default FAQAccordion;
