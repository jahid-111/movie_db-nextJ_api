import Content from "@/components/Content";
import NavAside from "@/components/NavAside";

export default async function Home({ params: { lang } }) {
  return (
    <main className=" text-gray-800 flex justify-center gap-5">
      <NavAside lang={lang} />
      <Content />
    </main>
  );
}
