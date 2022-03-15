import Popover from "@mui/material/Popover";

export const PopoverCmp = ({ elPos, handleClose, title, children }) => {
  return (
    <Popover
      open={true}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={{ top: elPos.top + elPos.height + 6, left: elPos.left }}
    >
      <div className="popover-wrapper">
        <div className="popover-header">
          <span className="popover-header-title">{title}</span>
          <button className="btn" onClick={handleClose}>
            <span className="trl icon-close icon-sm"></span>
          </button>
        </div>

        <div>
          <div className="popover-content">{children}</div>
        </div>
      </div>
    </Popover>
  );
};
