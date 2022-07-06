import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-300/[.98] fixed top-0 z-50 rounded-b-lg">
        <div className="flex-1">
          <Link href="/" passHref>
            <a className="btn btn-ghost normal-case text-xl font-semibold">
              tamagoez
            </a>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex={0}>
              <Link href="/portfolio" passHref>
                <a>
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
                    <a>Application</a>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/illust" passHref>
                    <a>Illust</a>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/videos" passHref>
                    <a>Videos</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog" passHref>
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/about-etc" passHref>
                <a>About / Etc</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
