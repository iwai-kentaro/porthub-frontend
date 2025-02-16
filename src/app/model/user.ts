import UserType from "../types/User";

class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public profileImage?: string,
        public bio?: string,
    ){}

    static buildFromJson = (json: UserType) => {
        return new User(
            json.id, json.name, 
            json.email,
            json.profile_image, 
            json.bio
        );
    }
}

export default User;
