import Image from "next/image";
import React from "react";

const DetailsContent = ({ movie }) => {
  return (
    <section className="  text-black">
      <div>
        <Image
          className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
          src={movie?.poster_path}
          alt=""
          height={720}
          width={1080}
        />
      </div>

      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2">
          <Image src={movie.backdrop_path} alt="" height={300} width={300} />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold   text-2xl">{movie?.title}</h2>
          <p className="my-2   italic">{movie?.overview}</p>
          <ul className=" space-y-2 my-8">
            <li>Release Date : {movie?.release_date}</li>
            <li>Average Vote : {movie?.vote_average}</li>
            <li>Vote Count : {movie?.vote_count}k</li>
            <li>Popularity : {movie?.popularity}</li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full  bg-green-700 text-white font-medium  rounded-md">
            Stream In HD
          </button>
          <button className="py-2 w-full   bg-green-700 text-white font-medium rounded-md">
            Download In HD
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailsContent;
