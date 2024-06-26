import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAtom } from "jotai";
import localforage from "localforage";

import { ProfileAside } from "widgets/profile";
import { Header } from "features/Header";
import { Category } from "features/Category";
import { supabase } from "shared/api/supabase";
import { loginAtom } from "entities/user/model/atom";

localforage.config({
  driver: localforage.LOCALSTORAGE,
  name: "ritworld",
});

export const HomeScreen = () => {
  const [isLogin, setIsLogin] = useAtom(loginAtom);

  useEffect(() => {
    (async () => {
      if (isLogin) {
        try {
          const {data : {user}, error } = await supabase.auth.getUser();
          if (error) throw error;
          setIsLogin(!!user);
        } catch (error) {
          console.error("사용자 정보 조회 중 에러 발생", error);
          setIsLogin(false);
        }
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center items-center h-full bg-slate-200">
      <div className="flex flex-col items-center w-full h-full">
        {/* <Header /> */}
        <div className="flex justify-between w-[1280px] mt-[10px] mb-[40px] gap-x-[10px]">
          <div>
            {/* <ProfileAside /> */}
            <Category />
          </div>
          <div className="w-full h-screen px-[50px] py-[40px] bg-white rounded-xl overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </div>
      <Toaster
        containerStyle={{
          top: 20,
        }}
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>
  );
};
