import Image from "next/image";

export default function ScheduleSection() {
    return (
        <section className="relative w-full mt-3 min-h-[600px] md:min-h-[700px] flex items-center" id="Schedule">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 drop-shadow-sm font-rethink">
                        Our schedule is ...
                    </h3>
                    <h2 className="text-5xl md:text-6xl font-bold text-[#F9C355] mb-6 drop-shadow-sm font-rethink">COMING SOON</h2>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 pointer-events-none z-0">
                <Image
                    src="/coming-soon/background-hill.svg"
                    alt="Hill Decoration"
                    className="w-full h-auto object-cover"
                    width={1}
                    height={1}
                />
            </div>
        </section>
    );
}
