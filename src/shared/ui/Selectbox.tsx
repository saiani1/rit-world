import { optionType } from "shared/model/inputType";

export const SelectBox = ({
  options,
  register,
  error,
 } : {
  options: optionType[],
  register: any,
  error?: boolean,
 }
) => {
  return (
    <div className={`flex px-[10px] py-[3px] ${error ? "border-[2px] border-[#F04343]" : "border border-slate-300"} rounded-[5px]`}>
      <select
        className="w-fit text-[13px] active:outline-none focus:outline-none"
        {...register}
      >
        {options.map((option: optionType, i: number) => (
          <option value={option.value} key={`options_${i}`}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}