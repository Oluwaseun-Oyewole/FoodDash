import { Navigate, RouteObject } from "react-router-dom";
import { Routes } from "../../../common/routes/routes";
import { Login, Register } from "./exports";

export const authRoutes = [
  {
    path: Routes.login,
    element: <Login />,
  },

  { path: Routes.register, element: <Register /> },

  { path: Routes.auth, element: <Navigate to={Routes.login} replace={true} /> },
] as RouteObject[];
