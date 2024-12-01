import { CommonProps } from "../../type/type";

const Tags = ({ children }: CommonProps) => {
  return <div className="flex flex-wrap gap-2 mt-2">{children}</div>;
};

export default Tags;
