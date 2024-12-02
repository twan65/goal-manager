import { ComponentProps } from "react";

type LabelProps = {
  required?: boolean;
} & ComponentProps<"label">;

export const Label: React.FC<LabelProps> = ({
  children,
  required = false,
  className = "",
  ...props
}) => {
  return (
    <label
      className={`block text-sm font-medium text-gray-700 ${className}`}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};
