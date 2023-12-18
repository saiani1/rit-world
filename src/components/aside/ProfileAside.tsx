import { BsGenderFemale } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";

import TodayFeelingDropdown from "@/components/common/dropdown/TodayFeelingDropdown";
import NumberOfVisitors from "@/components/common/numberOfVisitors/NumberOfVisitors";
import ProfileImage from "@/components/common/profileImage/ProfileImage";
const ProfileAside = () => {
  return (
    <aside className="flex flex-col gap-y-2 justify-end pt-8 p-3 w-96 rounded-xl bg-slate-300">
      <NumberOfVisitors />
      <div className="flex flex-col justify-between h-full px-8 py-11 bg-white rounded-lg border-2 border-slate-400">
        <div>
          <TodayFeelingDropdown />
          <ProfileImage />
          <div className="flex h-48 justify-center items-center">
            <p className="text-gray-500">당근곰쥬🥕</p>
          </div>
          <div className="pb-1 w-full border-b border-gray-300">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-bold text-gray-600"
            >
              <BiSolidRightArrow className="text-xs text-purple-500" />
              EDIT
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-1">
            <h2 className="font-black text-lg	text-indigo-800">아이바오</h2>
            <div className="flex justify-center items-center w-5 h-5 border border-gray-500 rounded-md">
              <BsGenderFemale className="text-sm text-purple-700" />
            </div>
          </div>
          <span className="text-sm text-violet-400">aibao@everland.com</span>
        </div>
      </div>
    </aside>
  );
};

export default ProfileAside;
