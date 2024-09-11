import { getApiMovies } from "@/data/data";

export async function GET(params) {
  const movies = getApiMovies();

  return Response.json(movies);
}
