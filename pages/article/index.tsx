import Title from "../../components/title";
import { useRouter } from "next/router" 
export default function Blog() {
  const router = useRouter()
  return (
    <>
      <Title title="Blog" />
      <div
          className="card w-96 bg-base-100 shadow-xl shadow-lg hover:shadow-md hover:brightness-[.98]"
          onClick={() => router.push("/article/youtube-or-niconico")}
        >
          <div className="card-body">
            <h2 className="card-title">YouTubeとニコニコ動画ではどっちが稼げるのか</h2>
            <p>動画投稿すらしてないので結構あとめに更新します</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => router.push("/article/youtube-or-niconico")}
              >
                Go
              </button>
            </div>
          </div>
        </div>
    </>
  );
}
