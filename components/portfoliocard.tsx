import Image from "next/image";
import Link from "next/link";
export default function Portfoliocard({
  type,
  url,
  title,
  description,
  width,
  height,
  date,
  rough,
  tag
}) {
  return (
    <>
      <Link href={`${type}/${url}`}>
        <div className="card card-compact max-w-xs bg-base-100 shadow-lg hover:shadow-md hover:brightness-[.99]">
          <figure className="cursor-zoom-in">
            <Image
              src={`/${type}/${url}`}
              alt={title}
              width={width}
              height={height}
              quality={70}
              placeholder="blur"
            />
          </figure>
          <div className="card-body">
            <span className="card-title">{title}</span>
            <span className="text-xs text-gray-500">{date}</span>
            <div className="flex gap-1">
              {rough ? (
                <div className="badge badge-secondary badge-outline badge-sm">
                  rough
                </div>
              ) : null}
              {tag.map((x) => { 
                <div className="badge badge-outline badge-sm" key={x}>
                  {x}
                </div>
          })}
            </div>
            <p>{description}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </Link>
    </>
  );
}
