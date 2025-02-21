"use client";
import { Heading, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Heading>TOPページ</Heading>
      <Link href="/login">ログイン</Link>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
}
