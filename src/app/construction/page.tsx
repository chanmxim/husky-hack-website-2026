import Image from "next/image";
import Link from "next/link";

export default function Construction() {
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

            <div className="relative z-10 flex h-full w-full items-center justify-center px-6 py-10 font-rethink">
                <div className="w-full max-w-3xl">
                    <div className="text-left md:text-center">
                        <h1 className="text-4xl font-semibold text-[#FED571] md:text-6xl">
                            Under Construction
                        </h1>
                        <p className="mt-4 text-lg text-white/75 md:text-xl">
                            This page is being built and will be available soon.
                        </p>
                        <div className="mt-10 flex md:justify-center">
                            <Link
                                href="/"
                                className="rounded-full border border-[#FED571] px-7 py-3 text-[#FED571] transition-all duration-300 hover:bg-[#FED571] hover:text-[#08182D]"
                            >
                                Go Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
