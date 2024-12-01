import { CommonProps } from "../../type/type";

const Tag = ({ className, children }: CommonProps) => {
  return (
    <span
      className={[
        "px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
};

export default Tag;
