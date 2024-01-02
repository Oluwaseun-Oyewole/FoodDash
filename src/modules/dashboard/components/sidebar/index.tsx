import { motion } from "framer-motion";
import { menuRoutes, otherRoutes } from "../../routes/dashboard.routes";
import { NavLinkComponent } from "../navLink";

const Sidebar = () => {
  return (
    <motion.aside className="bg-gray-100 relative">
      <NavLinkComponent
        menuLinkArray={menuRoutes}
        otherLinkArray={otherRoutes}
      />
    </motion.aside>
  );
};

export default Sidebar;
