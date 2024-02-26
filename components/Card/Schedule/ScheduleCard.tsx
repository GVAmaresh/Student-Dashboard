import { ScheduleList } from "./ScheduleList";
import ScheduleTemplate from "./ScheduleTemplate";
export default function ScheduleCard() {
  console.log(ScheduleList);
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {ScheduleList.map((item) => (
          <ScheduleTemplate key={item.subject} props={item} />
        ))}
      </div>
    </>
  );
}
