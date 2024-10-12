import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
const MemberCard = ({
  name,
  description,
  badges,
  imageUrl,
}: {
  name: string;
  description: string;
  badges: string[];
  imageUrl: string;
}) => {
  return (
    <a
      className="card bg-base-100 w-64 shadow-xl text-black cursor-pointer"
      href={`membersPage/${name.split(" ")[0].toLowerCase()}`}
      /*    
            If name is provided as Enthero Entho then make your profile page folder name
            as enthero.I have made mine in a similar manner by making a folder named benhur, as the name I have given here is Benhur P Benny.
       */
    >
      <AspectRatio ratio={11 / 12}>
        <Image
          src={`${
            imageUrl
              ? imageUrl
              : "/images/vivek-sumanth-lJ4ibw0cMf4-unsplash.jpg"
          }`}
          alt="Shoes"
          width={300}
          height={400}
          className="rounded-t-xl w-full h-full object-cover"
        />
      </AspectRatio>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="max-h-10 overflow-auto">{description}</p>
        <div className="card-actions justify-end">
          {badges.map((badge, index) => {
            return (
              <div className="badge" key={index}>
                {badge}
              </div>
            );
          })}
        </div>
      </div>
    </a>
  );
};
export default MemberCard;
