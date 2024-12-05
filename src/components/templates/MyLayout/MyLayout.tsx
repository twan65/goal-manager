type MyLayoutProps = {
  children: React.ReactNode;
  title?: string;
  action?: React.ReactNode;
};

export const MyLayout = ({ children, title = "Me", action }: MyLayoutProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
};
