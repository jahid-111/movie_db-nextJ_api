import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavAside = () => {
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
            <span>Trending</span>
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
            <span>New Releases</span>
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
            <span>Coming Soon</span>
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
            <span>Favourites</span>
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
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default NavAside;
