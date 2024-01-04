import classNames from "classnames";
import { FiLoader } from "react-icons/fi";

const Loader = (props: { screen?: boolean }) => {
  return (
    <div
      className={classNames(
        props?.screen ? "h-screen w-screen" : "min-h-[200px] h-full w-full",
        "grid place-content-center place-items-center bg-transparent"
      )}
    >
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        <FiLoader size={25} className="text-bluePrimary" />
      </svg>
    </div>
  );
};

export default Loader;
