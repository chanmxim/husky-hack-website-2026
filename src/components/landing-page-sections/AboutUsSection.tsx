import Image from "next/image";
import Link from "next/link";
import danielCampus from "../../assets/gbp-daniels-campus.png";
import studentsLearning from "../../assets/gbp-students-learning.png";
export default function AboutUsSection() {
    return (
        <section
            className="relative w-full lg:pb-20 px-8 lg:px-0
            overflow-hidden flex flex-col items-center justify-center
            bg-[#1C6D41] scroll-mt-40"
            id="About-Us"
        >
            <div className="relative z-10 flex flex-row items-end justify-between w-full lg:w-[95%]">
                <div className="hidden w-1/4 h-auto xl:block">
                    <Image
                        src={studentsLearning}
                        alt="GBP Students Learning"
                        className="w-[90%] h-[90%] object-cover"
                        width={800}
                        height={800}
                    />
                </div>
                <div className="flex-1 w-full flex flex-col items-center gap-4 md:w-1/2 pb-0 xl:pb-20">
                    <h2 className="text-white text-3xl font-rethink font-semibold">
                        ABOUT US
                    </h2>
                    <h1 className="font-bold text-4xl md:text-6xl text-[#FED571] text-center font-rethink font-base">
                        George Brown Polytechnic's largest student-run hackathon
                    </h1>
                    <p className="italic text-lg text-gray-300 text-center font-instrument md:not-italic md:text-xl">
                        Spend <strong className="text-white">24 hours</strong>{" "}
                        in the heart of Toronto building something you're
                        passionate about, food and caffeine is on us.{" "}
                        <strong className="text-white">Find your pack</strong>{" "}
                        among 150+ other to form an unstoppable team and
                        unforgettable memories
                    </p>
                </div>
                <div className="hidden w-1/4 h-auto xl:block">
                    <Image
                        src={danielCampus}
                        alt="Daniels Campus"
                        className="w-[90%] h-[90%] object-cover"
                        width={800}
                        height={800}
                    />
                </div>
            </div>

            <div className="block xl:hidden py-12 md:py-16">
                <div className="relative w-[40vw] md:w-[30vw] lg:w-[20vw] aspect-square mx-auto">
                    <Image
                        src={studentsLearning}
                        alt="GBP Students Learning"
                        className="absolute inset-0 z-10 w-full h-full object-contain translate-x-12 translate-y-12 md:translate-x-16 md:translate-y-16"
                        width={800}
                        height={800}
                    />
                    <Image
                        src={danielCampus}
                        alt="Daniels Campus"
                        className="absolute inset-0 z-0 w-full h-full object-contain -translate-x-12 -translate-y-12 md:-translate-x-16 md:-translate-y-16"
                        width={800}
                        height={800}
                    />
                </div>
            </div>

            <div className="xl:hidden w-full flex justify-center mb-10">
                <Image
                    src="/husky-falling.svg"
                    alt="Falling husky"
                    className="w-[150px] md:w-[200px] h-auto"
                    width={300}
                    height={300}
                />
            </div>

            <div className="flex flex-col items-center justify-center z-10 relative">
                <Image
                    src="/hole.svg"
                    alt="Hole"
                    className="w-[350px] md:w-[450px] lg:w-[600px] h-auto"
                    width={796}
                    height={202}
                />
                <Link
                    href="/contact"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-[#FF7703] text-black border-2 border-[#A63C06] rounded-full hover:brightness-110 transition"
                >
                    <p className="font-[Instrument Sans] text-sm">Build with us</p>
                </Link>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
                <div className="relative w-full aspect-[1440/220] min-h-[72px] md:min-h-[110px]">
                    <Image
                        src="/about-us-section/about-us.svg"
                        alt="Grass foreground"
                        className="object-cover object-bottom"
                        priority
                        fill
                        sizes="100vw"
                    />
                </div>
            </div>
        </section>
    );
}
