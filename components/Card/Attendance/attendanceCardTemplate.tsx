export default function AttendanceCardtemplate({
  subject,
  code,
  absent,
  present,
}: {
  subject: string;
  code: string;
  absent: number;
  present: number;
}) {
  function round(n: number) {
    return n < 10 ? `0${n}` : `${n}`;
  }
  let percentage = Math.round((present / (present + absent)) * 100);
  let absentNo = round(absent);
  let presentNo = round(present);
  let percentNo = round(percentage);
  return (
    <>
      <div className=" w-10/12h-28 m-10 ml-20 flex flex-row justify-evenly">
        <div className="w-2/6">
          <div className=" text-2xl font-semibold">{subject}</div>
          <div className="">{code}</div>
        </div>
        <div className="">
          <div className="text-red-600 text-2xl font-bold">{absentNo}</div>
          <div className="">Absent</div>
        </div>
        <div className="">
          <div className="text-gray-50 text-2xl font-bold">{presentNo}</div>
          <div className="">Present</div>
        </div>
        <div className="">
          <div className="text-gray-50">
            <span className="text-2xl font-bold">{percentNo} </span>%
          </div>
          <div className="">Percentage</div>
        </div>
      </div>
    </>
  );
}
