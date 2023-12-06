import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

const TodayFeelingDropdown = () => {
  const [isClick, setIsClick] = useState(false);
  const [clickedFeeling, setClickedFeeling] = useState("❤️사랑");

  const handleClick = () => {
    setIsClick((prev) => !prev);
  };

  const handleClickFeeling = (e: React.MouseEvent<HTMLUListElement>) => {
    const name = (e.target as HTMLButtonElement).name;
    if (name !== undefined) {
      setClickedFeeling(name);
      setIsClick(false);
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <button
          type="button"
          onClick={handleClick}
          className="flex justify-center items-center gap-x-5 w-full mb-1.5 border border-gray-300 rounded-md"
        >
          <span className="font-bold text-sm text-violet-500">TODAY IS...</span>{" "}
          {clickedFeeling}
        </button>
        <BiSolidDownArrow className="absolute top-1.5 right-3 text-sm text-gray-400 pointer-events-none" />
      </div>
      {isClick && (
        <ul
          className="absolute left-0.5 w-56 border rounded-md text-center bg-white"
          onClick={handleClickFeeling}
        >
          <li className="border-b border-dashed">
            <button className="p-1 w-full h-full" name="❤️사랑">
              ❤️사랑
            </button>
          </li>
          <li className="border-b border-dashed">
            <button className="p-1 w-full h-full" name="😆기쁨">
              😆기쁨
            </button>
          </li>
          <li className="border-b border-dashed">
            <button className="p-1 w-full h-full" name="😫슬픔">
              😫슬픔
            </button>
          </li>
          <li className="border-b border-dashed">
            <button className="p-1 w-full h-full" name="😘행복">
              😘화남
            </button>
          </li>
          <li>
            <button className="p-1 w-full h-full" name="😁신남">
              😁신남
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default TodayFeelingDropdown;
