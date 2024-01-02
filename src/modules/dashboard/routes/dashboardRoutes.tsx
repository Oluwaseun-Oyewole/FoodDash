import { Navigate, RouteObject } from "react-router-dom";
import { Routes } from "../../../common/routes/routes";
import {
  Account,
  Help,
  HomePage,
  Menu,
  Order,
  Payment,
  Review,
  Setting,
} from "./exports";

export const dashboardRoutes = [
  {
    path: Routes.home,
    element: <HomePage />,
  },

  {
    path: Routes.order,
    element: <Order />,
  },

  {
    path: Routes.account,
    element: <Account />,
  },
  {
    path: Routes.help,
    element: <Help />,
  },
  {
    path: Routes.menu,
    element: <Menu />,
  },
  {
    path: Routes.payment,
    element: <Payment />,
  },
  {
    path: Routes.setting,
    element: <Setting />,
  },
  {
    path: Routes.review,
    element: <Review />,
  },

  {
    path: Routes.dashboard,
    element: <Navigate to={Routes.home} replace={true} />,
  },
] as RouteObject[];
