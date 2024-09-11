import Image from "next/image";
import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <div class=" container mt-5">
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        <figure class="p-4 border-2 bg-green-100 border-black/10 shadow-sm dark:border-white/10 rounded-xl">
          <Image
            class="w-full rounded-sm object-cover"
            src="/assets/movie-1.png"
            alt=""
            width={1000}
            height={1000}
          />
          <figcaption class="pt-4">
            <h3 class="text-xl mb-1">Iron Man</h3>
            <p class="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
            <div class="flex items-center space-x-1 mb-5">
              <Image src="/assets/star.svg" width="14" height="14" alt="" />
              <Image src="/assets/star.svg" width="14" height="14" alt="" />
              <Image src="/assets/star.svg" width="14" height="14" alt="" />
              <Image src="/assets/star.svg" width="14" height="14" alt="" />
              <Image src="/assets/star.svg" width="14" height="14" alt="" />
            </div>
            <Link
              class=" bg-green-500 text-white rounded-lg py-2 px-5 flex items-center justify-center gap-2    font-semibold text-sm"
              href="./modal.html"
            >
              <Image src="/assets/tag.svg" width="16" height="16" alt="" />
              <span>Details</span>
            </Link>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Content;
