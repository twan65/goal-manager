import { Check, Trash2 } from "lucide-react";
import Button from "../common/Button";
import Tag from "../common/Tag";
import Tags from "../common/Tags";

type GoalProps = {
  id: number;
  title: string;
  deadline: string;
  description: string;
  tags: string[];
  completed: boolean;
  toggleGoal?: (id: number) => Promise<void> | void;
  deleteGoal?: (id: number) => Promise<void> | void;
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
            onClick={() => toggleGoal?.(id)}
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
            <p className="text-sm text-gray-500">期限: {deadline}</p>
            {description && (
              <p className="text-sm text-gray-600 mt-1 whitespace-pre-wrap">
                {description}
              </p>
            )}
            {tags.length > 0 && (
              <Tags>
                {tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </Tags>
            )}
          </div>
        </div>
        <Button
          onClick={() => deleteGoal?.(id)}
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Goal;
