import Popover from "@mui/material/Popover";
import { ReactComponent as CloseIcon } from "../../assets/img/icons/close.svg";

export const PopoverAccount = ({ elPos, handleClose, loggedinUser }) => {
  const getStyle = () => {
    return {
      backgroundImage: `url(${loggedinUser.imgUrl})`,
      backgroundSize: "cover",
    };
  };

  const onLogout = () => {
    console.log("logging out!");
  };

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
        <header>
          <div title="Account">Account</div>
          <button className="btn" onClick={handleClose}>
            <span>
              <CloseIcon />
            </span>
          </button>
        </header>

        <div className="popover-account-content">
          <nav>
            <ul className="clean-list">
              <div className="flex">
                <div>
                  <div
                    title={`${loggedinUser.fullname}(${loggedinUser.username})`}
                  >
                    <span
                      style={getStyle()}
                      title={`${loggedinUser.fullname}(${loggedinUser.username})`}
                    ></span>
                  </div>
                </div>

                <div>
                  <div>{loggedinUser.fullname}</div>
                  <span>{loggedinUser.email}</span>
                </div>
              </div>

              <hr />

              <li className="popover-li" onClick={onLogout}>
                Log out
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Popover>
  );
};
