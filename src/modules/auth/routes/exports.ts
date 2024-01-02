import { lazy } from "react";

const loadModules = (page: string) =>
  lazy(() => import(`../pages/${page}/index.tsx`));

export const Login = loadModules("login");
export const Register = loadModules("register");
