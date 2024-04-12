import { supabase } from "shared/api/supabase";


/** 중복 ID 검사 API */
export const checkDuplicateIdAPI = async (email: string) => {
  const { error, count } = await supabase
    .from("user")
    .select("email", { count: "exact" })
    .eq("email", email)

  if (error) {
    console.error("에러 발생", error)
    return false;
  }

  return count !== null ? count > 0 : false;
};

/** 중복 닉네임 검사 API */
export const checkDuplicateNicknameAPI = async (nickname: string) => {
  const { error, count } = await supabase
    .from("user")
    .select("nickname", { count: "exact" })
    .eq("nickname", nickname)

  if (error) {
    console.error("에러 발생", error)
    return false;
  }

  return count !== null ? count > 0 : false;
};


/** 회원가입 API */
export const submitAPI = async (formData: ISignUpUserInfo) => {
  const { data, error } = await supabase.auth.signUp({
    email: formData.userId,
    password: formData.password,
    options: {
      data: {
        nickname: formData.nickname
      }
    }
  })
  if (error) {
    console.error('가입 에러', error);
    return;
  }

  return data;
}

/** 로그인 API */
export const loginAPI = async (formData: ISignInUserInfo) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.userId,
    password: formData.password,
  })
  if (error) {
    console.error("로그인 에러", error);
    return;
  }
  return data;
}

/** 로그아웃 API */
export const logOutAPI = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) console.error("로그아웃 에러", error);
  else return true;
}

/** 세션이벤트 감지 API */
export const isLoginAPI = async (setUser: any) => {
  const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
    if (session) setUser({ loggedIn: true, user: session.user });
    else setUser({ loggedIn: false, user: null });
  });

  return subscription.unsubscribe;
}