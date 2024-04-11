import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useAtom } from "jotai";

import logo from "shared/assets/logo.png"
import { RegisterInput, ErrorMsg } from "shared/index";
import { loginAtom } from "entities/user/model/atom";
import { loginAPI } from "entities/user/api/api";

interface IFormData {
  userId: string;
  password: string;
}

export const SignInScreen = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useAtom(loginAtom);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormData>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IFormData> = async () => {
    if (!errors.userId && getValues().password.length !== 0) {
      const data = getValues();
      try {
        await loginAPI(data);
        setIsLogin(true);
        navigate("/list", { replace: true });
        toast.success("로그인 되었습니다.")
      } catch (err) {
        console.error(err);
      }
    }
  }

  useEffect(() => {
    if (isLogin) navigate("/list");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-200">
      <form
        className="flex flex-col justify-center items-center w-96 h-96 rounded-full bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="flex justify-center w-52 mb-8">
          <img src={logo} alt="logo" />
        </h1>
        <motion.div
          layout
          transition={{ duration: 0.2 }}
          className="flex flex-col gap-y-2"
        >
          <RegisterInput
            type="email"
            placeholder="이메일"
            page="signin"
            register={register("userId", {
              required: true,
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "이메일 형식에 맞지 않습니다.",
              },
              setValueAs: (v:string) => v.trim(),
              onBlur: (e:any) => e.currentTarget.value = e.currentTarget.value.trim()
            })}
          />
          {errors.userId && <ErrorMsg message={errors.userId.message} />}
          <RegisterInput
            type="password"
            placeholder="비밀번호"
            page="signin"
            register={register("password", {required: true })}
          />
        </motion.div>
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
    </div>
  );
};