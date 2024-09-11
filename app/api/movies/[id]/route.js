import { getApiDataId } from "@/data/data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const movieId = params?.id;
  const movie = await getApiDataId(movieId);

  return NextResponse.json(movie);
}
