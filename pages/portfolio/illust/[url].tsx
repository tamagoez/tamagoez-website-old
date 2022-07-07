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
      <div className="bg-gray-900 min-h-screen">
        <span className="text-gray-200">
          <Title title={data.title} />
        </span>
        <span className="pt-2 text-md flex justify-center text-gray-300">
          {data.description}
        </span>
        <div
          className="fixed top-5 right-6 text-gray-300 text-5xl z-50"
          onClick={() => router.push("/portfolio/illust/")}
        >
          <IoClose />
        </div>
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
