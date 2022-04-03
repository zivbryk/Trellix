import { PopoverCmp } from "./popover-cmp";

export const PopoverDeleteCard = ({ elPos, handleClose, onDeleteCard }) => {
  return (
    <PopoverCmp title={`Delete card?`} handleClose={handleClose} elPos={elPos}>
      <div className="popover-delete-card-content">
        <p>
          All actions will be removed from the activity feed and you won’t be
          able to re-open the card. There is no undo.
        </p>

        <button className="btn btn-danger" onClick={onDeleteCard}>
          Delete
        </button>
      </div>
    </PopoverCmp>
  );
};
