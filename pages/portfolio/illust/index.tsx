import Title from "../../../components/title";
import Portfoliocard from "../../../components/portfoliocard";
import illustlist from "../../../files/illustlist.json";
export default function illust() {
  console.dir(illustlist);
  return (
    <>
      <Title title="Illust" />
      <p className="text-md flex justify-center">
        下手なイラストを公開しています
      </p>
      <div className="divider">2022年7月</div>
      <div className="flex flex-wrap justify-center gap-4">
        {illustlist.map((x) => (
          <Portfoliocard
            type="illust"
            url={x.url}
            title={x.title}
            description={x.description}
            width={x.width}
            height={x.height}
          />
        ))}
      </div>
    </>
  );
}
