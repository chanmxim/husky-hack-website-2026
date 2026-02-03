import Image from "next/image";

type GoldSponsorCardProps = {
  title: string;
  sponsorLogo: string;
  borderColour: string;
};

function GoldSponsorCard({
  title,
  sponsorLogo,
  borderColour,
}: GoldSponsorCardProps) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        rounded-md h-[30vw] w-[30vw]
        p-6 grayscale opacity-90 transition duration-300
        hover:grayscale-0 hover:opacity-100"
      style={{ border: `2px solid ${borderColour}` }}
    >

      {/* Logo */}
      <div className="flex items-center justify-center">
        <Image
          src={sponsorLogo}
          alt={`Brand logo for ${title}`}
          className="
          max-h-[25vw] object-contain"

        />
      </div>
    </div>
  );
}

export default GoldSponsorCard;
