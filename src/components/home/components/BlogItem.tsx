const BlogItem = () => {
  return (
    <li className="w-[280px] p-[20px] bg-slate-200/50 rounded-[5px]">
      <button
        type="button"
        className="flex flex-col items-center gap-y-[20px]"
      >
        <div className="w-full h-[180px] bg-slate-300/50 overflow-hidden rounded-[5px]">
          {/* <img src={profileImage} /> */}
        </div>
        <div className="flex flex-col text-start gap-y-[10px]">
          <h3 className="text-[18px] font-semibold text-[#555]">사랑이가 제일 좋아하는 대나무 TOP 10</h3>
          <p className="text-[15px] text-[#666]">이뻐이뻐 아이바오가 좋아하는 대나무 순위에 대해 알아보자. <br /> 강바오의 자세한 해설도 수록!</p>
        </div>
      </button>
    </li>
  )
}

export default BlogItem;