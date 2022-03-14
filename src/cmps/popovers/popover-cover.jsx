import Popover from "@mui/material/Popover";

export const PopoverCover = ({ elPos, handleClose }) => {
  return (
    <Popover
      className="popover"
      open={true}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={{ top: elPos.top + elPos.height + 6, left: elPos.left }}
    >
      <div className="popover-cover"></div>
    </Popover>
  );
};
