import { basicRequest } from "./base";

const SERVICE = "/api/user";

export const testApi = async () => {
  const res = await basicRequest.get("/");
  return res;
};

export const checkDuplicateIdAPI = async (id: string) => {
  const params = { id };
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

export const submitSignUpAPI = async (userInfo: ISignUpUserInfo) => {
  const params = { userInfo };
  const res = await basicRequest.post(`${SERVICE}/submit`, {
    params,
  });
  return res;
};
