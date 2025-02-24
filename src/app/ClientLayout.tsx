"use client";
import useAuthChecker from "@/app/hooks/auth/useAuthChecker";
import { useIsLoadingState } from "@/app/hooks/jotai/useIsLoadingState";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { authCheck } = useAuthChecker();
  const { isLoading } = useIsLoadingState();

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  useEffect(() => {
    if (isLoading) {
      console.log("ローディング中");
    }
  }, [isLoading]);

  return <Box>{children}</Box>;
}
