import { ComponentProps } from "react";

type TextProps = Omit<ComponentProps<"input">, "ref">;

const Text = (props: TextProps) => {
  return <input {...props} className="w-full p-2 border rounded" />;
};

export default Text;
