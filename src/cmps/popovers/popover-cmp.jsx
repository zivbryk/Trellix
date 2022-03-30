import Popover from "@mui/material/Popover";

export const PopoverCmp = ({
  elPos,
  handleClose,
  title,
  children,
  onBack,
  releaseWidth = false,
}) => {
  return (
    <Popover
      open={true}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={{ top: elPos.top + elPos.height + 6, left: elPos.left }}
    >
      <div className={`popover-wrapper ${releaseWidth ? "release-width" : ""}`}>
        <div className="popover-header">
          <span className="popover-header-title">{title}</span>
          {onBack && (
            <button className="btn btn-back" onClick={onBack}>
              <span className="trl icon-back icon-sm"></span>
            </button>
          )}
          <button className="btn btn-close" onClick={handleClose}>
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
