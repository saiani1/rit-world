/* eslint-disable @typescript-eslint/no-explicit-any */
interface IProps {
  type: string;
  name: string;
  placeholder: string;
  register: any;
  watch?: any;
  page?: string;
}

const Input = ({ type, name, placeholder, register, watch, page }: IProps) => {
  const inputRegister = () => {
    switch (name) {
      case "userId":
        return {
          ...register("userId", {
            required: true,
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "이메일 형식에 맞지 않습니다.",
            },
          }),
        };
      case "password":
        return { ...register("password", { required: true }) };
      case "confirm_password":
        return {
          ...register("confirm_password", {
            required: true,
            validate: (val: string) => {
              if (watch("password") !== val) {
                return "비밀번호가 일치하지 않습니다.";
              }
            },
          }),
        };
      case "nickname":
        return { ...register("nickname", { required: true }) };
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${
        page === "signin" ? "w-64" : "w-full"
      } px-5 py-1.5 border rounded-full border-slate-300 placeholder:text-xs focus:outline-slate-400`}
      {...inputRegister()}
    />
  );
};

export default Input;
