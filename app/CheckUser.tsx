import LeftBar from "@/components/shared/LeftBar";
import TopBar from "@/components/shared/TopBar";
import { useCheckUserLogin } from "./api/authUtil";
import { useDispatch } from "react-redux";
import { setUserDetails, setRole } from "@/redux/userDetails/userDetails";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { getUserFromCookie } from "@/lib/firebase/userCookie";
import { ISLOGGEDIN } from "@/lib/firebase/helper";

function CheckUser({ children }: { children: React.ReactNode }) {
  //   useCheckUserLogin();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function checkUserLogin() {
      setLoading(true);
      const uid = getUserFromCookie();

      if (!uid) {
        return redirect("/login");
      }
      const data2 = await ISLOGGEDIN(uid);
      console.log(data2);
      if (!data2) {
        return redirect("/login");
      }
      dispatch(setUserDetails(data2));
      dispatch(setRole(data2.role));
    }
    checkUserLogin();
    setLoading(false);
  }, []);
  return (
    <>
      <TopBar />
      <div className="flex flex-row flex-1">
        <LeftBar />

        {loading ? (
          <div className="">Loading</div> 
        ) : (
          <div className="Rightbar flex-1 h-screen">{children}</div>
        )}
      </div>
    </>
  );
}
export default CheckUser;
