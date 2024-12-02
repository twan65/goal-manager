import { useEffect } from "react";
import { Button } from "@/components/atoms/Button";

export type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
}) => {
  // ESC 키로 다이얼로그 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* 배경 오버레이 */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* 다이얼로그 */}
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          {/* 다이얼로그 내용 */}
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">
              {title}
            </h3>
            {description && (
              <div className="mt-2">
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            )}
            {children}
          </div>

          {/* 다이얼로그 버튼 */}
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <Button
              onClick={onClose}
              variant="secondary"
              className="mt-3 sm:mt-0"
            >
              닫기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
