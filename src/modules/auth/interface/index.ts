export interface BaseResponse<T = unknown> {
  data?: T;
  error?: boolean;
  message: string;
  //   statusCode: number;
  token?: string;
}
