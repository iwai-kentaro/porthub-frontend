import axiosClient from "@/app/lib/axiosClient";

interface LoginData {
    email: string;
    password: string;
}

const postAuth = async (loginData: LoginData)=> {
    const res = await axiosClient.post('/auth/login', {
        email: loginData.email,
        password: loginData.password,
    })

    const token: string = res.data.token;
    localStorage.setItem('JWT', token);

    return token;
}
export default postAuth;