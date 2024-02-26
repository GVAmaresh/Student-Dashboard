"use client";

import LeftBar from "@/components/shared/LeftBar";
import TopBar from "@/components/shared/TopBar";
import { Provider } from "react-redux";
import store from "@/redux/store";

import CheckUser from "./CheckUser";
export default function Home({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Provider store={store}>
        <CheckUser>{children}</CheckUser>
      </Provider>
    </>
  );
}
