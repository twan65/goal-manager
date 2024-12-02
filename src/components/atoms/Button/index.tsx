import { Loader2 } from "lucide-react";
import { ComponentProps } from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
} & Omit<ComponentProps<"button">, "ref">;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  ...props
}) => {
  const baseStyle = "rounded-lg font-medium flex items-center justify-center";

  const variantStyles = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300",
    danger:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-300",
    ghost: "text-gray-600 hover:bg-gray-100",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyle = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={`
          ${baseStyle}
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${props.disabled || isLoading ? disabledStyle : ""}
          ${className}
        `}
      disabled={props.disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin mr-2" size={16} />
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};
