import CategoryTag from "./CategoryTag";

const UpdateCategory = () => {
  return (
    <div className="flex-1">
      <h3 className="pb-1.5 font-semibold text-purple-600 border-b border-gray-300">
        Updated Category
      </h3>
      <ul className="flex flex-col gap-y-0.5 mt-2">
        <li>
          <button type="button" className="flex items-center gap-x-1.5">
            <CategoryTag name="맛집기행" color="bg-purple-400" />
            <span className="text-sm">
              한국에서 가장 맛있는 당근의 원산지는?
            </span>
          </button>
        </li>
        <li>
          <button type="button" className="flex items-center gap-x-1.5">
            <CategoryTag name="극한체험" color="bg-green-400" />
            <span className="text-sm">
              춘삼월에 꽃핀 대나무를 찾아서 (feat.강바오)
            </span>
          </button>
        </li>
        <li>
          <button type="button" className="flex items-center gap-x-1.5">
            <CategoryTag name="디스패치" color="bg-pink-400" />
            <span className="text-sm">뚠빵이가 대나무 서리를 하는 이유</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UpdateCategory;
