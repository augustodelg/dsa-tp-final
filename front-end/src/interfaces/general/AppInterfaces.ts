
export type ApiResponse<TContent> = {
    success: boolean;
    payload?: TContent;
    errors?: ErrorMessage[];
  };
  
  export interface ErrorMessage {
    status?: StatusCode;
    message: string;
  }

  type StatusCode = 404 | 500;