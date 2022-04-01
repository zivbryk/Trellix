import { PopoverCmp } from "./popover-cmp";

export const PopoverDeleteChecklist = ({
  elPos,
  handleClose,
  checklist,
  onDeleteChecklist,
}) => {
  return (
    <PopoverCmp
      title={`Delete ${checklist.title}?`}
      handleClose={handleClose}
      elPos={elPos}
    >
      <div className="popover-delete-checklist-content">
        <p>
          Deleting a checklist is permanent and there is no way to get it back.
        </p>

        <button className="btn btn-danger" onClick={onDeleteChecklist}>
          Delete checklist
        </button>
      </div>
    </PopoverCmp>
  );
};
