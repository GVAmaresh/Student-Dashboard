"use client";
import Card from "../Card/SideBar/Card";

import Image from "next/image";
import { NextRouter } from "next/router";
import { useRouter } from "next/navigation";
import React from "react";
// import { useRouter } from "next/router";
export default function LeftBar() {
  const router = useRouter();
  // React.useEffect(()=>{

  // }, [])
  return (
    <>
      <div className="Leftbar h-screen">
        <Image
          src="/images/logo.png"
          alt="Description of the image"
          width={200}
          className="-mt-28"
          height={20}
        />
        <div className="LeftNav -mt-12">
          <Card router={router} />
        </div>
      </div>
    </>
  );
}
