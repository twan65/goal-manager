import Button from "../common/Button";
import { Plus } from "lucide-react";

type AddGoalButtonProps = {
  onClick?: () => Promise<void> | void;
};

const AddGoalButton = ({ onClick }: AddGoalButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      <Plus size={20} />
      New
    </Button>
  );
};

export default AddGoalButton;
