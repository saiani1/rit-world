export const Button = ({
  type,
  name,
  content,
  classname,
  onclick
} : {
  type: "submit" | "reset" | "button" | undefined,
  name?: string,
  content: string,
  classname?: string,
  onclick: React.MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <button
      type={type}
      name={name}
      className={`${classname ?? ""} px-[15px] py-[5px] text-[#777] border border-[#ddd] rounded-[5px]`}
      onClick={onclick}
    >
      {content}
    </button>
  )
}