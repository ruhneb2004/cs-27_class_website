import Image from "next/image";

export const ImageFrameComp = ({
  description,
  imageUrl,
  boxColor,
  rotation,
}: {
  description: string;
  imageUrl: string;
  boxColor: string;
  rotation: string;
}) => {
  return (
    <div
      className={`${boxColor} text-black h-64 w-56 flex flex-wrap justify-center items-start ${rotation} hover:hue-rotate-180 transition-all hover:rotate-12 rounded-md shadow-xl`}
    >
      <div className="relative bg-white h-4/6 w-4/5 mt-4 overflow-hidden rounded-lg shadow-inner">
        <Image
          alt="text_image"
          src={`${
            imageUrl
              ? imageUrl
              : "/images/vivek-sumanth-lJ4ibw0cMf4-unsplash.jpg"
          }`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="shadow-2xl shadow-white"
        />
      </div>
      <div className="font-semibold">{description}</div>
    </div>
  );
};
