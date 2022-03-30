import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { PopoverProfile } from "../popovers/popover-profile";
import { PopoverAccount } from "../popovers/popover-account";
import { PopoverCover } from "../popovers/popover-cover";
import { PopverPhotoSearch } from "../popovers/popover-photo-search";
import { PopoverMembers } from "../popovers/popover-members";
import { PopoverEditLabels } from "../popovers/popover-edit-labels";
import { PopoverAddEditLabel } from "../popovers/popover-add-edit-label";
import { PopoverDate } from "../popovers/popover-date";
import { PopoverDeleteAttachment } from "../popovers/PopoverDeleteAttachment";
import { PopoverAttachment } from "../popovers/popover-attachment";

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
    case "PHOTO-SEARCH":
      return (
        <PopverPhotoSearch
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "MEMBERS":
      return (
        <PopoverMembers
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "LABELS":
      return (
        <PopoverEditLabels
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "ADD-LABEL":
      return (
        <PopoverAddEditLabel
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "DATE":
      return (
        <PopoverDate
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "ATTACHMENT":
      return (
        <PopoverAttachment
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    case "DELETE-ATTACHMENT":
      return (
        <PopoverDeleteAttachment
          {...popoverProps}
          elPos={elPos}
          handleClose={handleClose}
        />
      );
    default:
      return "";
  }
};
