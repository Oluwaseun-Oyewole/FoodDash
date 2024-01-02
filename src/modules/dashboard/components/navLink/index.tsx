import classNames from "classnames";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { AppRoutesType } from "../../routes/dashboard.routes";

type MenuProps = {
  menuLinkArray: Array<AppRoutesType>;
  otherLinkArray: Array<AppRoutesType>;
  className?: string;
  showLinkName?: boolean;
};

export const NavLinkComponent = ({
  menuLinkArray,
  otherLinkArray,
  className,
}: MenuProps) => {
  const variant = {
    hidden: { opacity: 0, x: -500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  const navItemClasses = classNames(
    "links flex flex-col lg:flex-row gap-2 transition duration-200ms ease-in-out items-center py-2",
    "space-x-[10px] paragraph-2 group font-medium text-sm"
  );

  return (
    <div className="max-w-[70%] mx-auto h-screen sticky left-0 top-10">
      <div className="pt-10">
        {/* <h1 className="uppercase text-gray-400 text-sm pb-2">Menu</h1> */}
        <ul className={className ? className : `space-y-2`}>
          {menuLinkArray?.map(({ path, id, name, icon }: AppRoutesType) => {
            return (
              <motion.li
                key={`navLink${id}`}
                variants={variant}
                animate="visible"
                initial="hidden"
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    [
                      classNames(navItemClasses),
                      "transition-all ease-in-out duration-200 text-grey font-medium hover:text-primary ",
                      isActive ? "text-bluePrimary" : "group",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  <img src={`${icon}`} className={`w-[25px]`} />
                  <span className="hidden lg:block">{name}</span>
                </NavLink>
              </motion.li>
            );
          })}
        </ul>
      </div>

      <div className="mt-8">
        {/* <h1 className="uppercase text-gray-400 text-sm pb-3">Others</h1> */}
        <ul className={className ? className : `space-y-2`}>
          {otherLinkArray?.map(({ path, id, name, icon }: AppRoutesType) => {
            return (
              <motion.li
                key={`navLink${id}`}
                variants={variant}
                animate="visible"
                initial="hidden"
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    [
                      classNames(navItemClasses),
                      "transition-all ease-in-out duration-200 hover:text-primary text-gray-400",
                      isActive ? "text-bluePrimary" : "group",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  <img src={`${icon}`} className={`w-[25px]`} />
                  <span className="hidden lg:block">{name}</span>
                </NavLink>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
