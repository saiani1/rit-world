import { IoDocumentTextOutline } from "react-icons/io5";

const GNB = () => {
  return (
    <nav className="mt-[10px] py-[25px] px-[30px] w-[280px] h-[450px] bg-white rounded-xl">
      <h2 className="mb-[30px] text-[#888] font-medium text-[11px]">Category</h2>
      <ul>
        <li>
          <button type="button" className="flex items-center gap-x-[10px]">
            <IoDocumentTextOutline stroke="#777" />
            <span className="mt-[-4px] text-[#777] text-[17px] font-semibold">Language</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default GNB;
