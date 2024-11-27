import { useState } from "react";
import Main from "../../common/Main";
import Button from "../../common/Button";
import { X } from "lucide-react";
import { isDate } from "../../../utils";
import { usePageTransition } from "../../../hooks/usePageTransition";

const GoalCreate = () => {
  const { move } = usePageTransition();
  const [newGoal, setNewGoal] = useState({
    title: "",
    deadline: "",
    description: "",
    tags: [] as string[],
  });
  const [tagInput, setTagInput] = useState("");

  const handleAddGoalOnClick = () => {
    isDate(newGoal.deadline);
    // TODO: API 及び画面遷移
  };

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (newGoal.tags.length >= 3) {
        alert("태그는 최대 3개까지만 추가할 수 있습니다.");
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
        <h1 className="text-2xl font-bold">새로운 목표 등록</h1>
      </div>

      <form onSubmit={handleAddGoalOnClick} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            목표
          </label>
          <input
            type="text"
            value={newGoal.title}
            onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="목표를 입력하세요"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            마감일
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
          <label className="block text-sm font-medium text-gray-700">
            설명
          </label>
          <textarea
            value={newGoal.description}
            onChange={(e) =>
              setNewGoal({ ...newGoal, description: e.target.value })
            }
            className="w-full p-2 border rounded h-32"
            placeholder="목표에 대한 상세 설명을 입력하세요"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            태그 (최대 3개)
          </label>
          <div className="space-y-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={addTag}
              className="w-full p-2 border rounded"
              placeholder="태그를 입력하고 Enter를 누르세요"
              disabled={newGoal.tags.length >= 3}
            />
            <div className="flex flex-wrap gap-2">
              {newGoal.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="hover:text-blue-900"
                  >
                    <X size={14} />
                  </button>
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
            취소
          </Button>
          <Button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            등록
          </Button>
        </div>
      </form>
    </Main>
  );
};

export default GoalCreate;
