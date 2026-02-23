"use client";

import TeamMemberPhoto from "./TeamMemberPhoto";

interface TeamMember {
    displayName: string;
    socialLink: string;
    position: string;
    mainProfilePicturePath: string;
    secondaryProfilePicturePath: string;
}

interface TeamGroup {
    title: string;
    members: TeamMember[];
}

export default function TeamGrid({
    groupedMembers,
    onShowLess,
}: {
    groupedMembers: TeamGroup[];
    onShowLess?: () => void;
}) {
    return (
        <div className="space-y-16 animate-fade-in">
            {onShowLess && (
                <div className="flex justify-center mt-10 ">
                    <a
                        onClick={onShowLess}
                        className="text-white underline text-sm cursor-pointer hover:text-gray-300 transition-colors"
                    >
                        Show Less
                    </a>
                </div>
            )}
            {groupedMembers.map((group) => (
                <div key={group.title} className="w-full flex flex-col items-center">
                    <h3 className="text-2xl font-light font-rethink-sans text-white mb-8">
                        {group.title}
                    </h3>

                    <div className="flex flex-wrap justify-center gap-8 max-w-[90%]">
                        {group.members
                            .sort((a, b) => {
                                const getRank = (position: string) => {
                                    const pos = position.toLowerCase();
                                    if (pos.includes("co-lead")) return 0;
                                    if (pos.includes("lead")) return 1;
                                    return 2;
                                };

                                const rankA = getRank(a.position);
                                const rankB = getRank(b.position);

                                if (rankA !== rankB) return rankA - rankB;

                                return a.displayName.localeCompare(
                                    b.displayName,
                                );
                            })
                            .map((teamMember, index) => (
                                <div
                                    key={`${teamMember.displayName}-${index}`}
                                    className="group flex flex-col items-center w-[140px] sm:w-[160px] flex-shrink-0"
                                >
                                    <a
                                        href={
                                            teamMember.socialLink || undefined
                                        }
                                        target={
                                            teamMember.socialLink
                                                ? "_blank"
                                                : "_self"
                                        }
                                        rel={
                                            teamMember.socialLink
                                                ? "noopener noreferrer"
                                                : ""
                                        }
                                        className={`flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 ${
                                            !teamMember.socialLink
                                                ? "cursor-default"
                                                : ""
                                        }`}
                                    >
                                        <div className="relative mb-3">
                                            <TeamMemberPhoto
                                                mainProfilePicturePath={
                                                    teamMember.mainProfilePicturePath
                                                }
                                                secondaryProfilePicturePath={
                                                    teamMember.secondaryProfilePicturePath
                                                }
                                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-[30px] shadow-md object-cover transition-shadow duration-300 group-hover:shadow-white/20"
                                            />
                                        </div>

                                        <div className="text-center">
                                            <h4 className="font-bold text-sm sm:text-base text-white leading-tight mb-1 font-rethink">
                                                {teamMember.displayName}
                                            </h4>
                                            <p className="text-xs sm:text-sm text-gray-300 font-medium px-2 font-instrument">
                                                {teamMember.position}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
