import Link from "next/link";
import Image from "next/image";
import { RiFileCopy2Line } from "react-icons/ri";
import { TbNotebook } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
import { BiMovie, BiImages } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-200/[.95] fixed top-0 z-50 rounded-b-lg">
        <div className="flex-1">
          <Link href="/" passHref>
            <a className="btn btn-ghost normal-case text-xl font-semibold">
              <div className="avatar">
                <div className="rounded-full">
                  <Image
                    src="/images/zeogamat8.png"
                    alt="tamagoez"
                    width={35}
                    height={35}
                    quality={50}
                  />
                </div>
              </div>
              <div className="px-1" />
              tamagoez
              <div className="pl-2 badge badge-secondary badge-outline">BETA</div>
            </a>
          </Link>
        </div>
        <div className="flex-none hidden sm:block">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex={0}>
              <Link href="/portfolio" passHref>
                <a>
                  <RiFileCopy2Line />
                  Portfolio
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
              </Link>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link href="/portfolio/apps" passHref>
                    <a>
                      <AiOutlineAppstore />
                      Application
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/images" passHref>
                    <a>
                      <BiImages />
                      Images / Illust
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/videos" passHref>
                    <a>
                      <BiMovie />
                      Videos
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/article" passHref>
                <a>
                  <TbNotebook />
                  Article
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about-etc" passHref>
                <a>
                  <IoPerson />
                  About / Etc
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-none block sm:hidden">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/portfolio" passHref>
                <a className="text-lg">
                  <RiFileCopy2Line />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/article" passHref>
                <a className="text-lg">
                  <TbNotebook />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about-etc" passHref>
                <a className="text-lg">
                  <IoPerson />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
