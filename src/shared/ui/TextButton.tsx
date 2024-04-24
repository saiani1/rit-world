export const TextButton = ({
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
  onclick?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <button
      type={type}
      name={name}
      className={`${classname ?? ""} ${classname?.includes("primary") ? "bg-[#049DD9] text-white border-none" : "border border-[#ddd]"} px-[15px] py-[5px] text-[#777] rounded-[3px]`}
      onClick={onclick}
    >
      {content}
    </button>
  )
}