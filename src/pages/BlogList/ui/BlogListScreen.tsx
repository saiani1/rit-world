// import profileImage from "../../../assets/aibao.jpg";
import { useNavigate } from "react-router-dom";

import { BlogItem, ContentTitle } from "shared/index";
import { TextButton } from "shared/ui/TextButton";

export const BlogListScreen = () => {
  const navigate = useNavigate();

  const handleClickCreateBlogBtn = () => navigate("/create");

  return (
    <div>
      <div className="flex justify-between pb-[15px] mb-[10px] border-b border-b-[#ddd]">
        <ContentTitle title="전체" />
        <TextButton
          type="button"
          content="글쓰기"
          onclick={handleClickCreateBlogBtn}
        />
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
