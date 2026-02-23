"use client";

import teams from "../../data/teams.json" with { type: "json" };
import { useState } from "react";
import TeamMarquee from "../team/TeamMarquee";
import TeamGrid from "../team/TeamGrid";

export default function TeamSection() {
    const [showAll, setShowAll] = useState(false);

    return (
        <section id="Team" className="py-16 w-full bg-[#1E2024]">
            <h2 className="text-5xl text-center font-rethink font-bold text-[#FED571]">
                Meet the team
            </h2>

            {!showAll ? (
                <TeamMarquee teams={teams} />
            ) : (
                <TeamGrid groupedMembers={teams} onShowLess={() => setShowAll(false)} />
            )}

            <div className="flex justify-center mt-4">
                <a
                    onClick={() => setShowAll(!showAll)}
                    className="text-white underline cursor-pointer hover:text-gray-300 transition-colors text-sm"
                >
                    {showAll ? "Show Less" : "Show all of us"}
                </a>
            </div>
        </section>
    );
}
