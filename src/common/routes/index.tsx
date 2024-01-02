import { Navigate, createBrowserRouter } from "react-router-dom";
import { isAuthenticated, isUnAuthenticated } from "../../helper";
import AuthLayout from "../../modules/auth/layout";
import { authRoutes } from "../../modules/auth/routes";
import DashboardLayout from "../../modules/dashboard/layouts";
import { dashboardRoutes } from "../../modules/dashboard/routes/dashboardRoutes";
import ErrorPage from "../components/error";
import { RouteProtection } from "./route-protection";
import { Routes } from "./routes";

export const routes = createBrowserRouter([
  {
    path: Routes.base,
    element: <Navigate to={Routes.dashboard} replace />,
    errorElement: <ErrorPage />,
  },

  {
    path: Routes.auth,
    element: (
      <RouteProtection
        validations={[isUnAuthenticated]}
        redirect={Routes.dashboard}
      >
        <AuthLayout />
      </RouteProtection>
    ),
    children: [...authRoutes],
  },

  {
    path: Routes.dashboard,
    element: (
      <RouteProtection validations={[isAuthenticated]} redirect={Routes.login}>
        <DashboardLayout />
      </RouteProtection>
    ),
    children: [...dashboardRoutes],
  },
]);
