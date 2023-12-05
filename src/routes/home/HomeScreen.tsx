import TodayFeelingDropdown from "@/components/common/dropdown/TodayFeelingDropdown";
import Header from "@/components/common/header/Header";
import NumberOfVisitors from "@/components/common/numberOfVisitors/NumberOfVisitors";
import ProfileImage from "@/components/common/profileImage/ProfileImage";

const HomeScreen = () => {
  return (
    <div className="flex h-full p-10">
      <aside className="flex flex-col gap-y-2 justify-end pt-8 p-3 w-80 rounded-xl bg-slate-300">
        <NumberOfVisitors />
        <div className="flex  flex-col justify-between h-full p-8 bg-white rounded-lg border-2 border-slate-400">
          <div>
            <TodayFeelingDropdown />
            <ProfileImage />
            <div className="flex h-40 justify-center items-center">
              <p className="text-gray-500">당근곰쥬🥕</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-1">
              <h2 className="font-black text-lg	text-indigo-800">아이바오</h2>
              <div className="flex justify-center items-end w-5 h-5 border border-gray-500 rounded-md">
                <span className="font-black text-violet-400">♀️</span>
              </div>
            </div>
            <span className="text-sm text-violet-400">aibao@everland.com</span>
          </div>
        </div>
      </aside>
      <main>
        <Header />
      </main>
    </div>
  );
};

export default HomeScreen;
