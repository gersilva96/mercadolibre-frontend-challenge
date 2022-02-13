import { AxiosResponse, AxiosError } from "axios";
import { AppResponse, AppError, AppSuccess } from "types/request";

export const handleError = (axiosErr: AxiosError | any): AppError => {
  let errorResponse: AppError;
  if (axiosErr.response) {
    const responseError = axiosErr.response;
    errorResponse = {
      success: false,
      error: {
        code: responseError.request.status,
        message: responseError.request.statusText,
        url: responseError.config.url,
        method: responseError.config.method?.toUpperCase()
      }
    };
  } else {
    errorResponse = {
      success: false,
      error: { message: "ERR_CONNECTION_REFUSED" }
    };
  }
  return errorResponse;
};

export const handleResponse = <T>(axiosRes: AxiosResponse): AppSuccess<T> => {
  const response: AppSuccess<T> = {
    success: true,
    statusCode: axiosRes.status,
    payload: axiosRes.data
  };
  return response;
};

export const isResponseSuccess = <T = any>(
  response: AppResponse<T>
): response is AppSuccess<T> => response.success;

export const isResponseError = <T = any>(
  response: AppResponse<T>
): response is AppError => !response.success;
