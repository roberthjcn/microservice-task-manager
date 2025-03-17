import { JsonController, Get, Post, Param, Body, BadRequestError, HttpCode } from "routing-controllers";
import { UserService } from "../services/userService";
import { Inject, Service } from "typedi";
import { validate } from "class-validator";
import { IUserRequest } from "../interfaces/userRequest.interface";



@Service()
@JsonController("/users")
@HttpCode(200)
export class UserController {
    constructor(@Inject() private userService: UserService) { }

    @Get("/:email")
    async getUser(@Param("email") email: string) {
        if (!email) {
            throw new BadRequestError("Email is required");
        }
        const user = await this.userService.getUserByEmail(email);
        if (!user)
            return { status: 404, message: "User not found" };

        return { status: 200, user };
    }
    @Post()
    @HttpCode(201)
    async createUser(@Body() userData: IUserRequest) {
        const errors = await validate(userData);
        if (errors.length > 0) {
            throw new BadRequestError("Validation failed");
        }
        return this.userService.createUser(userData);
    }
}