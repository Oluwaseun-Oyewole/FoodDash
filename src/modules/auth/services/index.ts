import { handleRequestError } from "../../../helper";
import Request from "../../../services/axios";
import { Endpoints } from "../../../services/endpoints";
import {
  LoginRequestBody,
  LoginResponseBody,
  SignUpRequestBody,
} from "./types";

export const login = async (data: LoginRequestBody) => {
  try {
    const response = await Request.post<LoginResponseBody>(Endpoints.login, {
      data,
    });
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};

export const Register = async (data: SignUpRequestBody) => {
  try {
    const response = await Request.post(Endpoints.register, { data });
    return response;
  } catch (error) {
    handleRequestError(error);
  }
};
