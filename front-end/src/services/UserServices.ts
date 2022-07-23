
import { ApiResponse } from "../interfaces/general/AppInterfaces";
import { UserStructure } from "../interfaces/user/UserInterfaces";
import HttpClient from "./HttpClient";

class UserServices {
    async getUsersData(): Promise<ApiResponse<Array<UserStructure>>> {
        const response = await HttpClient.get<ApiResponse<Array<UserStructure>>>('users');
        return response;

    }
    async getUsersFilterByUsernameData(username: string): Promise<ApiResponse<Array<UserStructure>>> {
        const response = await HttpClient.get<ApiResponse<Array<UserStructure>>>(`users?username=${username}`);
        return response;

    }
}
export default new UserServices();