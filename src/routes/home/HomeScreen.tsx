import ProfileAside from "@/components/aside/ProfileAside";
import HomeSection from "@/components/home/components/HomeSection";

const HomeScreen = () => {
  return (
    <div className="flex w-full h-full p-10">
      <ProfileAside />
      <HomeSection />
    </div>
  );
};

export default HomeScreen;
