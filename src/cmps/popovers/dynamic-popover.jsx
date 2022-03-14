import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { PopoverProfile } from "../popovers/popover-profile";
import { PopoverAccount } from "../popovers/popover-account";
import { PopoverCover } from "../popovers/popover-cover";
import { closePopover } from "../../store/actions/app.actions";

export const DynamicPopover = () => {
  const currPopover = useSelector((state) => state.appReducer.currPopover);
  const dispatch = useDispatch();

  const { name, elPos, popoverProps } = currPopover;

  const handleClose = () => {
    dispatch(closePopover());
  };

  switch (name) {
    case "PROFILE":
      return (
        <PopoverProfile
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "ACCOUNT":
      return (
        <PopoverAccount
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "COVER":
      return (
        <PopoverCover
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    default:
      return "";
  }
};
