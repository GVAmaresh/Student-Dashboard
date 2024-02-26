import Image from "next/image";
import { MdAddCall } from "react-icons/md";
import { LuMessageSquarePlus } from "react-icons/lu";
export default function TutorTemplate({
  img,
  name,
  subject,
  degree,
}: {
  img: String;
  name: String;
  subject: String;
  degree: String;
}) {
  return (
    <>
      <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 h-80 bg-slate-900 flex flex-col items-center mt-10 mr-4">
        <div className="w-44 h-44 rounded-full relative overflow-hidden -top-14 bg-slate-900">
          <div
            className="bg-cover bg-center w-full h-full rounded-full"
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: "150%",
              backgroundPosition: "center top",
            }}
          ></div>
        </div>
        <div className="-top-8 relative text-center">
          <div className="text-3xl font-bold pb-2">{name}</div>
          <div className="text-neutral-400 pb-2">{subject}</div>
          <div className="mb-2">{degree}</div>
          <div className="flex flex-row gap-5 items-center justify-center pt-2">
            <MdAddCall size={25} />
            <LuMessageSquarePlus size={25} />
          </div>
        </div>
      </div>
    </>
  );
}
