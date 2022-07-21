import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>tamagoez(KaneRanP) Website</title>
        <meta name="description" content="An official website for tamagoez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="hero min-h-screen">
          <div className="hero-overlay bg-opacity-60" />
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">tamagoez Website</h1>
              <p className="mb-5">
                Portfolio(application, illust, movies), article, contact
              </p>
              <button className="btn glass">Take a look</button>
            </div>
          </div>
        </div>
      </div>

      <div className="divider">Menu</div>
      <div className="min-h-[80vh]">
        <div className="flex flex-wrap gap-4 px-3 justify-center">
          <Link href="/portfolio" passHref>
            <div className="card w-96 bg-base-100 shadow-lg hover:shadow-md hover:brightness-[.98]">
              <div className="card-body">
                <h2 className="card-title">Portfolio</h2>
                <p>Application, Illust, Videos</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/article" passHref>
            <div className="card w-96 bg-base-100 shadow-lg hover:shadow-md hover:brightness-[.98]">
              <div className="card-body">
                <h2 className="card-title">Article</h2>
                <p>Article</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/about-etc" passHref>
            <div className="card w-96 bg-base-100 shadow-lg hover:shadow-md hover:brightness-[.98]">
              <div className="card-body">
                <h2 className="card-title">About / Etc</h2>
                <p>Introducing tamagoez</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
