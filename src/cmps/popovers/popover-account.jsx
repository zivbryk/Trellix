import Popover from "@mui/material/Popover";

export const PopoverAccount = ({ elPos, handleClose, loggedinUser }) => {
  console.log(elPos.left);
  return (
    <Popover
      className="popover"
      open={true}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={{
        top: elPos.top + elPos.height + 8,
        left: elPos.left,
      }}
    >
      <div className="popover-account">
        {/* <button className="btn btn-close-popover" onClick={handleClose}>
          <span className="trl icon-close"></span>
        </button> */}

        <div className="popover-content">
          <header>
            <div title="Account">Account</div>
            <button className="btn" onClick={handleClose}>
              <span className="trl icon-close"></span>
            </button>
          </header>
        </div>
      </div>
    </Popover>
  );
};
