"use client";
import SignUpContainer from "@/app/components/sign-up/SignUpContainer";
import { Heading } from "@chakra-ui/react";

const page = () => {
  return (
    <>
      <Heading>ユーザー登録</Heading>
      <SignUpContainer />
    </>
  );
};
export default page;
