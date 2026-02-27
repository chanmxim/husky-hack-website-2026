import faqs from "../../data/faqs.json";
import FAQAccordion from "../faq/Accordian";
import Image from "next/image";

export default function FAQSection() {
    return (
        <section id="FAQ" className="relative pb-40 pt-20 bg-[#1A663C]">
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
            <h1 className="text-xl  md:text-2xl font-rethink-sans text-center mb-10 text-white">FREQUENTLY ASKED QUESTIONS</h1>

            <div className="flex flex-col justify-center items-center md:flex-row-reverse gap-4 w-full ">

                <div className="flex flex-col gap-4 w-[50vw] items-start">
                    {faqs.map((faq, index) => (

                        <div className="bg-[#5E4527] rounded-lg w-[50vw]" key={index}>
                            <FAQAccordion
                                question={faq.question}
                                answer={faq.answer} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
