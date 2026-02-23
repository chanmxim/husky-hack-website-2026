"use client";

import teams from "../../data/teams.json" with { type: "json" };
import teamCategories from "../../data/teamCategories.json" with { type: "json" };
import { useState } from "react";
import TeamMarquee from "../team/TeamMarquee";
import TeamGrid from "../team/TeamGrid";

export default function TeamSection() {
    const [showAll, setShowAll] = useState(false);

    const groupedTeams = teamCategories
        .map((category) => ({
            title: category.title,
            color: category.color,
            members: teams.filter((member) =>
                category.keywords.some((keyword) =>
                    member.position.includes(keyword),
                ),
            ),
        }))
        .filter((group) => group.members.length > 0);

    const categorizedMembers = new Set(groupedTeams.flatMap((g) => g.members));
    const uncategorized = teams.filter(
        (member) => !categorizedMembers.has(member),
    );

    if (uncategorized.length > 0) {
        groupedTeams.push({
            title: "Team Members",
            color: "#9CA3AF",
            members: uncategorized,
        });
    }

    return (
        <section id="Team" className="py-16 w-full bg-[#1E2024]">
            <h2 className="text-5xl text-center font-rethink font-bold text-[#FED571]">
                Meet the team
            </h2>
            {/* <p className="text-center text-gray-100 font-instrument text-xl mt-4">
                Don't be shy, they won't bite
            </p> */}

            {!showAll ? (
                <TeamMarquee teams={groupedTeams} />
            ) : (
                <TeamGrid groupedMembers={groupedTeams} onShowLess={() => setShowAll(false)} />
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
