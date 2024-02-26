"use client";
import CardTemplate from "./CardTemplate";
import {
  studentBar,
  teacherBar,
  loginBar,
} from "../../../lib/actions/CardList";
import { NextRouter } from "next/router";
interface CardProps {}
import { useContext, useEffect, useState } from "react";
import { ISLOGGEDIN } from "@/lib/firebase/helper";
import { IconType } from "react-icons";
import { DocumentData } from "firebase/firestore";

import { useDispatch, useSelector } from "react-redux";
import { setUserDetails, setRole } from "@/redux/userDetails/userDetails";
import { RootState } from "@/redux/store";

export default function Card({ router }: { router: NextRouter }) {
  const [selectedLink, setSelectedLink] = useState<string>("/login");

  const [selectUser, setSelectUser] = useState<
    Array<{
      image: IconType;
      title: string;
      link: string;
    }>
  >(loginBar);

  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);
  
  useEffect(() => {
    if (userState.role == "student"){
      setSelectUser(studentBar)
    }

  }, [dispatch, userState]);


  const handleClick = (link: string) => {
    const checkLogin = ISLOGGEDIN();
    setSelectedLink(link);
  };

  return (
    <>
      <div className="h-full">
        {selectUser == null ||
          selectUser.map((item) => (
            <CardTemplate
              isSelected={selectedLink === item.link}
              onClick={() => handleClick(item.link)}
              key={item.link}
              link={item.link}
              textContent={item.title}
              logo={item.image}
            />
          ))}
      </div>
    </>
  );
}
