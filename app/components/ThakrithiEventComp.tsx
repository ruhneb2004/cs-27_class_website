import Image from "next/image";
import Link from "next/link";

export const ThakrithiEventComp = () => {
  return (
    <Link href="events/thakrithi2024" passHref>
      <div className="h-[30rem] mx-10 flex hover:bg-amber-300 p-4 rounded-2xl hover:shadow-md shadow-slate-800 transition-all  cursor-pointer group">
        <div className="flex-1 carousel rounded-box shadow-sm shadow-black">
          <div className="carousel-item w-full relative">
            <Image
              alt="text_image"
              src="/images/onam.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className=""
            />
          </div>
          <div className="carousel-item w-full relative ">
            <Image
              alt="text_image"
              src="/images/vivek-sumanth-lJ4ibw0cMf4-unsplash.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className=""
            />
          </div>
          <div className="carousel-item w-full relative ">
            <Image
              alt="text_image"
              src="/images/vivek-sumanth-lJ4ibw0cMf4-unsplash.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className=""
            />
          </div>
          <div className="carousel-item w-full relative ">
            <Image
              alt="text_image"
              src="/images/vivek-sumanth-lJ4ibw0cMf4-unsplash.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className=""
            />
          </div>
          <div className="carousel-item w-full relative">
            <Image
              alt="text_image"
              src="/images/vivek-sumanth-lJ4ibw0cMf4-unsplash.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className=""
            />
          </div>
        </div>

        <div className="flex-1 text-center flex flex-col py-7 relative ">
          <div className="text-7xl font-bold text-white group-hover:text-black">
            Thakrithi 2024
          </div>
          <div className="text-slate-200 group-hover:text-slate-900 p-7 text-wrap text-xl">
            Onam is a vibrant and traditional harvest festival celebrated with
            great enthusiasm in the Indian state of Kerala. It marks the
            homecoming of the legendary King Mahabali, whose reign is remembered
            as a time of peace and prosperity. Onam is a 10-day festival filled
            with elaborate rituals, colorful floral designs known as Pookalam,
            traditional dances like Thiruvathira, and the famous Vallamkali
            (snake boat races). The grand feast, Onam Sadhya, served on banana
            leaves with an array of delicious dishes, is a major highlight. Onam
            reflects Kerala’s rich cultural heritage and brings people together
            in a spirit of unity and joy.
          </div>
          <Image
            alt="text_image"
            src="/images/flower.png"
            width={100}
            height={100}
            className="absolute right-0 bottom-0 -rotate-90"
          />
        </div>
      </div>
    </Link>
  );
};
