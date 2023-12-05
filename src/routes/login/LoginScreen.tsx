import { useForm, SubmitHandler } from "react-hook-form";

import logo from "../../assets/logo.svg";

interface IFormData {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const { register, handleSubmit } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-96 h-96 rounded-full bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="w-52 mb-8">
        <img src={logo} alt="logo" />
      </h1>
      <input
        type="email"
        placeholder="아이디(이메일)"
        className="w-64 px-5 py-1.5 mb-2.5 border rounded-full border-slate-300 placeholder:text-xs"
        {...register("email")}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="w-64 px-5 py-1.5 border rounded-full border-slate-300 placeholder:text-xs"
        {...register("password")}
      />
      <button
        type="submit"
        className="w-64 py-1.5 mt-5 bg-gray-700 text-white rounded-full "
      >
        로그인
      </button>
      <div className="flex justify-between w-48 mt-5 text-xs text-gray-400">
        <button
          type="button"
          className="relative after:absolute after:content-[''] after:w-px after:h-2.5 after:top-1 after:left-32 after:bg-gray-300"
        >
          아이디/비밀번호 찾기
        </button>
        <button type="button">회원가입</button>
      </div>
    </form>
  );
};

export default LoginScreen;
