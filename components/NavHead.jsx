import Image from "next/image";
import Link from "next/link";
import SwitchLang from "./SwitchLang";

const NavHead = ({ lang }) => {
  return (
    <nav className="container border-violet-200 flex items-center justify-between space-x-10 py-6 mx-auto">
      <Link href="index.html">
        <Image src="./assets/logo.svg" width={150} height={35} alt="" />
      </Link>

      <ul className="flex items-center space-x-5">
        <li>
          <Link
            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            href="#"
          >
            <Image src="./assets/ring.svg" width={35} height={35} alt="" />
          </Link>
        </li>

        <SwitchLang lang={lang} />

        <li>
          <Link
            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            href="#"
          >
            <Image src="./assets/icons/sun.svg" width={35} height={35} alt="" />
          </Link>
        </li>
        <li>
          <Link
            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            href="#"
          >
            <Image
              src="./assets/shopping-cart.svg"
              width={35}
              height={35}
              alt=""
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavHead;
