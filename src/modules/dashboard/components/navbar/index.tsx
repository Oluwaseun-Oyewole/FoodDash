import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Burger from "../../../../assets/svg/Emoticon.svg";
import Logo from "../../../../assets/svg/Logo.svg";
import Typography from "../../../../common/components/typography";
import Search from "../search";

const Navbar = () => {
  const [scrollNavbar, setScrollNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 10) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const [clicked, setClicked] = useState(false);
  const handleMobileOpening = () => {
    setClicked(!clicked);
  };

  const variant = {
    hidden: { opacity: 0, x: 500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.621,
      },
    },
    exit: {
      opacity: 0,
      x: 500,
      transition: {
        type: "spring",
        duration: 1,
        delay: 0.2,
      },
    },
  };

  const onSearch = () => {
    console.log("searching for something..");
  };

  return (
    <header
      className={`sticky left-0 top-0 z-10 ${
        scrollNavbar ? "bg-gray-100" : "bg-gray-100 md:bg-white"
      } `}
    >
      <nav className="flex items-center justify-between border-b-2 border-gray-200">
        <div className="w-[30%] lg:w-[20%] bg-gray-100 py-3">
          <div className="max-w-[70%] mx-auto py-3 ">
            <img src={Logo} alt="logo" />
          </div>
        </div>

        <div className="w-[80%]">
          <div className="max-w-[85%] md:max-w-[95%] mx-auto flex items-center justify-end md:justify-between">
            <div className="hidden md:block w-[55%]">
              <Search onSearch={onSearch} />
            </div>
            <div className="md:hidden">
              {!clicked ? (
                <div onClick={handleMobileOpening}>
                  <RxHamburgerMenu size={25} />
                </div>
              ) : (
                <div onClick={handleMobileOpening}>
                  <IoMdClose size={25} />
                </div>
              )}
            </div>
            <div className="hidden md:flex items-center gap-5 ">
              <div className="bg-orange-200 rounded-full flex items-center justify-center w-8 h-8">
                <img src={Burger} alt="burger" />
              </div>
              <div className="flex items-center gap-2">
                <Typography type="p" children="Delicious Burger" />
                <MdOutlineKeyboardArrowDown />
              </div>

              <div>
                <IoNotifications />
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {clicked && (
            <motion.div
              className="w-full block md:hidden absolute right-0 top-16 h-screen bg-gray-50 overflow-y-scroll"
              variants={variant}
              animate="visible"
              initial="hidden"
              exit="exit"
            >
              <div className="max-w-[90%] md:max-w-[95%] mx-auto">
                <div className="my-7">
                  <Search onSearch={onSearch} />
                </div>
                <div className="flex items-center gap-5 ">
                  <div className="bg-orange-200 rounded-full flex items-center justify-center w-8 h-8">
                    <img src={Burger} alt="burger" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Typography type="p" children="Delicious Burger" />
                    <MdOutlineKeyboardArrowDown />
                  </div>

                  <div>
                    <IoNotifications />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
