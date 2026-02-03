import Image from "next/image";

type BronzeSponsorCardProps = {
  title: string;
  sponsorLogo: string;
  borderColour: string;
  link: string;
};

function BronzeSponsorCard({
  title,
  sponsorLogo,
  borderColour,
  link,
}: BronzeSponsorCardProps) {
  return (
    <a href={link} target="_blank">
      <div
        className="
          flex flex-col items-center justify-center
          rounded-md 
          h-[15vw] w-[15vw]
          p-4
          grayscale opacity-90
          transition duration-300
          hover:grayscale-0 hover:opacity-100
        "
        style={{ border: `2px solid ${borderColour}` }}>
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Image
            src={sponsorLogo}
            alt={`Brand logo for ${title}`}
            className="max-h-[12vw] max-w-[12vw] object-contain"
          />
        </div>
      </div>
    </a>
  );
}

export default BronzeSponsorCard;
