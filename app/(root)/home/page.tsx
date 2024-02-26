"use client";

import Intro from "@/components/shared/Intro";
import "../../globals.css";
import Upcoming from "@/components/shared/Upcoming";
import UpdatedNews from "@/components/shared/UpdatedNews";
import React from "react";

export default function Home() {
  // useCheckUserLogin();
  return (
    <>
      <div className="HomeProfile">
        <Intro />
        <div className="flex flex-row">
          <Upcoming />
          <UpdatedNews />
        </div>
      </div>
    </>
  );
}
