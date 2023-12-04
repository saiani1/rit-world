import logo from "../../assets/logo.svg";

const LoginScreen = () => {
  return (
    <form className="flex justify-center items-center bg-slate-600">
      <h1>
        <img src={logo} alt="logo" />
      </h1>
      <input type="email" placeholder="아이디(이메일)" />
      <input type="password" placeholder="비밀번호" />
      <button type="submit">로그인</button>
      <div>
        <button type="button">아이디/비밀번호 찾기</button>
        <button type="button">회원가입</button>
      </div>
    </form>
  );
};

export default LoginScreen;
