import {
  deleteApiMovie,
  getApiDataId,
  getApiMovies,
  updateDataApi,
} from "@/data/data";
import { NextResponse } from "next/server";

export async function GET(_request, { params }) {
  const movieId = params?.id;
  const movie = await getApiDataId(movieId);
  return NextResponse.json(movie);
}
{
  /* OPERATION ONLY FROM THUNDER_BOLD EXTENSION (vs)*/
}
export async function PATCH(request, { params }) {
  const movie = await request.json();
  const movieId = params?.id;

  const dataMovies = await getApiMovies();
  const movieIndex = updateDataApi(movieId, dataMovies);
  if (movieIndex !== -1) {
    dataMovies.results[movieIndex].title = movie.title;
    console.log("Updated movie:", dataMovies.results[movieIndex]);
    return NextResponse.json(dataMovies.results[movieIndex]);
  } else {
    return NextResponse.json({ error: "Movie not found" }, { status: 404 });
  }
}

export async function DELETE(_request, { params }) {
  const movieId = params?.id;
  const dataMovies = getApiMovies();
  const delDataIndex = deleteApiMovie(movieId, dataMovies);
  const deleteData = dataMovies.results[delDataIndex];
  dataMovies.results.splice(delDataIndex, 1);

  return Response.json(deleteData);
}
