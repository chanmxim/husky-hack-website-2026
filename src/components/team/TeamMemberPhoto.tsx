
interface TeamMemberPhotoProps {
    mainProfilePicturePath: string;
    secondaryProfilePicturePath: string;
    className?: string;
}

export default function TeamMemberPhoto({ mainProfilePicturePath, secondaryProfilePicturePath, className = "w-24 h-24" }: TeamMemberPhotoProps) {
    return (
        <>
            {mainProfilePicturePath || secondaryProfilePicturePath ? (
                <div className={`relative bg-gray-200 overflow-hidden rounded-3xl ${className}`}>
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                        style={{
                            backgroundImage: `url(${mainProfilePicturePath || secondaryProfilePicturePath})`,
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
                <div className={`bg-neutral-700 flex items-center justify-center rounded-3xl ${className} relative`}>
                    <img
                        src="/team-profiles/default-profile.svg"
                        alt="Default Profile"
                        className="w-16 h-16 object-contain"
                    />
                </div>
            )}
        </>
    );
}
