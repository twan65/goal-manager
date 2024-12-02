export type TagInputProps = {
  tags: string[];
  onChange: (tags: string[]) => void;
  maxTags?: number;
  error?: string;
};

// molecules/TagInput/index.tsx
import { useState } from "react";
import { Tag } from "../../atoms/Tag";
import { Input } from "../../atoms/Input";
import { Tags } from "@/components/atoms/Tags";

export const TagInput: React.FC<TagInputProps> = ({
  tags,
  onChange,
  maxTags = 3,
  error,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = inputValue.trim();

      if (newTag && !tags.includes(newTag) && tags.length < maxTags) {
        onChange([...tags, newTag]);
        setInputValue("");
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="space-y-2">
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={`タグを入力してEnterを押してください（最大 ${maxTags}個）`}
        disabled={tags.length >= maxTags}
        error={error}
      />
      <Tags>
        {tags.map((tag, index) => (
          <Tag key={index} onDelete={() => removeTag(tag)}>
            {tag}
          </Tag>
        ))}
      </Tags>
    </div>
  );
};
