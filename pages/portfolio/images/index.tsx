import Title from "../../../components/title";
import Portfoliocard from "../../../components/portfoliocard";
import illustlist from "../../../files/imagelist.json";
export default function illust() {
  console.dir(illustlist);
  let sortlist = illustlist.sort(function (a, b) {
    return a.date > b.date ? -1 : 1; //オブジェクトの昇順ソート
  });
  console.log(sortlist);
  return (
    <>
      <Title title="Images / Illust" />
      <p className="text-md flex justify-center">
        画像や下手なイラストを公開しています
        <br />
        Sharing my images and noob illust
      </p>
      <div className="divider">2022年7月</div>
      <div className="flex flex-wrap justify-center gap-4">
        {sortlist.forEach(x => (
          <Portfoliocard
            type="images"
            url={x.url}
            title={x.title}
            description={x.description}
            width={x.width}
            height={x.height}
            date={x.date}
            rough={x.rough}
            tag={x.tag}
          />
        ))}
      </div>
    </>
  );
}
