"use client";
import React, { useContext } from "react";
import { ProfileList, MarksData } from "./Profile";
import ProfileMarksTemplate from "./ProfileMarksTemplate";
// import { SidebarContext } from "@/app/Create";
export default function ProfileCard() {
  // const { userData, setUserData } = useContext(SidebarContext);
  const profile = ProfileList[0];
  const columnData = Object.entries(profile).slice(2);
  const halfLength = Math.ceil((columnData.length + 1) / 2);

  return (
    <>
      <div className="h-screen mb-20 pb-20 ">
        <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start">
          <div
            className="bg-white h-96 w-96 md:ml-20 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url('./images/teacher-1.png')`,
              backgroundSize: "150%",
              backgroundPosition: "center top",
            }}
          ></div>
          <div className="h-96 w-full md:w-2/4 md:pl-8">
            <div className="text-center md:text-left font-extrabold text-5xl pt-10">
              {profile.name}
            </div>
            <div className="text-center md:text-left pt-2 text-slate-700 pb-6">
              Email: {profile.email}
            </div>
            <div className="flex flex-col md:flex-row mt-3">
              {[0, 1].map((index) => (
                <div key={index} className={`w-full md:w-1/2 pb-3`}>
                  {columnData
                    .slice(index * halfLength, (index + 1) * halfLength)
                    .map(([key, value]) => (
                      <div key={key}>
                        {Array.isArray(value) ? (
                          value.map((phone, phoneIndex) => (
                            <div className="pb-3" key={phoneIndex}>
                              {key}:
                              <span className="ml-3 text-xl font-bold">
                                {phone}
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="pb-3">
                            {key}:
                            <span className="ml-3 text-xl font-bold">
                              {value}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-20 w-full text-center">
          <div className="mb-4 md:mb-0 w-3/4 md:w-1/2 pl-4 md:pl-8 justify-center items-center">
            <div className="text-xl font-bold">Last Grades</div>
            <div className="">
              <ProfileMarksTemplate MarksData={MarksData} sem="Sem - 1" />
              <ProfileMarksTemplate MarksData={MarksData} sem="Sem - 2" />
              <ProfileMarksTemplate MarksData={MarksData} sem="Sem - 3" />
              <ProfileMarksTemplate MarksData={MarksData} sem="Sem - 4" />
            </div>
          </div>
          <div className="mb-4 md:mb-0 w-3/4 md:w-1/2 pl-4 md:pl-8 justify-center items-center">
            <div className="text-xl font-bold">Backlogs</div>
            <div className="ml-16 bg-slate-900 w-5/6 h-12 mt-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
