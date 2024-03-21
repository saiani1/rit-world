import profileImage from "../../../assets/aibao.jpg";

const BlogList = () => {
  return (
    <ul>
      <li>
        <button type="button" className="flex items-center gap-x-[20px]">
          <div className="w-[110px] h-[110px] overflow-hidden rounded-lg">
            <img src={profileImage} />
          </div>
          <div className="flex flex-col text-start gap-y-[10px]">
            <h3 className="text-[22px] font-semibold text-[#444]">사랑이가 제일 좋아하는 대나무 TOP 10</h3>
            <p className="text-[17px] text-[#777]">이뻐이뻐 아이바오가 좋아하는 대나무 순위에 대해 알아보자. <br /> 강바오의 자세한 해설도 수록!</p>
          </div>
        </button>
      </li>
    </ul>
  )
}

export default BlogList;