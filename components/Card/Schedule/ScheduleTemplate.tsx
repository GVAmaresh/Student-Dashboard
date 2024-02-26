import { CiCalendarDate } from "react-icons/ci";
import { MdTimer, MdPlace } from "react-icons/md";

interface Schedule {
  subject: string;
  date: string;
  time: string;
  icon: React.ElementType;
  location: string;
}

export default function ScheduleTemplate({ props }: { props: Schedule }) {
  const Icon = props.icon;
  return (
    <div className="flex flex-wrap justify-center items-center bg-slate-900 w-2/4 md:w-1/3 lg:w-1/4 m-2">
      <div className="h-64 w-full md:w-3/4 lg:w-full mx-auto">
        <div className="flex justify-center pt-5 md:pt-1">
          <Icon size={60} />
        </div>
        <div className="text-center font-semibold text-xl my-4 md:my-2 sm:my-4">
          {props.subject}
        </div>
        <div className="flex flex-col mx-5 md:mx-0 md:pl-10 lg:pl-15">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="w-1/4">
                  <MdTimer size={25} />
                </td>
                <td className="w-3/4">
                  <div className="">{props.time}</div>
                </td>
              </tr>
              <tr>
                <td className="w-1/4">
                  <MdPlace size={25} />
                </td>
                <td className="w-3/4">
                  <div className="">{props.location}</div>
                </td>
              </tr>
              <tr>
                <td className="w-1/4">
                  <CiCalendarDate size={25} />
                </td>
                <td className="w-3/4">
                  <div className="">{props.date}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
