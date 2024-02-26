import Link from "next/link";
import "../../../app/globals.css";
import { MdTimelapse } from "react-icons/md";
export default function UpcomingTemplate({
  image,
  title,
  to,
  from,
  link,
}: {
  image: string;
  title: string;
  to: string;
  from: string;
  link: string;
}) {
  const ImageLogo = image;
  return (
    <div className="Upcoming-box">
      <div className="flex items-center justify-center">
        <ImageLogo size={88} />
      </div>
      <div className="text-lg font-medium pt-6">
        {title}{" "}
        <div className="flex flex-row gap-3 items-center justify-center">
          <MdTimelapse />
          <span className="text-red-600 font-normal text-base">
            {from}
            <span className="text-white"> - </span>
            {to}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href={link}>
          <div className="text-lg font-bold mt-4 rounded-xl p-2 bg-blue-800 w-full">
            View
          </div>
        </Link>
      </div>
    </div>
  );
}
