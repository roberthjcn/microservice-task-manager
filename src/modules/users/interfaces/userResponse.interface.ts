import { DocumentData } from "firebase/firestore";

export interface IUserResponse {
    status: number;
    user: DocumentData;
}