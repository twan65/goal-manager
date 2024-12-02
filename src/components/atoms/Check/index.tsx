import { CheckIcon } from "lucide-react";

export type CheckProps = {
  checked: boolean;
  onChange?: () => void;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
};

export const Check: React.FC<CheckProps> = ({
  checked,
  onChange,
  size = "md",
  disabled = false,
  className = "",
}) => {
  const sizeStyles = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <button
      type="button"
      onClick={onChange}
      disabled={disabled}
      className={`
          rounded-full p-1 transition-colors
          ${
            checked
              ? "text-green-500 hover:text-green-600"
              : "text-gray-300 hover:text-gray-400"
          }
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          ${className}
        `}
    >
      <CheckIcon className={sizeStyles[size]} />
    </button>
  );
};
