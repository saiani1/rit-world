import { InputType } from "../model/inputType";

export const RegisterInput = ({
  type,
  placeholder,
  register,
  page,
  error,
}: InputType) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${
        page === "signin" || page === "signup" ? "w-64 rounded-full" : "w-full rounded-[5px]"
      } px-5 py-1.5 ${error ? "border-[2px] border-[#F04343]" : "border border-slate-300"} placeholder:text-xs focus:outline-slate-400`}
      {...register}
    />
  );
};