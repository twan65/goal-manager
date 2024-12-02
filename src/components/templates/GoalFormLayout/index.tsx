import { Button } from "@/components/atoms/Button";
import { ArrowLeft } from "lucide-react";

type GoalFormTemplateProps = {
  children: React.ReactNode;
  title?: string;
  onBack?: () => void;
};

export const GoalFormLayout = ({
  children,
  title = "새로운 목표 등록",
  onBack,
}: GoalFormTemplateProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          {onBack && (
            <Button
              variant="ghost"
              onClick={onBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              뒤로
            </Button>
          )}
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">{children}</div>
      </div>
    </div>
  );
};
