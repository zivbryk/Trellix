import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { PopoverProfile } from "../popovers/popover-profile";
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
    default:
      return "";
  }
};
