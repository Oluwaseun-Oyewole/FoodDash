import { AxiosError } from "axios";
import CryptoJS from "crypto-js";
import { Toastify } from "../common/components/toast";
import { keyConstants } from "./constants";

export const encrypt = (secret: string, value: string) => {
  return CryptoJS.AES.encrypt(value, secret).toString();
};

export const isAuthenticated = () => {
  const now = Date.now();
  const expireTime = +(
    localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME) || 0
  );
  const token = localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME);
  const sessionIsValid = expireTime > now && !!token;
  return sessionIsValid;
};

export const isUnAuthenticated = () => {
  const now = Date.now();
  const expireTime = +(
    localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME) || 0
  );
  const token = localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME);
  const sessionIsInvalid = expireTime <= now || !token;
  return sessionIsInvalid;
};

export const handleLogout = () => {
  localStorage.removeItem(keyConstants.EXPIRY_TOKEN_TIME);
  localStorage.removeItem(keyConstants.AUTH_TOKEN);
  window.location.href = window.location.origin + "/auth/login";
};

export const truncate = (text: string, n: number) =>
  text?.length > n ? text.substr(0, n - 1) + "..." : text;

export const handleRequestError = (
  error: AxiosError | any,
  defaultMessage = "An error occurred."
) => {
  let useMessage = null;
  const statusCode = error.response?.status?.toString();

  if (statusCode?.startsWith("4") || statusCode?.startsWith("5")) {
    const data = error?.response?.data;

    useMessage =
      data?.message ||
      data?.challenge ||
      (data?.errors && data?.errors[0]?.message) ||
      error?.message ||
      defaultMessage;
  }
  Toastify.error(useMessage ?? defaultMessage);
};
