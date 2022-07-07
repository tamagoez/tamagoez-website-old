import { useRouter } from "next/router";
import Title from "../../components/title";

export default function Portfolio() {
  const router = useRouter();
  return (
    <>
      <Title title="Portfolio" />
      <div className="divider" />
      <div
        className="card w-96 bg-base-100 shadow-xl"
        onClick={() => router.push("/portfolio/illust")}
      >
        <div className="card-body">
          <h2 className="card-title">Illust</h2>
          <p>下手なイラストを公開しています</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => router.push("/portfolio/illust")}
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
