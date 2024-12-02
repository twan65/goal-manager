import { ComponentProps } from "react";

type IconButtonProps = {
  icon: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
} & ComponentProps<"button">;

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = "ghost",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyle = "rounded-full flex items-center justify-center";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "text-gray-600 hover:bg-gray-100",
  };

  const sizeStyles = {
    sm: "p-1",
    md: "p-2",
    lg: "p-3",
  };

  return (
    <button
      className={`
          ${baseStyle}
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
      {...props}
    >
      {icon}
    </button>
  );
};
