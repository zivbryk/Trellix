import { PopoverCmp } from "../popovers/popover-cmp";

export const PopoverListActions = ({
  elPos,
  handleClose,
  list,
  onDeleteList,
}) => {
  return (
    <PopoverCmp title="List actions" handleClose={handleClose} elPos={elPos}>
      <div className="popover-list-actions-content">
        <ul className="clean-list">
          <li>
            <label className="btn" onClick={() => onDeleteList(list)}>
              Delete list
            </label>
          </li>
        </ul>
      </div>
    </PopoverCmp>
  );
};
