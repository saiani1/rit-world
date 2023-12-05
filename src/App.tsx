import { useState } from "react";
import LoginScreen from "./routes/login/LoginScreen";
import HomeScreen from "./routes/home/HomeScreen";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      {isLogin ? <HomeScreen /> : <LoginScreen />}
    </div>
  );
};

export default App;
