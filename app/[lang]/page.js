import Content from "@/components/Content";
import NavAside from "@/components/NavAside";
import { getData } from "@/lib/dataJson";

export default async function Home({ params: { lang } }) {
  const data = await getData();
  const movies = data?.results;

  return (
    <main className=" text-gray-800 flex justify-center gap-5">
      <NavAside lang={lang} />
      <Content movies={movies} />
    </main>
  );
}
