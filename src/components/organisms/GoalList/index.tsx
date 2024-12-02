import { useState } from "react";
import { GoalCard } from "@/components/molecules/GoalCard";
import { DeleteConfirmDialog } from "@/components/organisms/DeleteConfirmDialog";
import { ClipboardList, Loader2 } from "lucide-react";
import { Goal } from "@/types";
import { EmptyState } from "@/components/molecules/EmptyState";

type GoalListProps = {
  goals: Goal[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  isLoading?: boolean;
};

export const GoalList: React.FC<GoalListProps> = ({
  goals,
  onToggle,
  onDelete,
  isLoading = false,
}) => {
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <Loader2 className="animate-spin" size={32} />
      </div>
    );
  }

  if (goals.length === 0) {
    return (
      <EmptyState
        title="등록된 목표가 없습니다"
        description="새로운 목표를 추가해보세요"
        icon={<ClipboardList size={40} />}
      />
    );
  }

  return (
    <>
      <div className="space-y-4">
        {goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onToggle={onToggle}
            onDelete={() => setDeleteTargetId(goal.id)}
          />
        ))}
      </div>

      <DeleteConfirmDialog
        isOpen={deleteTargetId !== null}
        onClose={() => setDeleteTargetId(null)}
        onConfirm={() => {
          if (deleteTargetId) {
            onDelete(deleteTargetId);
            setDeleteTargetId(null);
          }
        }}
        description="이 목표를 삭제하시겠습니까?"
      />
    </>
  );
};
