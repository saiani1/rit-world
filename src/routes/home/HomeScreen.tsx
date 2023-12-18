import ProfileAside from "@/components/aside/ProfileAside";
import GNB from "@/components/common/gnb/GNB";
import HomeSection from "@/components/home/components/HomeSection";

const HomeScreen = () => {
  return (
    <div className="flex w-full h-full relative pl-10 pr-20 py-10">
      <ProfileAside />
      <HomeSection />
      <GNB />
    </div>
  );
};

export default HomeScreen;
