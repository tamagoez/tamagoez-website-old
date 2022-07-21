import Title from "../../components/title";
export default function Portfolio() {
  return (
    <>
      <div className="pl-3">
        <Title title="About" />
        <p className="font-semibold text-md">日本語</p>
        <span className="font-semibold text-md">tamagoez(たまご) / カネランP</span>
        <br />
        初めましての方は初めまして。たまごです。
        <br />
        アプリやイラスト、動画などを作っています。また、たまにブログも投稿しています。
        <br />
        アマチュアで下手です。
        <br />
        創作物を保存&ついでに公開するページになっています。
        <br />
        楽しんでいただけると幸いです。
        <br />
        ちなみにカネランPは、鏡音と藍(ラン)から来ています。
        <div className="divider" />
        <p className="font-semibold text-md">English</p>
        <span className="font-semibold text-md">
          tamagoez(Pronounce as tamago) / KaneranP(KaneRanP)
        </span>
        <br />
        Nice to meet you, I&apos;m tamagoez.
        <br />
        I&apos;m a creator of application, illust, movies, and etc. Also, I post
        blog sometime.
        <br />
        I&apos;m amateur creator. So, I&apos;m not good at these.
        <br />
        This website is for save and share my portfolio.
        <br />I hope you enjoy this!
        <br />
        KaneranP(KaneRanP) comes from Kagamine and 藍(Ran).
      </div>
    </>
  );
}
