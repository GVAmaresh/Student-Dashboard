import Link from "next/link";

export default function UpdatedNewsCardTemplate({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <>
      <div className="pb-2">
        <div className="text-lg font-medium ">{title}</div>
        <div className=" text-sm pl-4 pr-4">{desc}</div>
        <Link href={link}>
          <div className="text-cyan-300 pl-4 pt-2">See More</div>
        </Link>
      </div>
    </>
  );
}
