"use client";
import postUser from "@/app/api/users/postUser";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const useSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCon, setPasswordCon] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (name && email && password && passwordCon && password === passwordCon) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, password, passwordCon]);

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
      setLoading(true);
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
      setLoading(false);
      setName("");
      setEmail("");
      setPassword("");
      setPasswordCon("");
    }
  }, [email, name, password, passwordCon, router]);
  return {
    handleSubmit,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handlePasswordConChange,
    loading,
    isDisabled,
  };
};
export default useSignUp;
