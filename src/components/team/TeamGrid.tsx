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
    color?: string;
}

export default function TeamGrid({
    groupedMembers,
    onShowLess,
}: {
    groupedMembers: TeamGroup[];
    onShowLess?: () => void;
}) {
    return (
        <div className="space-y-24 animate-fade-in">
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

                    <div className="flex flex-wrap justify-start gap-2 sm:gap-3 max-w-[90%] mx-auto">
                        {group.members
                            .map((teamMember, index) => (
                                <div
                                    key={`${teamMember.displayName}-${index}`}
                                    className="group flex flex-col items-center w-[100px] sm:w-[140px] flex-shrink-0"
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
                                            teamMember.socialLink
                                                ? "cursor-pointer"
                                                : "cursor-default"
                                        }`}
                                    >
                                        <TeamMemberPhoto
                                            mainProfilePicturePath={
                                                teamMember.mainProfilePicturePath
                                            }
                                            secondaryProfilePicturePath={
                                                teamMember.secondaryProfilePicturePath
                                            }
                                            className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg sm:rounded-[30px] shadow-md object-cover transition-shadow duration-300 group-hover:shadow-white/20"
                                        />

                                        <div className="text-center w-full mt-2">
                                            <h4 className="font-bold text-xs sm:text-sm md:text-base text-white leading-tight font-rethink truncate">
                                                {teamMember.displayName}
                                            </h4>
                                            {teamMember.position && (
                                                <p className="mt-1 text-[10px] sm:text-xs text-gray-300 leading-tight font-rethink-sans truncate">
                                                    {teamMember.position}
                                                </p>
                                            )}
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
