import { Outlet, useLocation } from "react-router-dom";
import Typography from "../../../common/components/typography";
import { PageTitle } from "../../../helper/constants";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const DashboardLayout = () => {
  const location = useLocation();
  const match = location.pathname.match(/\/app\/([^/]+)/);

  const getTitleEnum = match
    ? match[1]
    : location.pathname.split("/").pop() || "";

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden lg:block md:w-[20%]">
          <Sidebar />
        </div>

        <div className="w-full md:w-[80%]">
          <div className="max-w-[95%] mx-auto pt-10 h-screen overflow-y-scroll">
            <Typography type="h1" className="text-xl">
              {PageTitle[getTitleEnum as keyof typeof PageTitle]}
            </Typography>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
