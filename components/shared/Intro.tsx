"use client";
import "../../app/globals.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails, setRole } from "@/redux/userDetails/userDetails";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";

interface UserDetails {
  userName: string;
}

export default function Intro() {
  const [details, setDetails] = useState<UserDetails>({ userName: "" });
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);

  useEffect(() => {
    console.log("User Details:", userState.details);
    console.log("User Details:", userState.details?.name);
    console.log("User Role:", userState.role);

    setDetails({
      userName: userState.details?.name || "",
    });
  }, [userState]);

  return (
    <div className="Intro">
      <div className="IntroHeading">
        <div className="text-4xl font-extrabold">
          Welcome back{" "}
          <span className="text-8xl text-red-700">{details.userName}</span>
        </div>
        <div className="text-lg">
          Always be updated with the student portal
        </div>
      </div>
      <Image
        src="/images/student.png"
        alt="Description of the image"
        width={300}
        className="-mt-28 ml-auto mr-16"
        height={20}
      />
    </div>
  );
}
