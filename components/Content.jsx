import Image from "next/image";
import Link from "next/link";
import React from "react";

const Content = async ({ movies }) => {
  return (
    <div className=" container mt-5">
      <div className="  grid sm:grid-cols-2 xl:grid-cols-3 mx-4 gap-7">
        {movies?.map((movie) => (
          <figure className=" p-4 border-2 bg-green-100 border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <Image
              className="w-full rounded-sm object-cover"
              src={movie?.poster_path}
              alt=""
              width={1000}
              height={1000}
            />
            <figcaption className=" pt-4">
              <h3 className="text-xl mb-1">{movie?.title}</h3>
              <p className="text-[#575A6E] text-sm mb-2">
                Release : {movie?.release_date}
              </p>
              <div className="flex items-center space-x-1 mb-5">
                <Image src="/assets/star.svg" width="14" height="14" alt="" />
                <Image src="/assets/star.svg" width="14" height="14" alt="" />
                <Image src="/assets/star.svg" width="14" height="14" alt="" />
                <Image src="/assets/star.svg" width="14" height="14" alt="" />
                <Image src="/assets/star.svg" width="14" height="14" alt="" />
              </div>
              <Link
                className=" relative  bottom-0 bg-green-500 text-white rounded-lg py-2 px-5 flex items-center justify-center gap-2    font-semibold text-sm"
                href={`/movie/${movie?.id}`}
              >
                <Image src="/assets/tag.svg" width="16" height="16" alt="" />
                <span>Details</span>
              </Link>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Content;
