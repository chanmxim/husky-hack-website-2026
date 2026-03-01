"use client";

import { useState, useRef, useEffect } from "react";
import { Minus, Plus } from "lucide-react";

type AccordionProps = {
    question: string;
    answer: string;
    collapseTrigger?: number;
};

function FAQAccordion({ question, answer, collapseTrigger }: AccordionProps) {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (collapseTrigger !== undefined && collapseTrigger > 0) {
            setAccordionOpen(false);
        }
    }, [collapseTrigger]);

    return (
        <div className="w-full flex-col py-2">
            <button
                onClick={() => setAccordionOpen((prev) => !prev)}
                className={`flex justify-start items-center text-left group w-full 
                    text-white
                    ${accordionOpen ? "pb-4" : "pb-2"}`}
                aria-expanded={accordionOpen}
            >
                {/* Icon */}
                <div className="group-hover:opacity-100 text-white shrink-0 pr-2">
                    {!accordionOpen ? <Plus /> : <Minus />}
                </div>
                <h3 className="text-xl md:text-2xl font-rethink font-semibold text-white pr-4 break-words leading-tight">
                    {question}
                </h3>
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
                <div className="overflow-hidden text-white/90 font-instrument text-base md:text-lg leading-relaxed pt-1 pb-4">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default FAQAccordion;
