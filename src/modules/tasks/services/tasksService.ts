import { db } from '../../../config/firebase';
import { Service } from "typedi";
const admin = require('firebase-admin');

@Service()
export class TaskService {
    constructor() { }

    async getTasks(emailUser: string) {
        const tasksRef = db.collection("tasks");
        const snapshot = await tasksRef.where("emailUser", "==", emailUser).get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    async createTask(taskData: any) {
        const specificDate = new Date();
        taskData.creationDate = admin.firestore.Timestamp.fromDate(specificDate);
        const tasksRef = db.collection("tasks");
        const docRef = await tasksRef.add(taskData);
        return { id: docRef.id, ...taskData };
    }

    async updateTask(taskId: string, taskData: any): Promise<Object> {
        const taskRef = db.doc(`tasks/${taskId}`);
        await taskRef.update(taskData);
        return { message: "Task updated successfully" };
    }

    async deleteTask(taskId: string): Promise<Object> {
        const taskRef = db.doc(`tasks/${taskId}`);
        await taskRef.delete();
        return { message: "Task deleted successfully" };
    }
}