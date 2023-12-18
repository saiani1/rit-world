import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomeScreen from "./routes/home/HomeScreen";
import SignInScreen from "./routes/signin/SignInScreen";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      {/* {isLogin ? <HomeScreen /> : <SignInScreen />} */}
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
