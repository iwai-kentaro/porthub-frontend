"use client";
import useLogin from "./hooks/useLogin";
import LoginForm from "./views/LoginForm";

const LoginContainer = () => {
  const LoginProps = useLogin();
  return <LoginForm {...LoginProps} />;
};
export default LoginContainer;
