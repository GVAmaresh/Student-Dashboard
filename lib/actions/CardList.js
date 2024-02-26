import { CiHome } from "react-icons/ci";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { TbSchoolBell } from "react-icons/tb";
import { MdMarkChatUnread } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

export const studentBar = [
  { image: CiHome, title: "Home", link: "/home" },
  { image: FaRegMoneyBillAlt, title: "Fees", link: "/fees" },
  { image: TbSchoolBell, title: "Attendance", link: "/attendance" },
  { image: BsRobot, title: "Chat Bot", link: "/chatbot" },
  { image: MdAssignment, title: "Assignment", link: "/assignment" },
  { image: MdMarkChatUnread, title: "Schedule", link: "/upcoming" },
  { image: FaPeopleGroup, title: "Tutor", link: "/tutor" },
  { image: CgProfile, title: "Profile", link: "/profile" },
];

export const teacherBar = [
  { image: CiHome, title: "Home", link: "/home" },
  { image: TbSchoolBell, title: "Attendance", link: "/attendance" },
  { image: BsRobot, title: "Chat Bot", link: "/chatbot" },
  { image: MdAssignment, title: "Assignment", link: "/assignment" },
  { image: MdMarkChatUnread, title: "Schedule", link: "/upcoming" },
  { image: FaPeopleGroup, title: "Tutor", link: "/tutor" },
  { image: CgProfile, title: "Profile", link: "/profile" },
];

export const loginBar = [
  { image: CgProfile, title: "Profile", link: "/login" },
];
