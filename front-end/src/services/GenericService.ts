import { ApiResponse } from "../interfaces/general/AppInterfaces";
import HttpClient from "./HttpClient";

class GenericService {
  async postXss(value: string): Promise<ApiResponse<string>> {
    const response: ApiResponse<string> = await HttpClient.post("stepper/xss",{value} );
    return response;
  }
  async getCookies(): Promise<ApiResponse<string>> {
    const response: ApiResponse<string> = await HttpClient.get("stepper/noVasADeducirNadaConLaUrl");
    return response;
  }  
}

export default new GenericService();