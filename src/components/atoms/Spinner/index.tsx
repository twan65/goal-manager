type SpinnerProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  className = "",
}) => {
  const sizeStyles = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div
      className={`
          animate-spin rounded-full
          border-2 border-gray-300 border-t-blue-500
          ${sizeStyles[size]}
          ${className}
        `}
    />
  );
};
