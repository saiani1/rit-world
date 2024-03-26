// import profileImage from "../../../assets/aibao.jpg";
import { useNavigate } from "react-router-dom";

import BlogItem from "@/components/home/components/BlogItem";

const BlogList = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between pb-[15px] mb-[10px] border-b border-b-[#ddd]">
        <h2 className="text-[22px] text-[#444] font-semibold">블로그 리스트</h2>
        <button
          type="button"
          className="px-[15px] py-[5px] text-[#777] border border-[#ddd] rounded-[5px]"
          onClick={() => navigate("/create")}
        >
          글쓰기
        </button>
      </div>
      <ul className="flex flex-wrap justify-between gap-[15px]">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </ul>
    </div>
  )
}

export default BlogList;