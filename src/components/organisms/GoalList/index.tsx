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
        title="登録の目標がありません"
        description="新しい目標を追加してみませんか？"
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
        description="削除すると戻すことはできません。"
      />
    </>
  );
};
