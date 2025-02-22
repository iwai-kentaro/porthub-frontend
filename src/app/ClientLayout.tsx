"use client";
import useAuthChecker from "@/app/hooks/auth/useAuthChecker";
import { useCurrentUserState } from "@/app/hooks/jotai/useCurrentUser";
import { useIsLoadingState } from "@/app/hooks/jotai/useIsLoadingState";
import { useEffect } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { authCheck } = useAuthChecker();
  const { currentUser } = useCurrentUserState();
  const { isLoading } = useIsLoadingState();

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  useEffect(() => {
    if (isLoading) {
      console.log("ローディング中");
    }
  }, [isLoading]);

  useEffect(() => {
    if (currentUser) {
      console.log("ログイン済み");
    } else {
      console.log("未ログイン");
    }
  }, [currentUser]);

  return <div>{children}</div>;
}
