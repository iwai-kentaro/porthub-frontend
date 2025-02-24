import LoginContainer from "@/app/components/login/LoginContainer";
import { Heading } from "@chakra-ui/react";

const LoginPage = () => {
  console.log("MyComponent がレンダリングされました");

  return (
    <>
      <Heading>ログイン</Heading>
      <LoginContainer />
    </>
  );
};
export default LoginPage;
