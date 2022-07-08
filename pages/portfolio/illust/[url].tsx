import { useRouter } from "next/router";
import Image from "next/image";
import illustlist from "../../../files/illustlist.json";
import Title from "../../../components/title";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Illust() {
  const router = useRouter();
  const { url: url } = router.query;

  if (!router.isReady) {
    return null;
  }
  function isUrl(list) {
    return list.url === url;
  }
  const data = illustlist.find(isUrl);

  const nowlink = illustlist.indexOf(data);
  console.log(`nowlink: ${nowlink}`);
  const nextlink = nowlink === 0 ? null : illustlist[nowlink - 1]["url"];
  const prevlink =
    nowlink === illustlist.length - 1 ? null : illustlist[nowlink + 1]["url"];
  console.log(data);

  console.log(`prev: ${prevlink}`);
  console.log(`next: ${nextlink}`);
  return (
    <>
      <div className="bg-base-200/20 min-h-screen">
        <div className="pt-2" />
        <p className="text-gray-900">
          <Title title={data.title} />
        </p>
        {/*<div className="pt-2" />*/}
        <p className="text-md flex justify-center text-gray-700 max-w-5/4">
          {data.description}
        </p>
        <button
          className="btn btn-ghost btn-square fixed top-2 right-2 sm:top-5 sm:right-5 text-gray-400/[.30] hover:text-gray-600/[.70] text-5xl z-50"
          onClick={() => router.push("/portfolio/illust/")}
        >
          <IoClose />
        </button>
        <button
          className="btn-square fixed h-full inset-y-0 left-0 text-gray-400/[.30] hover:text-gray-600/[.70] text-5xl z-40"
          disabled={prevlink === null}
          onClick={() => router.push(prevlink)}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="btn-square fixed h-full inset-y-0 right-0 text-gray-400/[.30] hover:text-gray-600/[.70] text-5xl z-40"
          disabled={nextlink === null}
          onClick={() => router.push(nextlink)}
        >
          <IoIosArrowForward />
        </button>
        <div className="pb-5" />
        <div className="aspect-auto flex justify-center">
          <Image
            src={`/illust/${data.url}`}
            alt={data.title}
            width={data.width}
            height={data.height}
          />
        </div>
      </div>
    </>
  );
}
