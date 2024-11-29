import { useState } from "react";
import Main from "../../common/Main";
import Button from "../../common/Button";
import { X } from "lucide-react";
import { usePageTransition } from "../../../hooks/usePageTransition";
import Label from "../../common/Label";
import Text from "../../common/Text";
import { useAsync } from "../../../hooks/useAsync";
import { api } from "../../../api";
import { CreateGoalParams } from "../../../api/goals/goals";

const GoalCreate = () => {
  const { move } = usePageTransition();
  const { execute, loading } = useAsync();

  const [newGoal, setNewGoal] = useState({
    title: "",
    deadline: "",
    description: "",
    tags: [] as string[],
  });
  const [tagInput, setTagInput] = useState("");

  const handleAddGoalOnClick = async (e: React.FormEvent) => {
    e.preventDefault();
    await execute(() => api.goals.create({ ...newGoal }));
    move("/goals");
  };

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (newGoal.tags.length >= 3) {
        alert("タグは最大３つまでです");
        return;
      }
      if (!newGoal.tags.includes(tagInput.trim())) {
        setNewGoal({
          ...newGoal,
          tags: [...newGoal.tags, tagInput.trim()],
        });
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setNewGoal({
      ...newGoal,
      tags: newGoal.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  return (
    <Main>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">新しい目標</h1>
      </div>

      <form onSubmit={handleAddGoalOnClick} className="space-y-6">
        <div className="space-y-2">
          <Label>目標</Label>
          <Text
            type="text"
            value={newGoal.title}
            onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="目標"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            期限
          </label>
          <input
            type="date"
            value={newGoal.deadline}
            onChange={(e) =>
              setNewGoal({ ...newGoal, deadline: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <Label>説明</Label>
          <textarea
            value={newGoal.description}
            onChange={(e) =>
              setNewGoal({ ...newGoal, description: e.target.value })
            }
            className="w-full p-2 border rounded h-32"
            placeholder="詳細"
          />
        </div>

        <div className="space-y-2">
          <Label>タグ (最大 3個)</Label>
          <div className="space-y-2">
            <Text
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={addTag}
              className="w-full p-2 border rounded"
              placeholder="タグを入力してEnter"
              disabled={newGoal.tags.length >= 3}
            />
            <div className="flex flex-wrap gap-2">
              {newGoal.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded"
                >
                  {tag}
                  <Button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="hover:text-blue-900"
                  >
                    <X size={14} />
                  </Button>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            onClick={() => move("/goals")}
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            キャンセル
          </Button>
          <Button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            登録
          </Button>
        </div>
      </form>
    </Main>
  );
};

export default GoalCreate;
