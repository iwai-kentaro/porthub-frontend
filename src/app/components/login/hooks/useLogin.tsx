import postAuth from "@/app/api/auth/postAuth";
import { useCallback, useEffect, useState } from "react";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (email && password) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

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

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await postAuth({ email, password });
      console.log(res);
    } catch (error) {
      console.error(error);
      alert("ログインに失敗しました");
    } finally {
      setEmail("");
      setPassword("");
      setIsLoading(false);
    }
  }, [email, password]);
  return {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    isDisabled,
    email,
    password,
    isLoading,
  };
};
export default useLogin;
