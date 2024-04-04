import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useAtom, useAtomValue } from "jotai";

import logo from "@/assets/logo.png";
import Input from "@/components/common/input/Input";
import ErrorMsg from "@/components/common/errorMsg/ErrorMsg";
import { loginAtom } from "@/store/user";
import { loginAPI } from "@/services/user";

interface IFormData {
  userId: string;
  password: string;
}

const SignInScreen = () => {
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
          <Input
            type="email"
            name="userId"
            placeholder="이메일"
            page="signin"
            register={register}
          />
          {errors.userId && <ErrorMsg message={errors.userId.message} />}
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            page="signin"
            register={register}
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

export default SignInScreen;
