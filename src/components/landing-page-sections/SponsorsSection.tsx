import SponsorLayout from "../sponsors/SponsorLayout";
import SponsorContactLink from "../SponsorContactLink";
import Image from "next/image";

export default function SponsorsSection() {
    return (
        <section id="Sponsors" className="flex justify-center py-48 relative bg-[linear-gradient(to_right,#1E6D41,#4F743C)] w-full max-h-">


            <div className="">

                <div className="flex justify-center">
                    <div className=" relative py-4 px-4">
                        <h1 className="text-2xl md:text-3xl text-center font-rethink-sans font-bold text-white">
                            Our Sponsors
                        </h1>
                    </div>
                </div>

                <div className="flex justify-center">
                    <SponsorLayout />
                </div>

                <div className="flex flex-col justify-center w-full items-center gap-5 mt-4 pt-10 relative">


                    <SponsorContactLink />
                </div>
            </div>
            <div className="absolute z-10 w-[100%] h-fit ">
                {/* <Image src="/sponsors-section/sponsors-bg.svg" alt="Sponsors Background" className="absolute w-[100%] top-0 right-0 object-cover z-0 stretch-" width={1} height={1} /> */}
            </div>
        </section>
    );
}
