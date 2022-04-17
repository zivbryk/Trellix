import { PopoverCmp } from "./popover-cmp";
import { ReactComponent as Taco } from "../../assets/img/icons/notifications-dog.svg";

export const PopoverNotifications = ({ elPos, handleClose }) => {
  return (
    <PopoverCmp title={"Notifications"} handleClose={handleClose} elPos={elPos}>
      <div className="popover-notifications-content">
        <div className="notifications-container">
          <div className="no-notifications-banner">
            <Taco />

            <div>
              <h3>No notifications</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </PopoverCmp>
  );
};
