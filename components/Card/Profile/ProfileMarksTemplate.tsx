"use client";
import React, { useState } from "react";

interface MarksSubject {
  name: string;
  cia1: number;
  cia2: number;
  cia3: number;
  assignment: number;
  quiz: number;
  semMarks: number;
}

interface ProfileMarksTemplateProps {
  MarksData: MarksSubject[];
  sem: string;
}

export default function ProfileMarksTemplate({
  MarksData,
  sem,
}: ProfileMarksTemplateProps) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={`ml-16 w-10/12 bg-slate-900 mt-4 ${
          open ? "max-h-96" : "max-h-12 delay-1000"
        }`}
      >
        <div
          className="cursor-pointer font-bold text-2xl pt-2"
          onClick={handleClick}
        >
          {sem} {open ? "▲" : "▼"}
        </div>
        <div
          className={`mt-2 transition-max-h duration-1000 ease-in-out scrollbar-thin scrollbar-thumb-gray-800 overflow-x-auto scroll-smooth  ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="mt-10 rounded shadow">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="border px-2 py-2">Subject</th>
                  <th className="border px-2 py-2">CIA 1</th>
                  <th className="border px-2 py-2">CIA 2</th>
                  <th className="border px-2 py-2">CIA 3</th>
                  <th className="border px-2 py-2">Assignment</th>
                  <th className="border px-2 py-2">Quiz</th>
                  <th className="border px-2 py-2">Sem Marks</th>
                </tr>
              </thead>
              <tbody>
                {MarksData.map((subject: MarksSubject, index: number) => (
                  <tr key={index}>
                    <td className="border px-2 py-2">{subject.name}</td>
                    <td className="border px-2 py-2">{subject.cia1}</td>
                    <td className="border px-2 py-2">{subject.cia2}</td>
                    <td className="border px-2 py-2">{subject.cia3}</td>
                    <td className="border px-2 py-2">{subject.assignment}</td>
                    <td className="border px-2 py-2">{subject.quiz}</td>
                    <td className="border px-2 py-2">{subject.semMarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
