import Image from "next/image";
import danielCampus from "../../assets/gbp-daniels-campus.png";
import studentsLearning from "../../assets/gbp-students-learning.png";
export default function AboutUsSection() {
    return (
        <section className="relative w-full min-h-[75vh] overflow-hidden" id="About-Us">
            <div className="absolute flex flex-row items-center bottom-0 z-20 h-full w-full justify-between px-[20px]">
                <div className="hidden absolute bottom-0 w-1/4 relative h-auto top-[100px] md:block">
                    <Image
                        src={studentsLearning}
                        alt="GBP Students Learning"
                        className="w-auto h-auto "
                        width={800}
                        height={800}
                    />
                </div>
                <div className="flex-1 w-full relative flex flex-col items-center top-0 h-full gap-4 md:w-3/4">
                    <h2 className="text-white text-3xl font-rethink font-semibold">ABOUT US</h2>
                    <h1 className="text-4xl md:text-6xl text-[#FED571] text-center font-rethink font-bold">
                        GBP largest student-run hackathon

                    </h1>
                    <p className="italic text-lg text-white text-center font-instrument md:not-italic md:text-xl">Spend 24h building something you're passionate about with food and coffee taking care of at the heart of Toronto.
                    </p>
                    <p className="italic text-lg text-white text-center font-instrument md:not-italic md:text-xl"> But our hackathon is more than just code—it’s a place to learn, collaborate, and
                        find your people among 100+ other to form an unstoppable team and unforgettable memories</p>
                </div>
                <div className="absolute bottom-0 hidden w-1/4 relative h-auto top-[100px] md:block">
                    <Image
                        src={danielCampus}
                        alt="Daniels Campus"
                        className="w-auto h-auto"
                        width={800}
                        height={800}
                    />
                </div>
            </div>
            <div className="absolute bottom-0 w-full h-full z-10">
                <Image
                    src="/about-us-section/about-us.svg"
                    alt="Camping landscape"
                    className="object-cover object-bottom"
                    priority
                    fill
                    sizes="100vw"
                />
            </div>
        </section>


    );
}
