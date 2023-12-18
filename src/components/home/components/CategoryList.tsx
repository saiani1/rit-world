const CategoryList = () => {
  return (
    <div className="flex-1 mt-7">
      <ul className="flex flex-wrap">
        <li className="basis-1/2 py-1 border-dashed border-b border-t border-gray-300">
          <button type="button" className="flex items-center gap-x-2">
            <strong className="text-sm text-gray-700">맛집기행</strong>
            <span className="text-sm font-semibold text-purple-500">0/10</span>
          </button>
        </li>
        <li className="basis-1/2 py-1 border-dashed border-b border-t border-gray-300">
          <button type="button" className="flex items-center gap-x-2">
            <strong className="text-sm text-gray-700">극한체험</strong>
            <span className="text-sm font-semibold text-purple-500">0/10</span>
          </button>
        </li>
        <li className="basis-1/2 py-1 border-dashed border-b border-gray-300">
          <button type="button" className="flex items-center gap-x-2">
            <strong className="text-sm text-gray-700">디스패치</strong>
            <span className="text-sm font-semibold text-purple-500">0/10</span>
          </button>
        </li>
        <li className="basis-1/2 py-1 border-dashed border-b border-gray-300">
          <button type="button" className="flex items-center gap-x-2">
            <strong className="text-sm text-gray-700">다이어리</strong>
            <span className="text-sm font-semibold text-purple-500">0/10</span>
          </button>
        </li>
        <li className="basis-1/2 py-1 border-dashed border-b border-gray-300">
          <button type="button" className="flex items-center gap-x-2">
            <strong className="text-sm text-gray-700">방명록</strong>
            <span className="text-sm font-semibold text-purple-500">0/10</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CategoryList;
