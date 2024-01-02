import { ReactNode } from "react";
import Order from "../../../assets/svg/Buy.svg";
import Chart from "../../../assets/svg/Chart.svg";
import Review from "../../../assets/svg/Chat.svg";
import Menu from "../../../assets/svg/Document.svg";
import Help from "../../../assets/svg/Info Square.svg";
import Account from "../../../assets/svg/Profile.svg";
import Setting from "../../../assets/svg/Setting.svg";
import Payment from "../../../assets/svg/Wallet.svg";
import { Routes } from "../../../common/routes/routes";

export interface AppRoutesType {
  id: number;
  path: string;
  name: string;
  icon: ReactNode;
}

export const menuRoutes: AppRoutesType[] = [
  {
    id: 1,
    path: Routes.home,
    name: "Dashboard",
    icon: Chart,
  },
  {
    id: 2,
    path: Routes.order,
    name: "Food Order",
    icon: Order,
  },

  {
    id: 3,
    path: Routes.menu,
    name: "Manage Menu",
    icon: Menu,
  },
  {
    id: 4,
    path: Routes.review,
    name: "Customer Review",
    icon: Review,
  },
];

export const otherRoutes: AppRoutesType[] = [
  {
    id: 1,
    path: Routes.setting,
    name: "Settings",
    icon: Setting,
  },
  {
    id: 2,
    path: Routes.payment,
    name: "Payments",
    icon: Payment,
  },

  {
    id: 3,
    path: Routes.account,
    name: "Account",
    icon: Account,
  },
  {
    id: 4,
    path: Routes.help,
    name: "Help",
    icon: Help,
  },
];
