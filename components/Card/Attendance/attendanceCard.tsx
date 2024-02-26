import AttendanceCardtemplate from "./attendanceCardTemplate";
import {
  LectureAttendanceList,
  SkillAttendanceList,
  SessionAttendanceList,
} from "./AttendanceList";
export default function AttendanceCard({
  selectedType = "Lecture",
}: {
  selectedType: string;
}) {
  const array =
    selectedType === "Lecture"
      ? LectureAttendanceList
      : selectedType === "Session"
      ? SessionAttendanceList
      : SkillAttendanceList;
  return (
    <>
      {array.map((item) => (
        <AttendanceCardtemplate
          key={item.subject}
          subject={item.subject}
          code={item.code}
          absent={item.absent}
          present={item.present}
        />
      ))}
    </>
  );
}
