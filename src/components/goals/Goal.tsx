import { Check, Trash2 } from "lucide-react";
import Button from "../common/Button";

type GoalProps = {
  id: number;
  title: string;
  deadline: string;
  description: string;
  tags: string[];
  completed: boolean;
  toggleGoal: (id: number) => Promise<void> | void;
  deleteGoal: (id: number) => Promise<void> | void;
};

const Goal = ({
  id,
  title,
  deadline,
  description,
  tags,
  completed,
  toggleGoal,
  deleteGoal,
}: GoalProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 border rounded hover:bg-gray-50">
        <div className="flex items-center gap-4">
          <Button
            onClick={() => toggleGoal(id)}
            className={`${
              completed ? "text-green-500" : "text-gray-300"
            } hover:text-green-600`}
          >
            <Check size={24} />
          </Button>
          <div>
            <p
              className={`font-medium ${
                completed ? "line-through text-gray-500" : ""
              }`}
            >
              {title}
            </p>
            <p className="text-sm text-gray-500">마감일: {deadline}</p>
            {description && (
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            )}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <Button
          onClick={() => deleteGoal(id)}
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Goal;
