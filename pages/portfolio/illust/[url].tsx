import { useRouter } from "next/router";
import Image from "next/image";
import illustlist from "../../../files/illustlist.json";
import Title from "../../../components/title";
import { IoClose } from "react-icons/io5";
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
  console.log(data);
  return (
    <>
      <div className="bg-base-200 min-h-screen">
        <div className="pt-2" />
        <p className="text-gray-900">
          <Title title={data.title} />
        </p>
        <p className="pt-2 text-md flex justify-center text-gray-700 max-w-5/4">
          {data.description}
        </p>
        <button
          className="btn btn-ghost fixed top-1 right-1 sm:top-5 sm:right-5 text-gray-600/[.60] text-5xl z-50"
          onClick={() => router.push("/portfolio/illust/")}
        >
          <IoClose />
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
