import axiosClient from "@/app/lib/axiosClient";
import User from "@/app/model/user";

const getMe = async() => {

    const token = localStorage.getItem('JWT');
    const res = await axiosClient.get('/auth/me',{
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    const userJson: User[] = res.data.user ? res.data.user : res.data;
    return userJson.map((us) => User.buildFromJson(us));
}

export default getMe;