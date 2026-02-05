"use client";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import socialLinks from "../../data/socialLinks.json";
import {
    DiscordIcon,
    Linkedin01Icon,
    InstagramIcon,
} from "@hugeicons/core-free-icons";

export default function FooterSection() {
    return (
        <footer id="Footer" className="pt-10 bg-[#1E2024] flex flex-col">
            <div className="bg-[#FF7703] rounded-2xl mx-4 mb-4 px-6 py-10 md:px-16 md:py-16 flex flex-col lg:flex-row gap-10 lg:gap-20 min-h-[500px]">
                {/* LEFT COLUMN: Branding & Logo */}
                <div className="flex flex-col items-start justify-between w-full lg:w-5/12 h-full">
                    <div>
                        <p className="text-gray-900 font-rethink-sans text-3xl md:text-4xl font-medium leading-tight">
                            Made with love by the
                            <br />
                            <span className="font-bold">HuskyHack</span> team
                        </p>
                        <p className="text-gray-900 font-rethink-sans mt-3 font-medium">
                            © {new Date().getFullYear()} HuskyHack
                        </p>

                        <div className="flex flex-row gap-4 mt-6">
                            <a
                                href="/construction"
                                className="text-gray-900 hover:text-white transition-colors duration-300"
                            >
                                <HugeiconsIcon icon={DiscordIcon} size={24} />
                            </a>
                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-900 hover:text-white transition-colors duration-300"
                            >
                                <HugeiconsIcon
                                    icon={Linkedin01Icon}
                                    size={24}
                                />
                            </a>
                            <a
                                href={socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-900 hover:text-white transition-colors duration-300"
                            >
                                <HugeiconsIcon icon={InstagramIcon} size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 w-40 md:w-48">
                        <Image
                            src="/huskyhacklogo.svg"
                            alt="HuskyHack Logo"
                            width={200}
                            height={50}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* RIGHT COLUMN: Links & Big Text */}
                <div className="flex flex-col justify-between w-full lg:w-7/12 h-full">
                    {/* Top: Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl md:text-2xl font-rethink-sans font-bold text-gray-900 mb-1">
                                Info
                            </h3>
                            <a
                                href="#About-Us"
                                className="text-gray-900 hover:text-white transition-colors"
                            >
                                About Us
                            </a>
                            <a
                                href="#Sponsors"
                                className="text-gray-900 hover:text-white transition-colors"
                            >
                                Sponsors
                            </a>
                            <a
                                href="#FAQ"
                                className="text-gray-900 hover:text-white transition-colors"
                            >
                                FAQ
                            </a>
                            <a
                                href="#Team"
                                className="text-gray-900 hover:text-white transition-colors"
                            >
                                Our Team
                            </a>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl md:text-2xl font-rethink-sans font-bold text-gray-900 mb-1">
                                Contact
                            </h3>
                            <a
                                href="/contact?query=support"
                                className="text-gray-900 hover:text-white transition-colors"
                            >
                                Support
                            </a>
                            <a
                                href="/contact?query=sponsorship"
                                className="text-gray-900 hover:text-white transition-colors"
                            >
                                Sponsorship
                            </a>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl md:text-2xl font-rethink-sans font-bold text-gray-900 mb-1">
                                Resources
                            </h3>
                            <a
                                href="/construction"
                                className="text-gray-900 hover:text-white transition-colors"
                            >
                                Code of Conduct
                            </a>
                            <a
                                href="/construction"
                                className="text-gray-900 hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    {/* Bottom: Big Text  */}
                    <div className="w-full pt-12 lg:mt-auto">
                        <p className="font-rethink-sans text-[#1E2024] font-medium tracking-[-0.05em] text-center lg:text-left lg:-translate-x-3 text-[15vw] lg:text-[9vw] leading-none select-none">
                            HuskyHack
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
