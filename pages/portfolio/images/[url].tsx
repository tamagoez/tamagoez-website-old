import { useRouter } from "next/router";
import Image from "next/image";
import illustlist from "../../../files/imagelist.json";
import Title from "../../../components/title";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Illust() {
  const router = useRouter();
  const { url: url } = router.query;

  // https://keizokuma.com/js-array-object-sort/
  let sortlist = illustlist.sort(function (a, b) {
    return a.date > b.date ? -1 : 1; //オブジェクトの昇順ソート
  });
  console.log(sortlist);

  if (!router.isReady) {
    return null;
  }
  function isUrl(list) {
    return list.url === url;
  }
  const data = sortlist.find(isUrl);

  const nowlink = sortlist.indexOf(data);
  console.log(`nowlink: ${nowlink}`);
  const prevlink = nowlink === 0 ? null : sortlist[nowlink - 1]["url"];
  const prevcn =
    prevlink !== null
      ? " hover:text-gray-600/[.70] hover:bg-gray-500/40 hover:animate-pulse"
      : "";
  const nextlink =
    nowlink === sortlist.length - 1 ? null : sortlist[nowlink + 1]["url"];
  const nextcn =
    nextlink !== null
      ? " hover:text-gray-600/[.70] hover:bg-gray-500/40 hover:animate-pulse"
      : "";

  console.log(data);

  console.log(`prev: ${prevlink}`);
  console.log(`next: ${nextlink}`);

  let keydown = false

  document.body.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      console.log("pressed: ArrowRight");
      if (!keydown) router.push(nextlink);
      keydown = true
    }
    if (event.key === "ArrowLeft") {
      console.log("pressed: ArrowLeft");
      if (!keydown) router.push(prevlink);
      keydown = true
    }
    return null;
  });

  document.body.addEventListener("keyup", (event) => {
    keydown = false
    return null;
  });

  return (
    <>
      <div className="bg-base-200/20 min-h-screen">
        <div className="pt-2" />
        <p className="text-gray-900">
          <Title title={data.title} />
        </p>
        <div className="flex gap-1 justify-center">
          {data.rough ? (
            <div className="badge badge-secondary badge-outline badge-md">
              rough
            </div>
          ) : null}
          {data.tag.map((x) => {return ( 
                <div className="badge badge-outline badge-md" key={x}>
                  {x}
                </div>
              )})}
        </div>
        <span className="text-sm text-gray-500 flex justify-center">
          {data.date}
        </span>
        {/*<div className="pt-2" />*/}
        <p className="text-md flex justify-center text-gray-700 max-w-5/4">
          {data.description}
        </p>
        <button
          className="btn btn-ghost btn-square fixed top-3 right-3 sm:top-5 sm:right-5 text-gray-400/[.30] hover:text-gray-600/[.70] text-6xl z-50"
          onClick={() => router.push("/portfolio/images/")}
        >
          <IoClose />
        </button>
        <button
          className={
            "fixed h-full inset-y-0 left-0 text-gray-400/[.30] text-5xl z-40" +
            prevcn
          }
          disabled={prevlink === null}
          onClick={() => router.push(prevlink)}
        >
          <IoIosArrowBack />
        </button>
        <button
          className={
            "fixed h-full inset-y-0 right-0 text-gray-400/[.30] text-5xl z-40" +
            nextcn
          }
          disabled={nextlink === null}
          onClick={() => router.push(nextlink)}
        >
          <IoIosArrowForward />
        </button>
        <div className="pb-5" />
        <div className="aspect-auto flex justify-center">
          <Image
            src={`/images/${data.url}`}
            alt={data.title}
            width={data.width}
            height={data.height}
            quality={100}
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
}
