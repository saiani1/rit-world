import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import styles from "./signupScreen.module.css";
import logo from "@/assets/logo.svg";
import Input from "@/components/common/input/Input";
import ErrorMsg from "@/components/common/errorMsg/ErrorMsg";
import {
  checkDuplicateIdAPI,
  checkDuplicateNicknameAPI,
  testApi,
} from "@/services/user";

interface IFormData {
  email: string;
  password: string;
  confirm_password: string;
  nickname: string;
}

const SignUpScreen = () => {
  const [checkedDuplicate, setCheckedDuplicate] = useState({
    email: false,
    nickname: false,
  });
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<IFormData>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    if (Object.values(checkedDuplicate).every((v) => v === true) === true) {
      // api호출
      console.log(data);
    } else {
      toast.error("중복확인 검사를 완료해주세요.");
    }
  };

  const handleClickCheckDuplicate = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const name = (e.target as HTMLButtonElement).name;
    // testApi()
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    if (
      name === "email" &&
      getValues("email").length !== 0 &&
      errors.email?.message === undefined
    ) {
      const email = getValues("email");
      checkDuplicateIdAPI(email)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else if (name === "nickname" && getValues("email").length !== 0) {
      const nickname = getValues("nickname");
      checkDuplicateNicknameAPI(nickname)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else return;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles["form-wrap"]}
      noValidate
    >
      <div className={styles["logo-wrap"]}>
        <h1>
          <img src={logo} alt="logo" className="w-[230px]" />
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="mb-2">
          <motion.div
            layout
            transition={{ duration: 0.2 }}
            className="flex gap-x-3"
          >
            <Input
              type="email"
              name="email"
              placeholder="이메일"
              register={register}
            />
            <button
              type="button"
              className={styles["duplicate-btn"]}
              onClick={handleClickCheckDuplicate}
              name="email"
            >
              중복확인
            </button>
          </motion.div>
          {errors.email?.message && <ErrorMsg message={errors.email.message} />}
        </div>
        <div className="mb-2">
          <motion.div
            layout
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-y-2"
          >
            <Input
              type="password"
              name="password"
              placeholder="비밀번호"
              register={register}
            />
            <Input
              type="password"
              name="confirm_password"
              placeholder="비밀번호 확인"
              register={register}
              watch={watch}
            />
          </motion.div>
          {errors.confirm_password?.message && (
            <ErrorMsg message={errors.confirm_password.message} />
          )}
        </div>
        <motion.div
          layout
          transition={{ duration: 0.2 }}
          className="flex gap-x-3"
        >
          <Input
            type="text"
            name="nickname"
            placeholder="닉네임"
            register={register}
          />
          <button
            type="button"
            className={styles["duplicate-btn"]}
            name="nickname"
            onClick={handleClickCheckDuplicate}
          >
            중복확인
          </button>
        </motion.div>
      </div>
      <div className={styles["btn-wrap"]}>
        <button type="reset" className={styles["reset-btn"]}>
          취소
        </button>
        <button type="submit" className={styles["submit-btn"]}>
          제출
        </button>
      </div>
    </form>
  );
};

export default SignUpScreen;
