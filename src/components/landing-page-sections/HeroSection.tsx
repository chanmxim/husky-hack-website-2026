import Firefly from "../FireFly.tsx";
import NewsletterForm from "../NewsletterForm";
import SponsorContactLink from "../SponsorContactLink";
import { MapPin, ArrowDown } from 'lucide-react';

import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[90vh] bg-[#243B5C] overflow-hidden flex flex-col items-center justify-center text-white">
            <div className="z-20 text-center px-4 flex flex-col items-center justify-center mt-10 md:mt-0">
                <h1 className="text-6xl md:text-8xl font-bold">
                    <span className="text-amber-200">HuskyHack</span>
                </h1>

                <p className="text-white italic pt-7">
                    Where curious minds find their pack
                </p>

                <p className="text-base text-gray-300 pt-1">
                    May 2026 • <MapPin className="inline" color="#FED571" /> George Brown Polytechnic,  Waterfront
                </p>

                <div className="mt-7">
                    <NewsletterForm />
                </div>


            </div>

            {/* Svg Background layer */}
            <div className="absolute bottom-0 w-full h-full z-10">
                <Image
                    src="/hero-svg/backgroundLayer.svg"
                    alt="Camping landscape"
                    className="object-cover object-bottom"
                    fill
                    priority
                    sizes="100vw"
                />

                {/* Standard Fireflies */}
                <Firefly top="20%" left="20%" />
                <Firefly top="50%" left="50%" />
                <Firefly top="80%" left="80%" />
                <Firefly top="30%" left="70%" />

                {/* Larger Fireflies */}
                <Firefly top="15%" left="85%" size="8px" widthRange={150} heightRange={100} />
                <Firefly top="70%" left="15%" size="9px" />
                <Firefly top="40%" left="90%" size="7px" />

                {/* Tighter Wiggle Fireflies */}
                <Firefly top="10%" left="40%" widthRange={30} heightRange={30} />
                <Firefly top="60%" left="60%" widthRange={40} heightRange={40} />
                <Firefly top="85%" left="30%" size="3px" widthRange={20} heightRange={20} />
                <Firefly top="90%" left="65%" size="5px" widthRange={50} heightRange={50} minDurationX={5} maxDurationX={10} />
            </div>
            <div className="mt-7 absolute bottom-20 z-10 flex flex-col items-center">
                <SponsorContactLink />
                <ArrowDown className="w-6 h-6 text-white mt-4 animate-bounce opacity-50"/>
            </div>

        </section>
    );
}
