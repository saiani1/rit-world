import { useForm, useController } from "react-hook-form";
import { Editor } from '@tinymce/tinymce-react';
import { ContentTitle, RegisterInput } from "shared/index";
import { SelectBox } from "shared/ui/Selectbox";
import { CATEGORY_OPTIONS_ARR } from "../lib/constants";
import { Button } from "shared/ui/Button";
import toast from "react-hot-toast";

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

  const {
    field: {
      onChange,
      ...field
    },
  } = useController({
    name: "content",
    control,
  })

  const onSubmit = () => {
    if (getValues("content")?.trim().length === 0 || getValues("content") === undefined) toast.error("내용을 입력해주세요.");
    else console.log(getValues());
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
      <Editor
        {...field}
        tinymceScriptSrc={'/tinymce/tinymce.min.js'}
        onEditorChange={onChange}
        init={{
          height: 500,
          menubar: false,
          statusbar: false,
          promotion: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
            'anchor', 'searchreplace', 'visualblocks', 'code',
            'media', 'table'
          ],
          toolbar: ' blocks | image table ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <div className="flex justify-center items-center gap-x-[10px] mt-[20px]">
        <Button
          type="reset"
          content="취소"
          classname="px-[25px] py-[8px]"
        />
        <Button
          type="submit"
          content="발행"
          classname="primary px-[25px] py-[8px]"
        />
      </div>
    </form>
  )
}