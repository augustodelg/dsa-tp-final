import { ApiResponse } from "../interfaces/general/AppInterfaces";
import HttpClient from "./HttpClient";

class GenericService {

  async postXss(value: string): Promise<ApiResponse<string>> {
    const response: ApiResponse<string> = await HttpClient.post("stepper/xss",{value} );
    return response;
  }
  
  async validateFlag(step: number, value: string): Promise<ApiResponse<boolean>> {
    const response: ApiResponse<boolean> = await HttpClient.post(`stepper/flag/${step}`, {value} );
    return response;
  }

}

export default new GenericService();