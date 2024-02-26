import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAtom } from "jotai";
import localforage from "localforage";
import Cookies from "js-cookie";

import SignInScreen from "@/routes/signin/SignInScreen";
import { loginAtom } from "@/store/user";

localforage.config({
  driver: localforage.LOCALSTORAGE,
  name: "ritworld",
});

const App = () => {
  const navigate = useNavigate();
  // const [isLogin, setIsLogin] = useAtom(loginAtom);
  // const loginCookie = Cookies.get("login");

  useEffect(() => {
    // if (loginCookie) {
    //   setIsLogin(true);
      navigate("/home", { replace: true });
    // } else setIsLogin(false);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      {/* {isLogin ? <Outlet /> : <SignInScreen />} */}
      <Outlet />
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
