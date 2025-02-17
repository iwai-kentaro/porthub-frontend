import { Heading } from "@chakra-ui/react";
import LoginContainer from "../components/login/LoginContainer";

const page = () => {
  console.log("MyComponent がレンダリングされました");

  return (
    <>
      <Heading>ログイン</Heading>
      <LoginContainer />
    </>
  );
};
export default page;
