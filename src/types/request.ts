export interface AppSuccess<T> {
  success: true;
  statusCode: number;
  payload: T;
}

export interface AppError {
  success: false;
  error: {
    message: string;
    code?: number;
    url?: string;
    method?: string;
  };
}

export type AppResponse<T> = AppSuccess<T> | AppError;

export type RequestResponse<T> = Promise<AppResponse<T>>;

export enum HTTPMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT"
}
