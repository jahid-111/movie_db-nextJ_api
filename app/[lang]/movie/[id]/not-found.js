"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  return (
    <div className=" text-black h-screen flex flex-col justify-center items-center">
      <h2 className=" text-4xl">
        Not Found URL :{" "}
        <span className=" text-red-500 font-semibold">{pathName}</span>{" "}
      </h2>
      <p className=" my-4 text-2xl ">Could not find requested resource </p>
      <Link
        className=" px-6 py-2 bg-green-200 hover:text-white  hover:bg-green-800"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
