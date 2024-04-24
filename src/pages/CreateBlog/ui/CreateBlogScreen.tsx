import { useForm } from "react-hook-form";
import { ContentTitle, RegisterInput } from "shared/index";
import { SelectBox } from "shared/ui/SelectBox";
import { CATEGORY_OPTIONS_ARR } from "../lib/constants";
import { TextButton } from "shared/ui/TextButton";
import toast from "react-hot-toast";
import { CustomEditor } from "shared/ui/CustomEditor";
import { supabase } from "shared/api/supabase";

type formData = {
  category: string,
  subject: string,
  content: string,
}

export const CreateBlogScreen = () => {
  const {
    getValues,
    register,
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<formData>();



  const onSubmit = async () => {
    // if (getValues("content")?.trim().length === 0 || getValues("content") === undefined) toast.error("내용을 입력해주세요.");
    // else {
    //   const { data, error } = await supabase
    //     user_id: ,
    //   .from('post')
    //   .insert([{
    //     subject: getValues("subject"),
    //     content: getValues("content"),
    //     category_id: ,
    //   }]);

    //   if (error) {
    //     console.error('Error inserting data:', error);
    //   } else {
    //     console.log('Data inserted successfully:', data);
    //   }
    // }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <div className="flex justify-between pb-[15px] mb-[20px] border-b border-b-[#ddd]">
        <ContentTitle title="블로그 쓰기" />
      </div> */}
      <div className="flex gap-x-[10px] mb-[10px]">
        <SelectBox
          options={CATEGORY_OPTIONS_ARR}
          error={!!errors.category}
          register={register("category", {
            required: true,
            setValueAs: (v:string) => v.trim(),
            onBlur: (e:any) => e.currentTarget.value = e.currentTarget.value.trim()
          })}
        />
        <RegisterInput
          type="text"
          placeholder="제목을 입력해주세요."
          error={!!errors.subject}
          register={register("subject", {
            required: true,
            setValueAs: (v:string) => v.trim(),
            onBlur: (e:any) => e.currentTarget.value = e.currentTarget.value.trim()
          })}
        />
      </div>
      <CustomEditor control={control} />
      <div className="flex justify-center items-center gap-x-[10px] mt-[20px]">
        <TextButton
          type="reset"
          content="취소"
          classname="px-[25px] py-[8px]"
        />
        <TextButton
          type="submit"
          content="발행"
          classname="primary px-[25px] py-[8px]"
        />
      </div>
    </form>
  )
}