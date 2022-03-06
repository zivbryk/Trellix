import React from "react";
import Popover from "@mui/material/Popover";

export const PopoverProfile = ({
  member,
  elPos,
  isInCard = true,
  handleClose,
}) => {
  const id = "12345";

  const getStyle = () => {
    return {
      backgroundImage: `url(${member.imgUrl})`,
      backgroundSize: "cover",
    };
  };

  const onRemoveAvatar = () => {
    console.log("removing!");
  };

  return (
    <React.Fragment>
      <Popover
        className="popover"
        id={id}
        open={true}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: elPos.top + elPos.height + 8, left: elPos.left }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="popover-profile">
          <button className="btn btn-close-popover" onClick={handleClose}>
            <span className="trl icon-close"></span>
          </button>

          <div className="popover-content">
            <div className="popover-profile-header flex">
              <div title={member.fullname}>
                <div style={getStyle()}></div>
              </div>
              <div>
                <div title={member.fullname}>{member.fullname}</div>
                <div title={member.username}>@{member.username}</div>
              </div>
            </div>

            <hr />

            {isInCard && (
              <ul className="clean-list">
                <li onClick={onRemoveAvatar}>Remove from card</li>
              </ul>
            )}
          </div>
        </div>
      </Popover>
    </React.Fragment>
  );
};
