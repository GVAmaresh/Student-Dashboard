"use client";
import AttendanceCard from "@/components/Card/Attendance/attendanceCard";
import { useState } from "react";

export default function Attendance() {
  const [selectedType, setSelectedType] = useState<string>("Lecture");

  const handleClick = (value: string) => {
    setSelectedType(value);
  };

  return (
    <>
      <div className="pl-10 text-2xl ml-40 mb-10 font-bold">Attendance</div>
      <div className="flex flex-row justify-evenly">
        <div
          className={`Attendance-Type ${
            selectedType === "Lecture" ? "bg-slate-900" : ""
          }`}
          onClick={() => handleClick("Lecture")}
        >
          Lecture
        </div>
        <div
          className={`Attendance-Type ${
            selectedType === "Session" ? "bg-slate-900" : ""
          }`}
          onClick={() => handleClick("Session")}
        >
          Alumini Talk
        </div>
        <div
          className={`Attendance-Type ${
            selectedType === "Skill" ? "bg-slate-900" : ""
          }`}
          onClick={() => handleClick("Skill")}
        >
          Skill Development
        </div>
      </div>
      <div className="">
        {/* Pass the selected type to the AttendanceCard component */}
        <AttendanceCard selectedType={selectedType} />
      </div>
    </>
  );
}
