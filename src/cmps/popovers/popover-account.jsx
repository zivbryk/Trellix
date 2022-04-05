import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Popover from "@mui/material/Popover";
import { ReactComponent as CloseIcon } from "../../assets/img/icons/close.svg";
import { onLogout } from "../../store/actions/user.actions";

export const PopoverAccount = ({ elPos, handleClose, loggedInUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getStyle = () => {
    return {
      backgroundImage: `url(${loggedInUser.imgUrl})`,
      backgroundSize: "cover",
    };
  };

  const onLogoutUser = () => {
    dispatch(onLogout());
    handleClose();
    navigate("/");
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
                    title={`${loggedInUser.fullname}(${loggedInUser.username})`}
                  >
                    <span
                      style={getStyle()}
                      title={`${loggedInUser.fullname}(${loggedInUser.username})`}
                    ></span>
                  </div>
                </div>

                <div>
                  <div>{loggedInUser.fullname}</div>
                  <span>{loggedInUser.email}</span>
                </div>
              </div>

              <hr />

              <li className="popover-li" onClick={onLogoutUser}>
                Log out
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Popover>
  );
};
