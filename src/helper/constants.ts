import Burger from "../assets/svg/burger.svg";
import Cheese from "../assets/svg/chees.svg";

export const keyConstants = {
  EXPIRY_TOKEN_TIME: "auth_expiry",
  EXPIRE_AUTH_TOKEN_TIME: "expire-auth-token",
  AUTH_TOKEN: "auth_key",
  DEFAULT_PAGE_SIZE: 10,
};

type PageTitle = {
  [key: string]: string;
};

export const PageTitle: PageTitle = {
  dashboard: "Dashboard",
  order: "Order",
  menu: "Menu",
  review: "Review",
  setting: "Setting",
  payment: "Payment",
  account: "account",
  help: "help",
};

type Rating = {
  title: string;
  percentage: string;
  color: string;
}[];

export const Ratings: Rating = [
  { title: "Hygiene", percentage: "85", color: "#6463D6" },
  { title: "Food Taste", percentage: "85", color: "#F99C30" },
  { title: "Packaging", percentage: "85", color: "#2FBFDE" },
];

type OrderType = {
  image: string;
  name: string;
  amount: string;
}[];
export const OrderData: OrderType = [
  {
    image: Cheese,
    name: "Fresh Salid Bowl",
    amount: "IDR 45,000",
  },

  {
    image: Burger,
    name: "Chicken Noodles",
    amount: "IDR 75,000",
  },

  {
    image: Cheese,
    name: "Smoothie Fruits",
    amount: "IDR 45,000",
  },

  {
    image: Burger,
    name: "Hot Chicken Wings",
    amount: "IDR 45,000",
  },
  {
    image: Burger,
    name: "Chicken Noodles",
    amount: "IDR 75,000",
  },
];
