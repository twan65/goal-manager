import { ComponentProps } from "react";

type TextAreaProps = {
  error?: string;
} & ComponentProps<"textarea">;

export const TextArea: React.FC<TextAreaProps> = ({
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      <textarea
        className={`
            w-full px-3 py-2 rounded-lg border
            focus:outline-none focus:ring-2 focus:ring-blue-300
            ${error ? "border-red-500" : "border-gray-300"}
            ${className}
          `}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
