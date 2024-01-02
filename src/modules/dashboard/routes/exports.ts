import { lazy } from "react";

const loadModules = (page: string) =>
  lazy(() => import(`../pages/${page}/index.tsx`));

export const HomePage = loadModules("home");
export const Order = loadModules("order");
export const Menu = loadModules("menu");
export const Payment = loadModules("payment");
export const Review = loadModules("review");
export const Setting = loadModules("settings");
export const Account = loadModules("accounts");
export const Help = loadModules("help");
