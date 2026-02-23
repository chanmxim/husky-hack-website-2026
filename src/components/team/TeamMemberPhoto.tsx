
interface TeamMemberPhotoProps {
    mainProfilePicturePath: string;
    secondaryProfilePicturePath: string;
    hoverAccessoryPath?: string;
    className?: string;
}

export default function TeamMemberPhoto({
    mainProfilePicturePath,
    secondaryProfilePicturePath,
    hoverAccessoryPath = "/team-profiles/scarf.svg",
    className = "w-24 h-24",
}: TeamMemberPhotoProps) {
    const baseProfilePicturePath =
        mainProfilePicturePath || secondaryProfilePicturePath;

    return (
        <div className="group relative inline-block overflow-visible">
            {baseProfilePicturePath ? (
                <div
                    className={`relative bg-gray-200 overflow-hidden rounded-3xl ${className}`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                        style={{
                            backgroundImage: `url(${baseProfilePicturePath})`,
                        }}
                    />
                    {mainProfilePicturePath && secondaryProfilePicturePath && (
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                backgroundImage: `url(${secondaryProfilePicturePath})`,
                            }}
                        />
                    )}
                </div>
            ) : (
                <div
                    className={`bg-neutral-700 flex items-center justify-center rounded-3xl ${className} relative`}
                >
                    <img
                        src="/team-profiles/default-profile.svg"
                        alt="Default Profile"
                        className="w-14 h-14 md:w-16 md:h-16 object-contain"
                    />
                </div>
            )}

            {hoverAccessoryPath && (
                <img
                    src={hoverAccessoryPath}
                    alt=""
                    aria-hidden="true"
                    className="absolute left-1/2 -translate-x-1/2 -bottom-[45%] opacity-0 scale-95 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-125 pointer-events-none z-10"
                />
            )}
        </div>
    );
}
