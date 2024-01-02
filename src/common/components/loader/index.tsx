import classNames from "classnames";

const Loader = (props: { screen?: boolean }) => {
  return (
    <div
      className={classNames(
        props?.screen ? "h-screen w-screen" : "min-h-[200px] h-full w-full",
        "grid place-content-center place-items-center bg-transparent"
      )}
    >
      <p> Loading....</p>
    </div>
  );
};

export default Loader;
