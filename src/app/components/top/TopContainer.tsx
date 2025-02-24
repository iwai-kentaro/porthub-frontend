"use client";
import TopShow from "@/app/components/top/views/TopShow";
import useTop from "./hooks/useTop";

const TopContainer = () => {
  const topProps = useTop();
  return <TopShow {...topProps} />;
};

export default TopContainer;
