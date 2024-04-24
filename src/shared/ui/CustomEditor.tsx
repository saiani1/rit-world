import { Editor } from '@tinymce/tinymce-react';
import { useController } from 'react-hook-form';

export const CustomEditor = ({
  control
}:{
  control: any
}) => {
  const {
    field: {
      onChange,
      ...field
    },
  } = useController({
    name: "content",
    control,
  })

  return (
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
  )
}