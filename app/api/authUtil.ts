
import { useDispatch } from 'react-redux';
import { setUserDetails, setRole } from '@/redux/userDetails/userDetails';
import { useEffect } from 'react';
import { redirect } from 'next/navigation'
import { getUserFromCookie } from '@/lib/firebase/userCookie';
import { ISLOGGEDIN } from '@/lib/firebase/helper';

export const useCheckUserLogin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkUserLogin() {
      const uid = getUserFromCookie();
      console.log("Running 1 2 4");
      if (!uid) {
        return redirect('/login');
      }
      const data2 = await ISLOGGEDIN(uid);
      console.log(data2);
      if (!data2) {
        return redirect('/login');
      }
      dispatch(setUserDetails(data2));
      dispatch(setRole(data2.role));
    }
    checkUserLogin();
  }, []);
};
