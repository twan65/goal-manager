import { Trash2 } from "lucide-react";
import { IconButton } from "../../atoms/IconButton";
import { Tag } from "../../atoms/Tag";
import { Check } from "../../atoms/Check";

type GoalCardProps = {
  goal: Goal;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export const GoalCard: React.FC<GoalCardProps> = ({
  goal,
  onToggle,
  onDelete,
}) => {
  return (
    <div className="p-4 border rounded-lg hover:bg-gray-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <IconButton
            icon={<Check size={24} />}
            onClick={() => onToggle(goal.id)}
            className={goal.completed ? "text-green-500" : "text-gray-300"}
          />
          <div className="min-w-0">
            <h3
              className={`font-medium ${
                goal.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {goal.title}
            </h3>
            <p className="text-sm text-gray-500">마감일: {goal.deadline}</p>
            <p className="text-sm text-gray-600 mt-1 whitespace-pre-wrap">
              {goal.description}
            </p>
            {goal.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {goal.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </div>
            )}
          </div>
        </div>
        <IconButton
          icon={<Trash2 size={20} />}
          variant="danger"
          onClick={() => onDelete(goal.id)}
          className="ml-4"
        />
      </div>
    </div>
  );
};
