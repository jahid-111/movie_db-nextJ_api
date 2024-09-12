import DetailsContent from "@/components/DetailsContent";
import { getData } from "@/lib/dataJson";
import React from "react";

const MovieDetailsPage = async ({ params: { id } }) => {
  const data = await getData();

  const movie = data?.results?.find((movie) => movie?.id === parseInt(id));

  return (
    <div className="text-black">
      <DetailsContent movie={movie} />
    </div>
  );
};

export default MovieDetailsPage;
