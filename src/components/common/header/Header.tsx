import { useNavigate } from "react-router-dom";

import logo from "@/assets/logo.png";

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
  const handleClick = () => {
    navigate("/list");
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
          <ul className="flex gap-x-[30px]">
            {
              GNB_ARR.map((gnb) => (
              <li key={gnb.id}>
                <button type="button" className="text-[17px] text-[#777] font-semibold">
                  {gnb.title}
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
