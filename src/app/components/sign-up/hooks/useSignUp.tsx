"use client";
import postUser from "@/app/api/users/postUser";
import { useIsDisabledState } from "@/app/hooks/jotai/useIsDisabledState";
import { useIsLoadingState } from "@/app/hooks/jotai/useIsLoadingState";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const useSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCon, setPasswordCon] = useState("");
  const { isDisabled, setIsDisabled } = useIsDisabledState();
  const { isLoading, setIsLoading } = useIsLoadingState();
  const router = useRouter();

  useEffect(() => {
    if (name && email && password && passwordCon && password === passwordCon) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, password, passwordCon, setIsDisabled]);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handlePasswordConChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCon(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await postUser({
        username: name,
        email: email,
        password: password,
        password_confirmation: passwordCon,
      });

      alert("登録完了しました");
      router.push("/login");
    } catch (error) {
      console.error(error);
      alert("登録に失敗しました");
    } finally {
      setIsLoading(false);
      setName("");
      setEmail("");
      setPassword("");
      setPasswordCon("");
    }
  }, [email, name, password, passwordCon, router, setIsLoading]);
  return {
    handleSubmit,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handlePasswordConChange,
    isLoading,
    isDisabled,
  };
};
export default useSignUp;
