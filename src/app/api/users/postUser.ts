import axiosClient from "@/app/lib/axiosClient";
import User from "@/app/model/user";

interface NewUserData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const postUser = async (user: NewUserData) => {
    const res = await axiosClient.post('/users',{
        user: {
            name: user.name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation,
        }
    });

    const userJson: User = res.data.user ? res.data.user : res.data;

    return userJson;
}
export default postUser;