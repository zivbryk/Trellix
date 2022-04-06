import Popover from "@mui/material/Popover";

export const PopoverCmp = ({
  elPos,
  handleClose,
  title,
  children,
  onBack,
  releaseWidth = false,
  mod,
}) => {
  return (
    <Popover
      open={true}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={
        mod === "menu"
          ? { top: 44, left: window.innerWidth }
          : { top: elPos.top + elPos.height + 6, left: elPos.left }
      }
      marginThreshold={mod === "menu" ? 0 : 16}
      classes={{ paper: mod === "menu" ? "menu" : "" }}
    >
      <div
        className={`popover-wrapper ${releaseWidth ? "release-width" : ""} ${
          mod === "menu" ? "menu" : ""
        }`}
      >
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
