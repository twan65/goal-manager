import { X } from "lucide-react";

type TagProps = {
  children: React.ReactNode;
  onDelete?: () => Promise<void> | void;
  className?: string;
};

export const Tag: React.FC<TagProps> = ({
  children,
  onDelete,
  className = "",
}) => {
  return (
    <span
      className={`
      inline-flex items-center px-2.5 py-0.5 rounded-full text-sm
      bg-blue-100 text-blue-700
      ${onDelete ? "pr-1" : ""}
      ${className}
    `}
    >
      {children}
      {onDelete && (
        <button
          onClick={onDelete}
          className="ml-1 p-0.5 hover:bg-blue-200 rounded-full"
        >
          <X size={14} />
        </button>
      )}
    </span>
  );
};
