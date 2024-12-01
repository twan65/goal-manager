import { ComponentProps, MouseEvent, useCallback, useRef } from "react";
import { CommonProps } from "../../type/type";

type ClickEventType = MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;
type HeaderProps = {
  onClick?: (event: ClickEventType) => Promise<void> | void;
} & Omit<ComponentProps<"button">, "onClick" | "ref"> &
  CommonProps;

const Button = ({ onClick, className, children }: HeaderProps) => {
  const protectedClickRef = useRef(false);
  const handleOnClick = async (event: ClickEventType) => {
    if (protectedClickRef.current) {
      return;
    }
    protectedClickRef.current = true;
    await onClick?.(event);
    protectedClickRef.current = false;
  };

  return (
    <button onClick={handleOnClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
