import Image from "next/image";
import Link from "next/link";

export const DyuthiComp = () => {
  const carouselImageUrls = [
    "/images/dyuthiComplete.jpeg",
    "/images/vivek-sumanth-lJ4ibw0cMf4-unsplash.jpg",
  ];
  //add the urls of the images put in the public folder above
  return (
    <Link href="events/dyuthi2024" passHref>
      <div className="h-[42rem] mx-10 flex flex-col hover:bg-rose-400 p-4 rounded-2xl hover:shadow-md shadow-slate-800 transition-all  cursor-pointer group">
        <div className="flex-1 carousel rounded-box shadow-sm shadow-black">
          {carouselImageUrls.map((url, index) => {
            return (
              <div className="carousel-item w-full relative" key={index}>
                <Image
                  alt="text_image"
                  src={url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            );
          })}
        </div>
        <div className="flex-1 text-center flex flex-col py-7 relative ">
          <div className="text-7xl font-bold text-white group-hover:text-black">
            Dyuthi 2024
          </div>
          <div className="text-slate-200 group-hover:text-slate-900 p-7 text-wrap text-xl">
            Dyuthi is the flagship technical and cultural fest of Government
            Engineering College Thrissur (GECT), renowned for its vibrant blend
            of innovation, creativity, and celebration. It serves as a dynamic
            platform for students from across the country to showcase their
            technical prowess and artistic talents. The event features a wide
            array of competitions, workshops, paper presentations, and
            exhibitions that foster creativity and technical excellence.
            Alongside these, cultural performances, music, and dance add color
            and energy, making Dyuthi a holistic experience of learning and
            entertainment. Dyuthi embodies the spirit of GECT, promoting growth,
            collaboration, and enthusiasm among students.
          </div>
          <Image
            alt="text_image"
            src="/images/radioDyuthi.png"
            width={100}
            height={100}
            className="absolute left-0 bottom-0 "
          />
        </div>
      </div>
    </Link>
  );
};
