import { useForm, useController } from "react-hook-form";
import { Editor } from '@tinymce/tinymce-react';
import { ContentTitle, RegisterInput } from "shared/index";
import { SelectBox } from "shared/ui/Selectbox";
import { CATEGORY_OPTIONS_ARR } from "../lib/constants";

type formData = {
  subject: string,
  content: string,
}

export const CreateBlogScreen = () => {
  const {
    getValues,
    setValue,
    register,
    control,
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
    console.log(getValues());
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between pb-[15px] mb-[20px] border-b border-b-[#ddd]">
        <ContentTitle title="블로그 쓰기" />
      </div>
      <div className="flex gap-x-[10px] mb-[10px]">
        <SelectBox
          options={CATEGORY_OPTIONS_ARR}
        />
        <RegisterInput
          type="text"
          placeholder="제목을 입력해주세요."
          register={register("subject")}
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
        <button
          type="reset"
          className="px-[25px] py-[7px] text-[#777] font-medium border border-[#ddd] rounded-[3px]"
        >
          취소
        </button>
        <button
          type="submit"
          className="px-[25px] py-[7px] bg-[#049DD9] text-white font-medium rounded-[3px]"
        >
          발행
        </button>
      </div>
    </form>
  )
}