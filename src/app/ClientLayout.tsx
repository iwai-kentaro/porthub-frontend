"use client";
import useAuthChecker from "@/app/hooks/auth/useAuthChecker";
import { useCurrentUserState } from "@/app/hooks/jotai/useCurrentUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { authCheck } = useAuthChecker();
  const router = useRouter();
  const { currentUser } = useCurrentUserState();

  useEffect(() => {
    console.log("🚀 useEffect 内で authCheck() を実行");
    if (authCheck) {
      authCheck();
      console.log("✅ authCheck 実行完了");
    } else {
      console.error("❌ authCheck が定義されていない！");
    }
  }, [authCheck]);

  useEffect(() => {
    if (currentUser) {
      console.log("ログイン済み");
      router.push("/dashboard");
    } else {
      console.log("未ログイン");
    }
  }, [currentUser, router]);
  return <div>{children}</div>;
}
