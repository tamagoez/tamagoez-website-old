import Image from "next/image";
import Link from "next/link";
export default function Portfoliocard({
  type,
  url,
  title,
  description,
  width,
  height
}) {
  return (
    <>
      <Link href={`${type}/${url}`}>
        <div className="card card-compact max-w-xs bg-base-100 shadow-lg hover:shadow-md hover:brightness-[.99]">
          <figure>
            <Image
              src={`/${type}/${url}`}
              alt={title}
              width={width}
              height={height}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </Link>
    </>
  );
}
