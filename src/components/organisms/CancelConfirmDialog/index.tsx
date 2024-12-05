import { Button } from "@/components/atoms/Button";
import { Dialog } from "@/components/molecules/Dialog";

type CancelConfirmDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
};

export const CancelConfirmDialog: React.FC<CancelConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "キャンセルしますか？",
  description = "",
}) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={title}>
      <div className="mt-2">
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="mt-4 flex justify-end space-x-3">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="ghost" onClick={onConfirm}>
          OK
        </Button>
      </div>
    </Dialog>
  );
};
