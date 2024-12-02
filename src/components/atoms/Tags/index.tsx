type TagsProps = {
  children: React.ReactNode;
  className?: string;
};

export const Tags: React.FC<TagsProps> = ({ children, className = "" }) => {
  return <div className={`flex flex-wrap gap-2 ${className}`}>{children}</div>;
};
