type GoalFormTemplateProps = {
  children: React.ReactNode;
  title?: string;
};

export const GoalFormLayout = ({
  children,
  title = "Create Goal",
}: GoalFormTemplateProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">{children}</div>
      </div>
    </div>
  );
};
