import type { ReactNode } from "react";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  title: string;
  message: ReactNode;
  confirmLabel: string;
  submittingLabel?: string;
  isSubmitting: boolean;
  error: string | null;
  onClose: () => void;
  onConfirm: () => void;
}

function DeleteConfirmationModal({
  isOpen,
  title,
  message,
  confirmLabel,
  submittingLabel = "Deleting...",
  isSubmitting,
  error,
  onClose,
  onConfirm,
}: DeleteConfirmationModalProps) {
  if (!isOpen) {
    return null;
  }

  function handleClose() {
    if (!isSubmitting) {
      onClose();
    }
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <section
        className="modal modal-small delete-confirmation-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-confirmation-title"
        aria-describedby="delete-confirmation-message"
      >
        <div className="modal-body">
          <h2
            id="delete-confirmation-title"
            className="modal-form-title"
          >
            {title}
          </h2>

          <div
            id="delete-confirmation-message"
            className="modal-message"
          >
            {message}
          </div>

          {error && (
            <p className="form-submit-error" role="alert">
              {error}
            </p>
          )}
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="secondary-button"
            disabled={isSubmitting}
            onClick={handleClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className="danger-button"
            disabled={isSubmitting}
            onClick={onConfirm}
          >
            {isSubmitting ? submittingLabel : confirmLabel}
          </button>
        </div>
      </section>
    </div>
  );
}

export default DeleteConfirmationModal;