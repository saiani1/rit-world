import { useForm, SubmitHandler } from "react-hook-form";

import logo from "../../assets/logo.svg";

interface IFormData {
  email: string;
  password: string;
  confirm_password: string;
  nickname: string;
}

const SignUpScreen = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-around w-[400px] h-[550px] px-[50px] py-[60px] bg-white rounded-3xl"
    >
      <div className="flex flex-col justify-center items-center my-[25px]">
        <h1>
          <img src={logo} alt="logo" className="w-[230px]" />
        </h1>
      </div>
      <div className="flex flex-col gap-y-3.5">
        <div className="flex gap-x-3">
          <input
            type="email"
            placeholder="이메일"
            className="w-full px-5 py-1.5 border rounded-full border-slate-300 placeholder:text-xs"
            {...register("email", { required: true })}
          />
          <button
            type="button"
            className="w-28 py-1.5 bg-gray-500 text-white text-[13px] rounded-full "
          >
            중복확인
          </button>
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full px-5 py-1.5 border rounded-full border-slate-300 placeholder:text-xs"
            {...register("password", { required: true })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="w-full px-5 py-1.5 border rounded-full border-slate-300 placeholder:text-xs"
            {...register("confirm_password", {
              required: true,
              validate: (val: string) => {
                console.log("실행된다요!");
                if (watch("password") !== val) {
                  return "비밀번호가 일치하지 않습니다.";
                }
              },
            })}
          />
          {errors.confirm_password && (
            <span className="ml-[10px] text-[12px] text-red-600">
              {errors.confirm_password.message}
            </span>
          )}
        </div>
        <div className="flex gap-x-3">
          <input
            type="text"
            placeholder="닉네임"
            className="w-full px-5 py-1.5 border rounded-full border-slate-300 placeholder:text-xs"
            {...register("nickname", { required: true })}
          />
          <button
            type="button"
            className="w-28 py-1.5 bg-gray-500 text-white text-[13px] rounded-full "
          >
            중복확인
          </button>
        </div>
      </div>
      <div className="flex gap-x-4">
        <button
          type="reset"
          className="w-64 py-1.5 mt-5 text-gray-700 bg-white rounded-full border border-slate-300"
        >
          취소
        </button>
        <button
          type="submit"
          className="w-64 py-1.5 mt-5 bg-gray-700 text-white rounded-full "
        >
          제출
        </button>
      </div>
    </form>
  );
};

export default SignUpScreen;
