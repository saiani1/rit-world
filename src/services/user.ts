import { basicRequest } from "./base";

const SERVICE = "/user";

export const checkDuplicateIdAPI = async (userId: string) => {
  const params = { userId };
  const res = await basicRequest.get(`${SERVICE}/checkId`, {
    params,
  });
  return res;
};

export const checkDuplicateNicknameAPI = async (nickname: string) => {
  const params = { nickname };
  const res = await basicRequest.get(`${SERVICE}/checkNickname`, {
    params,
  });
  return res;
};

export const signUpAPI = async (userInfo: ISignUpUserInfo) => {
  const params = userInfo;
  const res = await basicRequest.post(`${SERVICE}/signUp`, params);
  return res;
};

export const signInAPI = async (userInfo: ISignInUserInfo) => {
  const params = userInfo;
  const res = await basicRequest.post(`${SERVICE}/signIn`, params);
  return res;
};
