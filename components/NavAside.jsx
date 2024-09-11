import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavAside = async ({ lang }) => {
  const dictionaries = await getDictionary(lang);
  return (
    <aside className=" w-80 h-96 rounded  mt-5">
      <ul className="space-y-2 text-gray-800">
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-green-400 text-slate-50 "
            href="#"
          >
            <Image
              src="./assets/icons/trending.svg"
              width="24"
              height="24"
              alt=""
            />
            <span>{dictionaries?.trending}</span>
          </Link>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="./assets/icons/newRelease.svg"
              width="24"
              height="24"
              alt=""
            />
            <span>{dictionaries?.newReleases}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="./assets/icons/commingSoon.svg"
              width="24"
              height="24"
              alt=""
            />
            <span>{dictionaries?.comingSoon}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="./assets/icons/favourite.svg"
              width="24"
              height="24"
              alt=""
            />
            <span>{dictionaries?.favorites}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="./assets/icons/watchLater.svg"
              width="24"
              height="24"
              alt=""
            />
            <span>{dictionaries?.watchLater}</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default NavAside;
