import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore, HttpCode, QueryParam } from "routing-controllers";
import { TaskService } from "../services/tasksService";
import { Service } from "typedi";

@Service()
@JsonController("/tasks")
@HttpCode(200)
export class TaskController {
    constructor(private taskService: TaskService) { }

    @Get()
    async getTasks(@QueryParam("email") email: string) {
        return this.taskService.getTasks(email);
    }
    @Post()
    async createTask(@Body() taskData: any) {
        return this.taskService.createTask(taskData);
    }
    @Put("/:taskId")
    async updateTask(@Param("taskId") taskId: string, @Body() taskData: any) {
        return this.taskService.updateTask(taskId, taskData);
    }
    @Delete("/:taskId")
    async deleteTask(@Param("taskId") taskId: string) {
        return this.taskService.deleteTask(taskId);
    }
}