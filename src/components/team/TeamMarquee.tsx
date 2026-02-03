import TeamMemberPhoto from "./TeamMemberPhoto";

interface Team {
    title: string;
    members: TeamMember[];
}

interface TeamMember {
    displayName: string;
    socialLink: string;
    position: string;
    mainProfilePicturePath: string;
    secondaryProfilePicturePath: string;
}

export default function TeamMarquee({ teams }: { teams: Team[] }) {
    // Marquee Logic - loop the members to create infinite scroll effect
    const loopedTeams = [...teams, ...teams];

    // Team title before each group of members
    const createTeamTitle = (title: string, index: number) => (
        <div
            key={"title-" + index}
            className="h-16 md:h-20 flex flex-col justify-center px-5"
        >
            <h2 className="text-2xl font-rethink-sans font-bold text-white">
                {title}
            </h2>
        </div>
    );

    const createMemberList = (members: TeamMember[], index: number) =>
        members
            .sort((a, b) => b.position.length - a.position.length)
            .map((member) => (
                <div
                    key={`${member.displayName}-${index}`}
                    className="group relative flex flex-col items-center justify-center w-[100px] h-fit"
                >
                    <a
                        href={member.socialLink || undefined}
                        target={member.socialLink ? "_blank" : "_self"}
                        rel={member.socialLink ? "noopener noreferrer" : ""}
                        className={`relative flex flex-col items-center ${!member.socialLink ? "cursor-default" : ""}`}
                    >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                            <div className="bg-[#1C6D41] text-white text-xs font-bold py-1 px-3 rounded shadow-lg whitespace-nowrap relative">
                                <div className="text-center">
                                    {member.displayName}
                                </div>
                                <div className="text-center font-medium">
                                    {member.position}
                                </div>
                                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#1C6D41]"></div>
                            </div>
                        </div>

                        <TeamMemberPhoto
                            mainProfilePicturePath={
                                member.mainProfilePicturePath
                            }
                            secondaryProfilePicturePath={
                                member.secondaryProfilePicturePath
                            }
                            className="w-16 h-16 md:w-20 md:h-20 rounded-[30px] object-cover transition-transform duration-150 group-hover:scale-110"
                        />
                    </a>
                </div>
            ));

    return (
        <div className="flex flex-row items-center w-full py-10 overflow-x-hidden">
            <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">
                {loopedTeams.flatMap((team, index) => [
                    createTeamTitle(team.title, index),
                    ...createMemberList(team.members, index),
                ])}
            </div>
        </div>
    );
}
