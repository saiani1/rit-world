import { optionType } from "shared/model/inputType";

export const SelectBox = ({
  options
 } : {
  options: optionType[];
 }
) => {
  return (
    <div className="flex w-[20%] px-[10px] py-[3px] border border-slate-300 rounded-[5px]">
      <select className="w-full text-[13px] active:outline-none focus:outline-none">
        {options.map((option: optionType, i: number) => (
          <option value={option.value} key={`options_${i}`}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}