import { useForm } from "react-hook-form";

type formData = {
  subject: string,
  content: string,
}

const CreateBlog = () => {
  const {
    getValues,
    setValue,
    register,
    control,
    handleSubmit,
  } = useForm<formData>();

  return (
    <>
      <div className="flex justify-between pb-[15px] mb-[10px] border-b border-b-[#ddd]">
        {/* <h2 className="text-[22px] text-[#444] font-semibold">블로그 쓰기</h2> */}
      </div>
      <input
        type="text"
        className="flex w-full border px-[15px] py-[5px] rounded-[5px]"
        {...register("content")}
      />
    </>
  )
}

export default CreateBlog;