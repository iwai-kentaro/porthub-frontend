import axiosClient from "@/app/lib/axiosClient";

const deleteAuth = async () => {
  const token = localStorage.getItem("JWT");
  const res = await axiosClient.delete("/auth/logout", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const responseToken: string = res.data.token;
  localStorage.removeItem("JWT");
  return responseToken;
};
export default deleteAuth;
