import { ComponentProps } from "react";

type TextProps = Omit<ComponentProps<"input">, "ref">;

const Text = ({ type, value, onChange, required = false }: TextProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded"
      required={required}
    />
  );
};

export default Text;
