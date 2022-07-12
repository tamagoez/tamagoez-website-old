import Title from "../../components/title";
import { useRouter } from "next/router" 
export default function Blog() {
  const router = useRouter()
  return (
    <>
      <Title title="Blog" />
      <div
          className="card w-96 bg-base-100 shadow-xl shadow-lg hover:shadow-md hover:brightness-[.98]"
          onClick={() => router.push("/blog/2022-07-13")}
        >
          <div className="card-body">
            <h2 className="card-title">2022-07-13</h2>
            <p>これテスト投稿なんで見る価値ないです</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => router.push("/blog/2022-07-13")}
              >
                Go
              </button>
            </div>
          </div>
        </div>
    </>
  );
}
