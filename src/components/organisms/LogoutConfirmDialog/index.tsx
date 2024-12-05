import { Button } from "@/components/atoms/Button";
import { Dialog } from "@/components/molecules/Dialog";

type LogoutConfirmDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
};

export const LogoutConfirmDialog: React.FC<LogoutConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "ログアウトしますか？",
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
        <Button variant="primary" onClick={onConfirm}>
          Logout
        </Button>
      </div>
    </Dialog>
  );
};
