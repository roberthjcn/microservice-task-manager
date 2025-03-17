import { Service } from "typedi";
import { db } from '../../../config/firebase';
import { IUserRequest } from "../interfaces/userRequest.interface";

@Service()
export class UserService {
    constructor() { }

    async getUserByEmail(email: string) {
        console.log('getUserByEmail', email);
        const usersRef = db.collection("users");
        const snapshot = await usersRef.where("email", "==", email).get();
        if (snapshot.empty) {
            return null;
        }

        return snapshot.docs[0].data();
    }

    async createUser(userData: IUserRequest) {
        const usersRef = db.collection("users");
        const docRef = await usersRef.add(userData);
        return { id: docRef.id, ...userData };
    }
}