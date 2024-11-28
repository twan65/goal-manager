import { CommonProps } from "../../type/type";

const Label = ({ children }: CommonProps) => {
  return (
    <label className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  );
};

export default Label;
