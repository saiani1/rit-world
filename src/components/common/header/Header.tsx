import { useNavigate } from "react-router-dom";

import logo from "@/assets/logo.png";
import { logOutAPI } from "@/services/user";
import { useAtom } from "jotai";
import { loginAtom } from "@/store/user";
import toast from "react-hot-toast";

const GNB_ARR = [
  {
    id: 1,
    title: "LOG OUT"
  },
  {
    id: 2,
    title: "MY PAGE"
  },
  {
    id: 3,
    title: "SETTING"
  },
]

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useAtom(loginAtom);
  const handleClick = () => navigate("/list");

  const handleClickHeader = (e: React.MouseEvent<HTMLUListElement>) => {
    const name = (e.target as HTMLButtonElement).name;
    if (name === "LOG OUT") {
      logOutAPI().then(() => {
        toast.success("로그아웃 되었습니다.")
        setIsLogin(false);
      });
    } else if (name === "LOG IN") navigate("/signin");
  }

  return (
    <header className="flex justify-center items-center w-full min-h-[80px] bg-white">
      <div className="flex justify-between items-center w-[1280px] h-full">
        <button type="button" onClick={handleClick}>
          <h1 className="relative flex items-baseline gap-x-[8px] font-bold text-purple-700">
            <img src={logo} alt="로고" />
            <span className="absolute bottom-[-6px] right-[-68px] text-[19px] text-[#888] font-medium">Admin</span>
          </h1>
        </button>
        <nav>
          <ul className="flex gap-x-[30px]" onClick={handleClickHeader}>
            {
              GNB_ARR.map((gnb) => (
              <li key={gnb.id}>
                <button
                  type="button"
                  className="text-[17px] text-[#777] font-semibold"
                  name={gnb.id === 1 && !isLogin ? "LOG IN" : gnb.title}
                >
                  {gnb.id === 1 && !isLogin ? "LOG IN" : gnb.title}
                </button>
              </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
