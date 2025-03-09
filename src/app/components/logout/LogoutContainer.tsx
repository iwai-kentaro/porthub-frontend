"use client";
import useLogout from "./hooks/useLogout";
import LogoutButton from "./views/LogoutButton";

const LogoutContainer = () => {
  const logoutProps = useLogout();
  return <LogoutButton {...logoutProps} />;
};
export default LogoutContainer;
