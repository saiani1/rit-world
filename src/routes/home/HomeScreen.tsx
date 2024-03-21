import ProfileAside from "@/components/aside/ProfileAside";
import GNB from "@/components/common/gnb/GNB";
import Header from "@/components/common/header/Header";
import { Outlet } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Header />
      <div className="flex justify-between w-[1280px] mt-[10px] gap-x-[10px]">
        <div>
          {/* <ProfileAside /> */}
          <GNB />
        </div>
        <div className="w-full bg-white rounded-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
