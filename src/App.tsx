import { useState } from "react";
import HomeScreen from "./routes/home/HomeScreen";
import SignInScreen from "./routes/signin/SignInScreen";
import { Outlet } from "react-router-dom";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      {/* {isLogin ? <HomeScreen /> : <SignInScreen />} */}
      <Outlet />
    </div>
  );
};

export default App;
