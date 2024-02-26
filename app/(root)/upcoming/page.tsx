import ScheduleCard from "@/components/Card/Schedule/ScheduleCard";

export default function Schedule() {
  return (
    <>
      <div className="ml-4 md:ml-20">
        <div className="text-3xl font-bold border-b-2 pb-4 w-full md:w-3/5 sm:w- mb-8">
          Today
        </div>
        <ScheduleCard />
      </div>
    </>
  );
}
