import { useState } from "react";
import { FormField } from "../../molecules/FormField";
import { Input } from "../../atoms/Input";
import { TextArea } from "../../atoms/TextArea";
import { TagInput } from "../../molecules/TagInput";
import { Button } from "../../atoms/Button";
import { CreateGoalRequest } from "@/types";
import { usePageTransition } from "@/hooks/usePageTransition";
import { CancelConfirmDialog } from "../CancelConfirmDialog";

type GoalFormProps = {
  onSubmit: (goal: CreateGoalRequest) => void;
  isLoading?: boolean;
  initialData?: Partial<CreateGoalRequest>;
};

export const GoalForm: React.FC<GoalFormProps> = ({
  onSubmit,
  isLoading = false,
  initialData = {},
}) => {
  const { move } = usePageTransition();
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    description: "",
    tags: [],
    ...initialData,
  });

  const [inClickedCancel, setIsClickedCancel] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleCancelOnClick = () => {
    setIsClickedCancel(!inClickedCancel);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField label="目標" required>
        <Input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </FormField>

      <FormField label="期限" required>
        <Input
          type="date"
          value={formData.deadline}
          onChange={(e) =>
            setFormData({ ...formData, deadline: e.target.value })
          }
          required
        />
      </FormField>

      <FormField label="詳細">
        <TextArea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          rows={4}
        />
      </FormField>

      <FormField label="タグ">
        <TagInput
          tags={formData.tags}
          onChange={(tags) => setFormData({ ...formData, tags })}
          maxTags={3}
        />
      </FormField>

      <div className="flex justify-end space-x-4">
        <Button variant="secondary" type="button" onClick={handleCancelOnClick}>
          Cancel
        </Button>
        <Button type="submit" isLoading={isLoading}>
          Submit
        </Button>
      </div>

      <CancelConfirmDialog
        isOpen={inClickedCancel}
        onClose={() => setIsClickedCancel(false)}
        onConfirm={() => {
          setIsClickedCancel(false);
          move("/goals");
        }}
        description="キャンセルすると戻すことはできません。"
      />
    </form>
  );
};
