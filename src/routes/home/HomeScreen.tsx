import ProfileAside from "@/components/aside/ProfileAside";
import GNB from "@/components/common/gnb/GNB";
import Header from "@/components/common/header/Header";
import HomeSection from "@/components/home/components/HomeSection";

const HomeScreen = () => {
  return (
    <div className=" w-full h-full">
      <Header />
      <ProfileAside />
      <HomeSection />
      <GNB />
    </div>
  );
};

export default HomeScreen;
