import { useRouter } from "next/router";
import Title from "../../components/title";

export default function Portfolio() {
  const router = useRouter();
  return (
    <>
      <Title title="Portfolio" />
      <div className="flex flex-wrap gap-4 px-3 justify-center">
        <div
          className="card w-96 bg-base-100 shadow-xl shadow-lg hover:shadow-md hover:brightness-[.99]"
          onClick={() => router.push("/portfolio/apps")}
        >
          <div className="card-body">
            <h2 className="card-title">Apps</h2>
            <p>作ったアプリを配布しています</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => router.push("/portfolio/apps")}
              >
                Go
              </button>
            </div>
          </div>
        </div>

        <div
          className="card w-96 bg-base-100 shadow-xl shadow-lg hover:shadow-md hover:brightness-[.99]"
          onClick={() => router.push("/portfolio/images")}
        >
          <div className="card-body">
            <h2 className="card-title">Images / Illust</h2>
            <p>画像や下手なイラストを公開しています</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => router.push("/portfolio/images")}
              >
                Go
              </button>
            </div>
          </div>
        </div>

        <div
          className="card w-96 bg-base-100 shadow-xl shadow-lg hover:shadow-md hover:brightness-[.99]"
          onClick={() => router.push("/portfolio/videos")}
        >
          <div className="card-body">
            <h2 className="card-title">Videos</h2>
            <p>作った動画を公開しています</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => router.push("/portfolio/videos")}
              >
                Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
