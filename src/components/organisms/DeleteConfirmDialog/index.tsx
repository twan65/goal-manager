import { Button } from "@/components/atoms/Button";
import { Dialog } from "@/components/molecules/Dialog";

interface DeleteConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
}

export const DeleteConfirmDialog: React.FC<DeleteConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "삭제하시겠습니까?",
  description = "이 작업은 취소할 수 없습니다.",
}) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={title}>
      <div className="mt-2">
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="mt-4 flex justify-end space-x-3">
        <Button variant="secondary" onClick={onClose}>
          취소
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          삭제
        </Button>
      </div>
    </Dialog>
  );
};
