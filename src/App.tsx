import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAtom } from "jotai";
import localforage from "localforage";
import Cookies from "js-cookie";

import { loginAtom } from "@/store/user";
import Header from "./components/common/header/Header";
import ProfileAside from "./components/aside/ProfileAside";
import GNB from "./components/common/gnb/GNB";

localforage.config({
  driver: localforage.LOCALSTORAGE,
  name: "ritworld",
});



const App = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useAtom(loginAtom);
  const loginCookie = Cookies.get("login");

  // useEffect(() => {
  //   console.log("useEffect발동")
  //   if (loginCookie) {
  //     setIsLogin(true);
  //     navigate("/list", { replace: true });
  //   } else {
  //     setIsLogin(false);
  //     navigate("/signin", { replace: true });
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loginCookie]);

  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div className="flex flex-col items-center w-full h-full">
        <Header />
        <div className="flex justify-between w-[1280px] mt-[10px] mb-[40px] gap-x-[10px]">
          <div>
            <ProfileAside />
            <GNB />
          </div>
          <div className="w-full h-screen px-[50px] py-[40px] bg-white rounded-xl overflow-scroll">
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

export default App;
